import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-[60px] bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-6">

        <div className="flex items-center flex-shrink-0">
          <Link href="/">
            <img
              src="/nike-logo.png"
              alt="Nike Logo"
              className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] lg:w-[78px] lg:h-[78px]"
            />
          </Link>
        </div>

        <div className="hidden lg:flex flex-1 justify-center">
          <nav className="flex items-center space-x-4 lg:space-x-6">
            <Link href="/new">
              <span className="text-sm lg:text-base font-medium text-gray-700 hover:text-black transition font-sans">
                New & Featured
              </span>
            </Link>
            <Link href="/men">
              <span className="text-sm lg:text-base font-medium text-gray-700 hover:text-black transition font-sans">
                Men
              </span>
            </Link>
            <Link href="/women">
              <span className="text-sm lg:text-base font-medium text-gray-700 hover:text-black transition font-sans">
                Women
              </span>
            </Link>
            <Link href="/kids">
              <span className="text-sm lg:text-base font-medium text-gray-700 hover:text-black transition font-sans">
                Kids
              </span>
            </Link>
            <Link href="/sale">
              <span className="text-sm lg:text-base font-medium text-gray-700 hover:text-black transition font-sans">
                Sale
              </span>
            </Link>
            <Link href="/productdetail">
              <span className="text-sm lg:text-base font-medium text-gray-700 hover:text-black transition font-sans">
                SNKRS
              </span>
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-3 sm:space-x-4">
         
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 w-[160px] lg:w-[200px]"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <img src="/search.png" alt="Search" className="w-4 h-4 lg:w-5 lg:h-5" />
            </button>
          </div>

          <Link href="/favourites">
            <img
              src="/favourites.png"
              alt="Favourites"
              className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] lg:w-[36px] lg:h-[36px]"
            />
          </Link>

          <Link href="/cart">
            <img
              src="/add.png"
              alt="Cart"
              className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] lg:w-[36px] lg:h-[36px]"
            />
          </Link>
        </div>

        <div className="block lg:hidden">
          <button className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

      </div>
    </header>
  );
}
