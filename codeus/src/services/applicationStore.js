import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";

const LOCAL_STORAGE_KEY = "applications";
const COLLECTION_NAME = "applications";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const hasFirebaseConfig = Object.values(firebaseConfig).every(Boolean);

if (!hasFirebaseConfig) {
  console.warn(
    "[Firebase] 환경 변수 미설정. localStorage 모드로 동작합니다.\n" +
    ".env 파일에 VITE_FIREBASE_API_KEY 등의 값을 입력하세요."
  );
}

let db = null;
if (hasFirebaseConfig) {
  try {
    const app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    console.log("[Firebase] Firestore 초기화 성공");
  } catch (error) {
    console.error("[Firebase] 초기화 실패:", error.message);
  }
}

export const isFirebaseEnabled = () => Boolean(db);

const getLocalApplications = () => {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "[]");
};

const setLocalApplications = (applications) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(applications));
};

export const addApplication = async (applicationInput) => {
  const payload = {
    studentId: applicationInput.studentId,
    name: applicationInput.name,
    email: applicationInput.email,
    gender: applicationInput.gender,
    appeal: applicationInput.appeal,
    submittedAt: new Date().toLocaleString("ko-KR"),
  };

  if (!db) {
    const applications = getLocalApplications();
    const newApplication = { ...payload, id: Date.now() };
    applications.push(newApplication);
    setLocalApplications(applications);
    return newApplication;
  }

  const docRef = await addDoc(collection(db, COLLECTION_NAME), {
    ...payload,
    createdAt: serverTimestamp(),
  });

  return { ...payload, id: docRef.id };
};

export const getApplications = async () => {
  if (!db) {
    return getLocalApplications();
  }

  const q = query(collection(db, COLLECTION_NAME), orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((item) => ({
    id: item.id,
    ...item.data(),
  }));
};

export const deleteApplication = async (applicationId) => {
  if (!db) {
    const updated = getLocalApplications().filter((app) => app.id !== applicationId);
    setLocalApplications(updated);
    return;
  }

  await deleteDoc(doc(db, COLLECTION_NAME, String(applicationId)));
};
