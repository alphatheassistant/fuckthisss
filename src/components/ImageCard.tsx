import { Card } from '@/components/ui/card';
import { Bot } from 'lucide-react';
import type { Image } from '@/types';

interface ImageCardProps {
  image: Image;
  onClick: () => void;
}

export function ImageCard({ image, onClick }: ImageCardProps) {
  // Randomly decide whether to show the image or the div
  const showDiv = Math.random() > 0.7; // ~30% chance to show the div

  return (
    <Card className="group overflow-hidden sm:rounded-lg rounded-none border sm:border">
      {showDiv ? (
        // Render the alternative div content
        <div id="container-13b58771286b2e80621647c218b9e829"></div>
      ) : (
        // Render the image as usual
        <div onClick={onClick} className="relative aspect-square cursor-pointer">
          <img
            src={image.url}
            alt={image.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="font-medium text-lg text-white mb-1">
                {image.title.length > 28
                  ? `${image.title.substring(0, 28)}..`
                  : image.title}
              </h3>
              <p className="text-sm text-white/80 mb-2">
                {image.prompt.length > 38
                  ? `${image.prompt.substring(0, 37.5)}..`
                  : image.prompt}
              </p>
              <div className="flex items-center text-white/80">
                <div className="flex items-center gap-1 text-sm">
                  <Bot className="w-3 h-3" />
                  <span>{image.model}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}
