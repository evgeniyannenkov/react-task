import React, { FC, useState, useEffect, useRef } from "react";
import { ImagePlaceholder } from "../image-placeholder";

interface ImageProps {
  src?: string;
  alt?: string;
}

export const Image: FC<ImageProps> = ({ src, alt }) => {
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const imgElement = imgRef.current;

    const handleError = () => {
      setError(true);
    };
    // Reset the state after the error is processed
    setError(false);

    imgElement?.addEventListener("error", handleError);

    return () => {
      imgElement?.removeEventListener("error", handleError);
    };
  }, [src]);

  if (error) {
    return <ImagePlaceholder />;
  }

  return <img ref={imgRef} src={src} alt={alt} />;
};
