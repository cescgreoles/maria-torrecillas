"use client";

import { useImageStore } from "../lib/useImageStore";
import Image from "next/image";

interface GaleriaProps {
  images: {
    [year: string]: string[][];
  };
}

const Galeria: React.FC<GaleriaProps> = ({ images }) => {
  const visibleCount = useImageStore((state) => state.visibleCount);
  const increaseVisibleCount = useImageStore(
    (state) => state.increaseVisibleCount
  );

  return (
    <div className="space-y-8">
      {Object.entries(images).map(([year, projects]) => (
        <div key={year}>
          <h2 className="text-2xl font-semibold mb-4">{year}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {projects
              .flat()
              .slice(0, visibleCount)
              .map((imagePath, index) => (
                <div key={index} className="overflow-hidden rounded-lg">
                  <Image
                    src={imagePath}
                    width={500}
                    height={300}
                    layout="responsive"
                    alt={`Imagen ${index}`}
                    loading="lazy"
                    quality={75}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
          </div>
          {visibleCount < projects.flat().length && (
            <button
              onClick={increaseVisibleCount}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Cargar más
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Galeria;
