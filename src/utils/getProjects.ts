import { ref, getDownloadURL } from "@firebase/storage";
import { storage } from "../firebase.config";

async function getImageUrl(
  year: number,
  folderNumber: number,
  fileNumber: number
): Promise<string> {
  const path = `${year}/${folderNumber}/${fileNumber}.webp`;
  const imageRef = ref(storage, path);

  try {
    const url = await getDownloadURL(imageRef);
    return url;
  } catch (error) {
    console.error("Error al obtener la URL de la imagen:", error);
    throw error;
  }
}

export { getImageUrl };
