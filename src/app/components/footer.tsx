import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
         
          <div>
            <h4 className="text-base font-semibold mb-4 text-gray-300 tracking-wide">
              Find a Store
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  Become a Member
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Sign Up for Email
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Send Us Feedback
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Student Discounts
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-4 text-gray-300 tracking-wide">
              Get Help
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  Order Status
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Delivery
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Payment Options
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Contact Us On Nike.com Inquiries
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Contact Us On All Other Inquiries
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-4 text-gray-300 tracking-wide">
              About Nike
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  News
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Investors
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex space-x-4">
              <Link href="#" className="hover:opacity-75">
                <img
                  src="/twitter.png"
                  alt="Twitter"
                  className="w-30 h-30"
                />
              </Link>
              <Link href="#" className="hover:opacity-75">
                <img
                  src="/facebook.png"
                  alt="Facebook"
                  className="w-30 h-30"
                />
              </Link>
              <Link href="#" className="hover:opacity-75">
                <img
                  src="/youtube.png"
                  alt="YouTube"
                  className="w-30 h-30"
                />
              </Link>
              <Link href="#" className="hover:opacity-75">
                <img
                  src="/instagram.png"
                  alt="Instagram"
                  className="w-30 h-30"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          
          <div className="flex items-center text-sm space-x-2">
            <img
              src="/location.png"
              alt="Location"
              className="w-9.38 h-13.12"
            />
            <span className="text-white">India</span>
          </div>
          <p className="text-gray-500 text-xs md:ml-2">
            © 2023 Nike, Inc. All Rights Reserved
          </p>

          <ul className="flex space-x-6 text-xs text-gray-400">
            <li>
              <Link href="#" className="hover:text-white">
                Guides
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Terms of Sale
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Nike Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
