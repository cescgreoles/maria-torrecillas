"use client";

import { useEffect, useState } from "react";
import PhotoCarousel from "@/components/PhotoCarousel";

interface Props {
  params: { year: string; project: string };
}

export default function ProjectPage({ params }: Props) {
  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    fetch(`/api/photos?year=${params.year}&project=${params.project}`)
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, [params.year, params.project]);

  if (!photos.length) return <p>Loading images...</p>;

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-center text-2xl mb-8">{`Project ${params.project} - ${params.year}`}</h1>
      <PhotoCarousel
        photos={photos}
        year={params.year}
        project={params.project}
      />
    </div>
  );
}
