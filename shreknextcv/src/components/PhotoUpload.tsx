"use client"; // til að sleppa við server ves

import React, { useState } from "react";
import Image from "next/image";

const PhotoUpload: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="mt-4">
      <label htmlFor="photo-upload" className="block text-lg font-bold text-center">
        Upload Photo:
      </label>
      <input
        type="file"
        id="photo-upload"
        accept="image/*"
        onChange={handleImageUpload}
        className="mt-2 block p-2 border"
      />
      {image && (
        <div className="relative mt-4 h-32 w-32">
          <Image
            src={image}
            alt="Uploaded Photo"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
      )}
    </div>
  );
};

export default PhotoUpload;
