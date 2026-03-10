# CODE:US

IT & Design 동아리 CODE:US 공식 웹사이트

## Tech Stack

- React 19.2
- Vite 8
- React Router 7

## Development

```bash
npm install
npm run dev
```

## Firebase Setup (Cross-Device Applications)

`support` and `applications` pages use Firebase Firestore when Firebase env vars are set.
If env vars are not set, the app automatically falls back to browser `localStorage`.

1. Create `.env` file in `codeus` folder.
2. Fill all `VITE_FIREBASE_*` values from Firebase project settings.
3. Create a Firestore database in Firebase console.
4. Run `npm run dev`.

Collection name used by this project: `applications`

## Build

```bash
npm run build
```
