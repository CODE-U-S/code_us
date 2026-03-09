// Vite public folder asset helper
export const getAssetUrl = (filename) => {
  return `${import.meta.env.BASE_URL}${filename}`;
};
