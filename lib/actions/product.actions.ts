import { prisma } from "@/db/prisma";
import { Prisma } from "@prisma/client";

// Get latest products
export async function getLatestProducts() {
  const data = await prisma.product.findMany({
    take: 4,
    orderBy: { createdAt: 'desc' },
  });

  // Maps the Database data into the UI-friendly format.
  return data.map((product: Prisma.ProductGetPayload<{}>) => ({
    ...product,
    price: product.price.toString(),
    rating: product.rating.toString(),
  }));
}

// Get product by slug
export async function getProductBySlug(slug: string) {
  const product = await prisma.product.findUnique({
    where: { slug },
  });

  if (!product) return null;

  return {
    ...product,
    price: product.price.toString(),
    rating: product.rating.toString(),
  };
}
