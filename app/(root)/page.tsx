import ProductList from "@/components/shared/product/product-list";
import { sampleData } from "@/lib/sample-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home"
};

export default function Home() {
  return (
    <div className="space-y-8">
      <ProductList
        data={sampleData.products}
        title="Newest Arrivals"
        limit={4}
      />
    </div>
  );
}
