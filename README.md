This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

PHOTO PERDIDA 2021/2/5

## CAROUSEL MOBILE MÉS GRAN AMB LES FOTOS A BAIX (PETITES I SENSE BORDER)

## LA CREU DE CONTACTO

## LA X I CERRAR AL MATEIX LLOC DEL MENÚ

## IS ACTIVE AL MENÚ

## QUE SILUMINI QUAN PASIS PER SOBRE DEL PROJECTE

## TENIR AL COSTAT DRET EL ANY I A BAIX PROJECTE I FOTO

## PONER LA FOTO GRANDE

## CUANDO PASES POR ENCIMA DEL MENÚ QUE EN COMPTES DE BLANC SIGUI GRAY

## sistema sense map

rules_version = '2';

service firebase.storage {
match /b/{bucket}/o {
match /{allPaths=\*\*} {
allow read, write: if false;
}
}
}

// "use client";

// import React, { useEffect, useState } from "react";
// import { storage } from "../../firebase.config"; // Ajusta la ruta según tu proyecto
// import { ref, listAll, getDownloadURL } from "@firebase/storage";
// import Image from "next/image";
// import Link from "next/link";
// import logo from "@/assets/logo.png";
// import { FaTimes } from "react-icons/fa";

// // Define la estructura de los datos para cada imagen
// interface ImageData {
// name: string;
// url: string;
// }

// // Define la estructura de las imágenes organizadas por años y proyectos
// interface ImagesByYear {
// [year: string]: {
// [project: number]: ImageData;
// };
// }

// const ImageGallery: React.FC = () => {
// const [images, setImages] = useState<ImagesByYear>({});
// const [loading, setLoading] = useState(true);

// // Función para obtener imágenes de Firebase
// const fetchImages = async () => {
// const years = [2016, 2020, 2021, 2022, 2023, 2024];
// const imagesByYear: ImagesByYear = {};

// for (const year of years) {
// const yearRef = ref(storage, `${year}/`);
// const projectsList = await listAll(yearRef);

// for (const projectFolder of projectsList.prefixes) {
// const projectNumber = parseInt(projectFolder.name);
// const imageRef = ref(storage, `${year}/${projectNumber}/1.webp`);

// try {
// const url = await getDownloadURL(imageRef);
// if (!imagesByYear[year]) {
// imagesByYear[year] = {};
// }
// imagesByYear[year][projectNumber] = { name: "1.webp", url };
// } catch (error) {
// console.warn(
// `No se pudo cargar la imagen del proyecto ${projectNumber} en ${year}:`,
// error
// );
// }
// }
// }

// setImages(imagesByYear);
// setLoading(false);
// };

// useEffect(() => {
// fetchImages();
// }, []);

// return (
// <div className="container mx-auto px-4 bg-black text-white">
// <header className="flex justify-between items-center py-8">
// <div className="flex items-center">
// <Link href="/">
// <Image
// src={logo}
// alt="Logo"
// className="h-12 w-12 mr-4"
// width={48}
// height={48}
// />
// </Link>
// <h1 className="text-2xl lg:text-4xl">PROYECTOS</h1>
// </div>
// <Link href="/" className="text-white text-2xl uppercase">
// <span className="block lg:hidden">
// <FaTimes className="text-2xl" />
// </span>
// <span className="hidden lg:block text-white text-xl uppercase border-b-2 border-white pb-1">
// CERRAR
// </span>
// </Link>
// </header>

// <main className="mt-10">
// {loading ? (
// <p>Cargando imágenes...</p>
// ) : (
// Object.entries(images).map(([year, projects]) => (
// <section
// key={year}
// className="mb-8 flex justify-between w-full h-full border-b-2 border-white"
// >
// <h2 className="text-2xl mb-4 mr-4">{year}</h2>
// <div className="flex-grow flex items-center justify-center">
// <div className="grid w-fit grid-cols-1 md:grid-cols-2 gap-x-16">
// {Object.keys(projects).map((projectKey, i) => {
// const projectNumber = parseInt(projectKey);
// const project = projects[projectNumber];
// return (
// <Link
// href={`/proyecto/${year}/${projectNumber}`}
// key={projectNumber}
// className="w-fit p-4 flex gap-2"
// >
// <Image
// src={project.url}
// alt={`Imagen del proyecto ${projectNumber} | ${year}`}
// width={200}
// height={128}
// placeholder="blur"
// blurDataURL="/path/to/blurred-placeholder.webp"
// />

// <p className="text-xl tracking-widest">
// {i < 9 ? `0${i + 1}` : i + 1}
// </p>
// </Link>
// );
// })}
// </div>
// </div>
// </section>
// ))
// )}
// </main>
// </div>
// );
// };

// export default ImageGallery;

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import logo from "@/assets/logo.png";
// import { FaTimes } from "react-icons/fa";
// import path from "path";
// import { promises as fs } from "fs";

// async function getProjects() {
// const imageDir = path.join(process.cwd(), "public", "image");

// const years = (await fs.readdir(imageDir)).filter(
// (name) => name !== ".DS_Store"
// );

// const projects = await Promise.all(
// years.map(async (year) => {
// const yearDir = path.join(imageDir, year);
// const result = await fs.readdir(yearDir);
// return {
// [year]: result.filter((name) => name !== ".DS_Store"),
// };
// })
// );

// return projects.reduce((acc, curr) => {
// return { ...acc, ...curr };
// }, {});
// }

// const Proyectos: React.FC = async () => {
// const yearProjects = await getProjects();

// return (
// <div className="container mx-auto px-4 bg-black text-white">
// <header className="flex justify-between items-center py-8">
// <div className="flex items-center">
// <Link href="/">
// <Image
// src={logo}
// alt="Logo"
// className="h-12 w-12 mr-4"
// width={48}
// height={48}
// />
// </Link>
// <h1 className="text-2xl lg:text-4xl">PROYECTOS</h1>
// </div>

// <Link href="/" className="text-white text-2xl uppercase">
// <span className="block lg:hidden">
// <FaTimes className="text-2xl" />
// </span>
// <span className="hidden lg:block text-white text-xl uppercase border-b-2 border-white pb-1">
// CERRAR
// </span>
// </Link>
// </header>

// <main className="mt-10">
// {Object.entries(yearProjects).map(([year, projects]) => (
// <section
// key={year}
// className="mb-8 flex justify-between w-full h-full border-b-2 border-white"
// >
// <h2 className="text-2xl mb-4 mr-4">{year}</h2>
// <div className="flex-grow flex items-center justify-center">
// <div className="grid w-fit grid-cols-1 md:grid-cols-2 gap-x-16">
// {projects.map((project, i) => (
// <Link
// href={`/proyecto/${year}/${project}`}
// key={project}
// className="w-fit p-4 flex gap-2"
// >
// <Image
// src={`/image/${year}/${project}/1.webp`}
// alt={`Imagen del proyecto ${project} | ${year}`}
// className="w-100 h-32 mr-2"
// width={200}
// height={128}
// />
// <p className="text-xl tracking-widest">
// {i < 9 ? `0${i + 1}` : i + 1}
// </p>
// </Link>
// ))}
// </div>
// </div>
// </section>
// ))}
// </main>
// </div>
// );
// };

// export default Proyectos;
