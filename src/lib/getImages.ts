import fs from "fs";
import path from "path";

const imageDirectory = path.join(process.cwd(), "public", "image");

interface ImagesStructure {
  [year: string]: string[][];
}

// Haz que getImages sea asíncrono para trabajar con la API de datos en el directorio `app`
export async function getImages(): Promise<ImagesStructure> {
  const years = await fs.promises.readdir(imageDirectory);

  const images = await years.reduce(
    async (accPromise: Promise<ImagesStructure>, year) => {
      const acc = await accPromise;
      const yearPath = path.join(imageDirectory, year);

      // Verifica si el elemento es una carpeta antes de intentar leer proyectos dentro
      if (!fs.lstatSync(yearPath).isDirectory()) {
        return acc;
      }

      const projectPaths = await fs.promises.readdir(yearPath);

      acc[year] = await Promise.all(
        projectPaths.map(async (project) => {
          const projectPath = path.join(yearPath, project);

          // Verifica si el elemento es una carpeta de proyecto antes de procesar imágenes
          if (!fs.lstatSync(projectPath).isDirectory()) {
            return []; // Devuelve una lista vacía para este proyecto si no es un directorio
          }

          const imagesInProject = await fs.promises.readdir(projectPath);
          return imagesInProject
            .filter((image) => /\.(png|jpg|jpeg|webp)$/i.test(image)) // Solo imágenes válidas
            .map((image) => `/image/${year}/${project}/${image}`);
        })
      );

      return acc;
    },
    Promise.resolve({})
  );

  return images;
}
