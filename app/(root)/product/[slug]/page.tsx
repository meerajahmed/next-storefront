import { Suspense } from 'react';
import { getProductBySlug } from '@/lib/actions/product.actions';
import { APP_NAME } from '@/lib/constants';
import ProductContent from './product-content';
import ProductSkeleton from './product-skeleton';

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

const ProductDetailsPage = (props: {
  params: Promise<{ slug: string }>;
}) => {
  return (
    <Suspense fallback={<ProductSkeleton />}>
      <ProductContent paramsPromise={props.params} />
    </Suspense>
  );
};

export default ProductDetailsPage;
