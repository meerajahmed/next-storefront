import ProductCard from './product-card';
import { Product } from '@/lib/validators';

const ProductList = ({ data, title, limit }: { data: Product[], title?: string, limit?: number }) => {
  const limitedData = limit ? data.slice(0, limit) : data;

  return (
    <div className="my-10">
      {title && <h2 className="text-3xl font-bold mb-8">{title}</h2>}
      {limitedData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center sm:place-items-stretch">
          {limitedData.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground text-center py-6">No products found.</p>
      )}
    </div>
  );
};

export default ProductList;
