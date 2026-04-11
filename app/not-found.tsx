import Image from 'next/image';
import Link from 'next/link';
import { APP_NAME } from '@/lib/constants';
import { buttonVariants } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <section className="flex flex-col items-center gap-4 max-w-md">
        <Image 
          src="/images/logo.svg" 
          alt={`${APP_NAME} logo`} 
          width={64} 
          height={64} 
          priority 
        />
        <h1 className="text-5xl font-bold tracking-tight">404</h1>
        <h2 className="text-2xl font-semibold">Page Not Found</h2>
        <p className="text-muted-foreground mt-2">
          Oops! The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" className={buttonVariants({ variant: 'default', className: 'mt-6' })}>
          Return to Home
        </Link>
      </section>
    </main>
  );
}
