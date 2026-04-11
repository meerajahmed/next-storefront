import Image from 'next/image';
import Link from 'next/link';
import { APP_NAME } from '@/lib/constants';
import Menu from './menu';

const Header = () => {
    return (
        <header className="w-full border-b">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center">
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/images/logo.svg"
                            alt={`${APP_NAME} logo`}
                            width={48}
                            height={48}
                            priority
                        />
                        <span className="hidden lg:block font-bold text-2xl">
                            {APP_NAME}
                        </span>
                    </Link>
                </div>
                <Menu />
            </div>
        </header>
    );
};

export default Header;
