"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Modal from "@/components/Modal"; // Importa el componente Modal

interface Props {
  photos: string[];
  year: string;
  project: string;
}

const PhotoCarousel = ({ photos, year, project }: Props) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [mainApi, setMainApi] = useState<CarouselApi>();
  const [thumbnailApi, setThumbnailApi] = useState<CarouselApi>();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const onThumbnailClick = useCallback(
    (index: number) => mainApi?.scrollTo(index),
    [mainApi]
  );

  const onImageSelect = useCallback(() => {
    if (!mainApi || !thumbnailApi) return;
    setSelectedImageIndex(mainApi.selectedScrollSnap());
    thumbnailApi.scrollTo(mainApi.selectedScrollSnap());
  }, [mainApi, thumbnailApi]);

  const openModal = (image: string) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    if (!mainApi) return;
    onImageSelect();
    mainApi.on("select", onImageSelect);
    mainApi.on("reInit", onImageSelect);

    return () => {
      mainApi.off("select", onImageSelect);
      mainApi.off("reInit", onImageSelect);
    };
  }, [mainApi, onImageSelect]);

  return (
    <div className="w-full flex flex-col gap-4 ">
      <Carousel
        opts={{ align: "start", loop: false }}
        className="w-2/3 mx-auto"
        setApi={setMainApi}
      >
        <CarouselContent className="w-full p-0 m-0">
          {photos.map((photo) => (
            <CarouselItem
              key={`main_${photo}`}
              className="aspect-[3/2] rounded-md h-fit w-full basis-auto p-0 m-0"
            >
              <Image
                src={`/image/${year}/${project}/${photo}`}
                alt={`Imagen del proyecto ${project} | ${year}`}
                className="w-full rounded-md h-full mr-2 aspect-[3/2] cursor-pointer"
                width={1000}
                height={600}
                onClick={() => openModal(`/image/${year}/${project}/${photo}`)} // Abre el modal al hacer clic
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        {photos.length > 1 && (
          <CarouselPrevious variant="default" size="default" />
        )}
        {photos.length > 1 && <CarouselNext variant="default" size="default" />}
      </Carousel>

      <Carousel
        opts={{ align: "center", loop: false, dragFree: true }}
        className="w-2/3 mx-auto"
        setApi={setThumbnailApi}
      >
        <CarouselContent className="w-full">
          {photos.map((photo, i) => (
            <CarouselItem
              key={photo}
              className="aspect-[3/2] h-fit w-full basis-[24%] md:basis-[16%] rounded-md"
            >
              <Button
                variant="link"
                className={cn(
                  "aspect-[3/2] rounded-md group flex h-fit flex-col border border-transparent p-0 m-0 opacity-50 hover:opacity-100 transition",
                  selectedImageIndex === i && "border-white/70 opacity-100"
                )}
                onClick={() => onThumbnailClick(i)}
              >
                <Image
                  src={`/image/${year}/${project}/${photo}`}
                  alt={`Imagen del proyecto ${project} | ${year}`}
                  className="w-full h-full aspect-[3/2] rounded-md"
                  width={200}
                  height={128}
                  onClick={() =>
                    openModal(`/image/${year}/${project}/${photo}`)
                  } // Abre el modal al hacer clic
                />
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Modal para mostrar la imagen ampliada */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageSrc={selectedImage}
      />
    </div>
  );
};

export default PhotoCarousel;
