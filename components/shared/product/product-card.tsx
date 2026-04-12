import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import ProductPrice from './product-price';
import { Product } from '@/lib/validators';

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="w-full max-w-sm rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="p-0 border-b">
        <Link href={`/product/${product.slug}`} className="relative aspect-square w-full h-[300px] overflow-hidden bg-gray-100 flex items-center justify-center">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={true}
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </Link>
      </CardHeader>
      <CardContent className="p-5 grid gap-3">
        <div className="flex justify-between items-center text-xs text-muted-foreground">
          <span className="bg-secondary px-2 py-1 rounded-md">{product.brand}</span>
          <span className="font-medium">{product.category}</span>
        </div>
        <Link href={`/product/${product.slug}`}>
          <h2 className="font-semibold text-lg line-clamp-1 hover:text-primary transition-colors">
            {product.name}
          </h2>
        </Link>
        <div className="flex justify-between items-center mt-1">
          <p className="text-sm font-medium flex items-center gap-1">
            <span className="text-yellow-500">★</span>
            {product.rating} ({product.numReviews})
          </p>
          <ProductPrice value={product.price} />
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
