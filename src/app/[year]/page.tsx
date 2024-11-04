import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import path from "path";
import { promises as fs } from "fs";

async function getProjects(year: string) {
  const imageDir = path.join(process.cwd(), "public", "image", year);
  try {
    const projects = await fs.readdir(imageDir);
    return projects.filter((name) => name !== ".DS_Store");
  } catch (error) {
    console.error("Error al leer el directorio de proyectos:", error);
    return [];
  }
}

interface Props {
  params: { year: string };
}

export default async function YearPage({ params }: Props) {
  const projects = await getProjects(params.year);

  return (
    <div className="container mx-auto px-4 bg-black text-white">
      <header className="flex justify-between items-center py-8">
        <Link href="/">
          <Image src={logo} alt="Logo" width={48} height={48} />
        </Link>
        <h1 className="text-2xl lg:text-4xl">{params.year}</h1>
      </header>

      <main className="mt-10">
        {projects.length > 0 ? (
          projects.map((project, i) => (
            <Link key={project} href={`/${params.year}/${project}`}>
              <div className="mb-8 flex justify-between w-full h-full border-b-2 border-white">
                <Image
                  src={`/image/${params.year}/${project}/1.webp`}
                  alt={`Imagen del proyecto ${project} | ${params.year}`}
                  className="w-100 h-32 mr-2"
                  width={200}
                  height={128}
                />
                <p className="text-xl tracking-widest">
                  {i < 9 ? `0${i + 1}` : i + 1}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <p>No hay proyectos para este año.</p>
        )}
      </main>
    </div>
  );
}
