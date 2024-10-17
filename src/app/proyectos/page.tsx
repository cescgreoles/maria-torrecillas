import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import { promises as fs } from "fs";

const Proyectos: React.FC = async () => {
  const years = (await fs.readdir(process.cwd() + "/public/image")).filter(
    (name) => name !== ".DS_Store"
  );

  const projects = await Promise.all(
    years.map(async (year) => {
      const result = await fs.readdir(process.cwd() + `/public/image/${year}`);
      return {
        [year]: result.filter((name) => name !== ".DS_Store"),
      };
    })
  );

  const yearProjects = projects.reduce((acc, curr) => {
    return { ...acc, ...curr };
  }, {});

  return (
    <div className="container mx-auto px-4 bg-black text-white">
      <header className="flex justify-between items-center py-8">
        <div className="flex items-center">
          <Link href={"/"}>
            <Image
              src={logo}
              alt="Logo"
              className="h-12 w-12 mr-4"
              width={48}
              height={48}
            />
          </Link>

          <h1 className="text-2xl lg:text-4xl">PROYECTOS</h1>
        </div>

        <Link href="/" className="text-white text-2xl uppercase">
          <span className="block lg:hidden">
            <FaTimes className="text-2xl" />
          </span>

          <span className="hidden lg:block text-white text-xl uppercase border-b-2 border-white pb-1">
            CERRAR
          </span>
        </Link>
      </header>

      <main className="mt-10">
        {Object.entries(yearProjects).map(async ([year, projects]) => {
          return (
            <section
              key={year}
              className="mb-8 flex justify-between w-full h-full border-b-2 border-white "
            >
              <h2 className="text-2xl mb-4 mr-4">{year}</h2>

              <div className="flex-grow flex items-center justify-center">
                <div className=" grid w-fit grid-cols-1 md:grid-cols-2 gap-x-16 ">
                  {projects.map((project, i) => (
                    <Link
                      href={`/proyecto/${year}/${project}`}
                      key={project}
                      className="w-fit p-4 flex gap-2"
                    >
                      <Image
                        src={`/image/${year}/${project}/1.JPG`}
                        alt={`Imagen del proyecto ${project} | ${year}`}
                        className="w-100 h-32 mr-2"
                        width={200}
                        height={128}
                      />

                      <p className="text-xl tracking-widest">
                        {i < 9 ? `0${i + 1}` : i + 1}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
};

export default Proyectos;
