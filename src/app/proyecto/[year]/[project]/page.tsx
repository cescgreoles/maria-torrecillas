import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import { promises as fs } from "fs";
import PhotoCarousel from "@/components/PhotoCarousel";

interface Props {
  params: {
    year: string;
    project: string;
  };
}

const Proyecto = async ({ params: { year, project } }: Props) => {
  const photos = (
    await fs.readdir(process.cwd() + `/public/image/${year}/${project}`)
  ).filter((name) => name !== ".DS_Store");
  console.log(photos);

  return (
    <div className="container mx-auto px-4 bg-black text-white">
      <header className="flex justify-between items-center py-8">
        <div className="flex items-center">
          <Image
            src={logo}
            alt="Logo"
            className="h-12 w-12 mr-4"
            width={48}
            height={48}
          />
          <h1 className="text-2xl lg:text-4xl">PROYECTOS</h1>
        </div>

        <Link href="/" className="text-white text-1xl uppercase">
          <span className="block lg:hidden">
            <FaTimes className="text-2xl" />
          </span>

          <span className="hidden lg:block">CERRAR</span>
        </Link>
      </header>

      <main className="mt-10 relative w-full h-fit">
        <PhotoCarousel photos={photos} year={year} project={project} />
      </main>
    </div>
  );
};

export default Proyecto;
