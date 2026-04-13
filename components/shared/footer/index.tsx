import { APP_NAME } from '@/lib/constants';

const Footer = () => {
    const currentYear = 2026;

    return (
        <footer className="border-t border-gray-200 mt-auto">
            <div className="container mx-auto px-4 p-5 flex items-center justify-center text-sm text-gray-500">
                <p>
                    &copy; <span>{currentYear}</span> {APP_NAME}. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
