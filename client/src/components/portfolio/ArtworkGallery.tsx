import { useState } from "react";

interface ArtworkItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  alt: string;
}

export default function ArtworkGallery() {
  const [selectedImage, setSelectedImage] = useState<ArtworkItem | null>(null);

  const artworks: ArtworkItem[] = [
    {
      id: 1,
      title: "Epic Tank Battle",
      description: "Digital artwork featuring intense tank combat",
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Tank Battle Scene"
    },
    {
      id: 2,
      title: "Hornet Concept",
      description: "Redesigned Hornet hull with modern aesthetics",
      imageUrl: "https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Tank Concept Design"
    },
    {
      id: 3,
      title: "Railgun Master",
      description: "Detailed study of the Railgun turret system",
      imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Railgun Concept"
    },
    {
      id: 4,
      title: "Arena Design",
      description: "Custom battlefield environment concept",
      imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Tanki Arena Design"
    },
    {
      id: 5,
      title: "Victory Moment",
      description: "Capturing the essence of triumph",
      imageUrl: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Victory Scene"
    },
    {
      id: 6,
      title: "Abstract Combat",
      description: "Experimental digital composition",
      imageUrl: "https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Abstract Tank Art"
    }
  ];

  const openLightbox = (artwork: ArtworkItem) => {
    setSelectedImage(artwork);
  };

  return (
    <section id="artwork" className="py-20 bg-tanki-blue/20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="font-orbitron font-bold text-4xl md:text-5xl text-tanki-orange">
              ARTWORK GALLERY
            </h2>
            <div className="w-20 h-1 bg-tanki-orange mx-auto"></div>
            <p className="text-lg text-tanki-light/80 max-w-2xl mx-auto">
              Explore my collection of Tanki Online fan art, featuring tank designs, battle scenes, and concept artwork.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artworks.map((artwork) => (
              <div
                key={artwork.id}
                className="artwork-item rounded-xl overflow-hidden border-2 border-tanki-orange/30 hover:border-tanki-orange transition-all duration-300 cursor-pointer"
                onClick={() => openLightbox(artwork)}
              >
                <img
                  src={artwork.imageUrl}
                  alt={artwork.alt}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-orbitron font-bold text-lg text-tanki-orange">{artwork.title}</h3>
                  <p className="text-tanki-light/70 text-sm">{artwork.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
