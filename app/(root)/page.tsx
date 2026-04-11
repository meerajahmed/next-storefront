import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home"
};

export default async function Home() {
  const latestProducts = await getLatestProducts();

  return (
    <div className="space-y-8">
      <ProductList
        data={latestProducts}
        title="Newest Arrivals"
        limit={4}
      />
    </div>
  );
}
