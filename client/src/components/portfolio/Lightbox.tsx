import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface LightboxProps {
  isOpen?: boolean;
  imageSrc?: string;
  imageAlt?: string;
  onClose?: () => void;
}

export default function Lightbox({ isOpen, imageSrc, imageAlt, onClose }: LightboxProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [internalImageSrc, setInternalImageSrc] = useState("");
  const [internalImageAlt, setInternalImageAlt] = useState("");

  // Use internal state if props are not provided (for global lightbox)
  const currentIsOpen = isOpen !== undefined ? isOpen : internalIsOpen;
  const currentImageSrc = imageSrc || internalImageSrc;
  const currentImageAlt = imageAlt || internalImageAlt;

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      setInternalIsOpen(false);
      setInternalImageSrc("");
      setInternalImageAlt("");
    }
    document.body.style.overflow = "auto";
  };

  // Global lightbox functions
  useEffect(() => {
    if (isOpen === undefined) {
      // Only set up global functions if not controlled by props
      (window as any).openLightbox = (img: HTMLImageElement) => {
        setInternalImageSrc(img.src);
        setInternalImageAlt(img.alt);
        setInternalIsOpen(true);
        document.body.style.overflow = "hidden";
      };

      (window as any).closeLightbox = handleClose;
    }
  }, [isOpen]);

  // Close with Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && currentIsOpen) {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [currentIsOpen]);

  if (!currentIsOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onClick={handleClose}
    >
      <div className="relative max-w-4xl max-h-full">
        <img
          src={currentImageSrc}
          alt={currentImageAlt}
          className="max-w-full max-h-full border-2 border-tanki-orange rounded-lg"
          onClick={(e) => e.stopPropagation()}
        />
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-tanki-light hover:text-tanki-orange transition-colors bg-tanki-dark/50 rounded-full p-2"
        >
          <X size={24} />
        </button>
      </div>
    </div>
  );
}
