'use client';

import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const ProductImages = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="space-y-4">
      <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-gray-100 border">
        <Image
          src={images[current]}
          alt="product image"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-all duration-500 hover:scale-105"
        />
      </div>
      {images.length > 1 && (
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {images.map((image, index) => (
            <button
              key={image}
              onClick={() => setCurrent(index)}
              className={cn(
                'relative aspect-square w-24 min-w-24 overflow-hidden rounded-2xl border bg-gray-100 transition-all hover:opacity-80',
                current === index && 'border-primary ring-2 ring-primary ring-offset-2'
              )}
            >
              <Image
                src={image}
                alt="product image"
                fill
                sizes="100px"
                className="object-cover object-center"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductImages;
