import { Card, CardContent } from '@/components/ui/card';

export default function ProductSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        {/* Images Column */}
        <div className="w-full aspect-square bg-muted animate-pulse rounded-3xl" />

        {/* Details Column */}
        <div className="flex flex-col gap-8">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <div className="h-6 w-20 bg-muted animate-pulse rounded-full" />
              <div className="h-6 w-24 bg-muted animate-pulse rounded-full" />
            </div>
            
            <div className="h-12 w-3/4 bg-muted animate-pulse rounded-lg" />
            
            <div className="flex items-center gap-4">
              <div className="h-6 w-16 bg-muted animate-pulse rounded" />
              <div className="h-6 w-32 bg-muted animate-pulse rounded" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="h-10 w-32 bg-muted animate-pulse rounded" />
            <div className="space-y-2">
              <div className="h-4 w-full bg-muted animate-pulse rounded" />
              <div className="h-4 w-full bg-muted animate-pulse rounded" />
              <div className="h-4 w-2/3 bg-muted animate-pulse rounded" />
            </div>
          </div>

          <Card className="rounded-3xl border-2 overflow-hidden bg-muted/50">
            <CardContent className="p-8 space-y-6">
              <div className="flex justify-between items-center border-b pb-4">
                <div className="h-4 w-12 bg-muted animate-pulse rounded" />
                <div className="h-6 w-20 bg-muted animate-pulse rounded" />
              </div>
              
              <div className="flex justify-between items-center border-b pb-4">
                <div className="h-4 w-12 bg-muted animate-pulse rounded" />
                <div className="h-6 w-24 bg-muted animate-pulse rounded" />
              </div>

              <div className="h-12 w-full bg-muted animate-pulse rounded-2xl" />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
