"use client";

import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

const images = ["/photo1.jpg", "/photo2.jpg", "/photo3.jpg", "/photo4.jpg"];

const Inicio = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen h-screen">
      <Image
        src={images[currentImageIndex]}
        className="w-full h-full inset-0 object-cover object-center absolute -z-20"
        width={400}
        height={300}
        alt="portada"
      />

      <div className="absolute top-10 left-10">
        <h1 className="text-2xl lg:text-4xl text-white">MARIA TORRECILLAS</h1>
        <p className="text-lg lg:text-xl text-white">FOTOGRAFÍA</p>
      </div>

      <div className="flex justify-center items-center h-full">
        <Link href={"/proyectos"}>
          <Image src={logo} alt="logo" className="w-12" />
        </Link>
      </div>

      <Navbar />
    </div>
  );
};

export default Inicio;
