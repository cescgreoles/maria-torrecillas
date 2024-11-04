"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import Navbar from "../components/Navbar";
import imagePortada from "../../public/image/2016/1/1.webp";

const projects = [
  { year: 2016, image: "/image/2016/1/1.webp" },
  { year: 2020, image: "/image/2020/1/1.webp" },
  { year: 2021, image: "/image/2021/1/1.webp" },
  { year: 2022, image: "/image/2022/1/1.webp" },
  { year: 2023, image: "/image/2023/1/1.webp" },
  { year: 2024, image: "/image/2024/1/1.webp" },
];

interface YearButtonsProps {
  onSelectYear: (year: number) => void;
  selectedYear: number | null;
}

const YearButtons = ({ onSelectYear, selectedYear }: YearButtonsProps) => {
  return (
    <div className="absolute bottom-10 inset-x-0 flex justify-center space-x-4">
      {projects.map((project) => (
        <div
          key={project.year}
          className={`cursor-pointer transform transition duration-300 ease-in-out hover:scale-105 ${
            selectedYear === project.year ? "border-4 border-white" : ""
          }`}
          onClick={() => onSelectYear(project.year)}
        >
          <Image
            src={project.image}
            alt={`Project ${project.year}`}
            className="w-16 h-16 object-cover rounded-md"
            width={64}
            height={64}
            loading="lazy"
            placeholder="blur"
            blurDataURL="/path/to/lowres/image.webp"
          />
        </div>
      ))}
    </div>
  );
};

const Inicio = () => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const handleSelectYear = (year: number) => {
    setSelectedYear(year);
  };

  return (
    <div className="relative w-screen h-screen flex flex-col">
      <Image
        src={imagePortada}
        className="w-full h-full inset-0 object-cover object-center absolute -z-20"
        width={1920}
        height={1080}
        alt="portada"
        priority
      />

      <div className="absolute top-10 left-10">
        <h1 className="text-2xl lg:text-4xl text-white">MARIA TORRECILLAS</h1>
        <p className="text-lg lg:text-xl text-white">FOTOGRAFÍA</p>
      </div>

      <div className="flex flex-col justify-center items-center h-full px-4">
        <Link href={`/${selectedYear}`}>
          <Image src={logo} alt="logo" className="w-12 mb-4" priority />

          {selectedYear && (
            <p className="text-lg lg:text-xl text-white mt-2 cursor-pointer">
              {selectedYear}
            </p>
          )}
        </Link>
      </div>

      <YearButtons
        onSelectYear={handleSelectYear}
        selectedYear={selectedYear}
      />

      <Navbar />
    </div>
  );
};

export default Inicio;
