"use client";

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
    <div className="mt-4 flex flex-col items-center">
      {image && (
        <div className="relative h-56 w-56 md:w-64 lg:w-72 mb-4">
          <Image
            src={image}
            alt="Uploaded Photo"
            layout="fill"
            objectFit="contain"
            className="rounded-lg shadow-lg"
          />
        </div>
      )}
      <label htmlFor="photo-upload" className="block text-lg font-bold mb-2">
        Upload Photo:
      </label>
      <input
        type="file"
        id="photo-upload"
        accept="image/*"
        onChange={handleImageUpload}
        className="border-2 border-gray-300 rounded-lg p-3 hover:border-blue-500"
      />
    </div>
  );
};

export default PhotoUpload;
