"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import Navbar from "../components/Navbar";

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
    <div className="flex justify-center mt-4 space-x-4">
      {projects.map((project) => (
        <div
          key={project.year}
          className={`cursor-pointer transform transition duration-300 ease-in-out hover:scale-105 ${
            selectedYear === project.year ? "border-4 border-blue-600" : ""
          }`}
          onClick={() => onSelectYear(project.year)}
        >
          <Image
            src={project.image}
            alt={`Project ${project.year}`}
            className="w-32 h-32 object-cover rounded-md"
            width={128}
            height={128}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

const Inicio = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSelectYear = (year: number) => {
    if (selectedYear === year) {
      // Navigate to the page if the same year is clicked again
      window.location.href = `/${year}`;
    } else {
      // Set the selected year on first click
      setSelectedYear(year);
    }
  };

  return (
    <div className="relative w-screen h-screen flex flex-col">
      <Image
        src={projects[currentImageIndex].image}
        className="w-full h-full inset-0 object-cover object-center absolute -z-20"
        width={400}
        height={300}
        alt="portada"
        priority // Consider using priority for the background image
      />

      <div className="absolute top-10 left-10">
        <h1 className="text-2xl lg:text-4xl text-white">MARIA TORRECILLAS</h1>
        <p className="text-lg lg:text-xl text-white">FOTOGRAFÍA</p>
      </div>

      <div className="flex flex-col justify-center items-center h-full px-4">
        <Link href={"/proyectos"}>
          <Image src={logo} alt="logo" className="w-12 mb-4" />
        </Link>

        {selectedYear && (
          <p className="text-lg lg:text-xl text-white mt-2">{selectedYear}</p>
        )}

        <YearButtons
          onSelectYear={handleSelectYear}
          selectedYear={selectedYear}
        />
      </div>

      <Navbar />
    </div>
  );
};

export default Inicio;
