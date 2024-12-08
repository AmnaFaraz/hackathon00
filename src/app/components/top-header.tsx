import Link from "next/link";

export default function TopHeader() {
  return (
    <div className="bg-gray-100 border-b border-gray-300">
      <div className="container mx-auto max-w-[1440px] flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 text-gray-600 font-sans">
        
        <div className="mb-4 sm:mb-0 flex items-center">
          <Link href="/">
            <img
              src="/logo.png"
              alt="Nike Logo"
              className="w-[24px] h-[24px] md:w-[32px] md:h-[32px]" 
            />
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-6 text-[14px] sm:text-[16px] leading-[36px]">
          <Link href="/store-locator">
            <span className="text-sm font-medium text-gray-700 hover:text-black transition">
              Find a Store
            </span>
          </Link>
          <span className="hidden sm:inline">|</span>
          <Link href="/help">
            <span className="text-sm font-medium text-gray-700 hover:text-black transition">
              Help
            </span>
          </Link>
          <span className="hidden sm:inline">|</span>
          <Link href="/join">
            <span className="text-sm font-medium text-gray-700 hover:text-black transition">
              Join Us
            </span>
          </Link>
          <span className="hidden sm:inline">|</span>
          <Link href="/sign-in">
            <span className="text-sm font-medium text-gray-700 hover:text-black transition">
              Sign In
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
