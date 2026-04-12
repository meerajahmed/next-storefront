import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getProductBySlug } from '@/lib/actions/product.actions';
import { notFound } from 'next/navigation';
import ProductImages from '@/components/shared/product/product-images';
import ProductPrice from '@/components/shared/product/product-price';
import { APP_NAME } from '@/lib/constants';

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return { title: 'Product not found' };
  }

  return {
    title: `${product.name} | ${APP_NAME}`,
    description: product.description,
  };
}

const ProductDetailsPage = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await props.params;

  const product = await getProductBySlug(slug);

  if (!product) notFound();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        {/* Images Column */}
        <div className="w-full">
          <ProductImages images={product.images} />
        </div>

        {/* Details Column */}
        <div className="flex flex-col gap-8">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="secondary" className="px-3 py-1">
                {product.brand}
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                {product.category}
              </Badge>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <span className="text-yellow-500 text-xl">★</span>
                <span className="font-bold text-lg">{product.rating}</span>
              </div>
              <span className="text-muted-foreground">
                ({product.numReviews} secondary Reviews)
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-primary">
                <ProductPrice value={product.price} />
              </span>
            </div>

            <div className="prose prose-sm dark:prose-invert text-muted-foreground leading-relaxed">
              <p>{product.description}</p>
            </div>
          </div>

          <Card className="rounded-3xl border-2 overflow-hidden bg-muted/50">
            <CardContent className="p-8 space-y-6">
              <div className="flex justify-between items-center text-sm border-b pb-4">
                <span className="font-medium">Price</span>
                <span className="font-bold text-lg text-primary">
                  <ProductPrice value={product.price} />
                </span>
              </div>
              
              <div className="flex justify-between items-center text-sm border-b pb-4">
                <span className="font-medium">Status</span>
                {product.stock > 0 ? (
                  <Badge variant="success">In Stock ({product.stock})</Badge>
                ) : (
                  <Badge variant="destructive">Out of Stock</Badge>
                )}
              </div>

              {product.stock > 0 && (
                <Button className="w-full py-6 text-lg rounded-2xl font-bold shadow-xl shadow-primary/20 hover:shadow-primary/30 active:scale-[0.98] transition-all">
                  Add to Cart
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
