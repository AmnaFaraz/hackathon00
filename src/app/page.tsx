import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Header Section */}
      <header className="bg-light-gray py-6 text-center font-sans text-gray-800">
        <h2 className="text-xl font-semibold">Hello Nike App</h2>
        <p className="mt-2 text-sm">
          Download the app to access everything Nike.{" "}
          <Link href="#" className="text-blue-600 hover:underline">
            Get Your Great
          </Link>
        </p>
      </header>

      {/* Main Content Section */}
      <main className="px-6 lg:px-20 py-10 space-y-16 bg-white">
        {/* Hero Banner */}
        <section className="text-center">
          <Image
            src="/banner.png"
            alt="Banner"
            width={1200}
            height={600}
            className="rounded-lg object-cover shadow-lg"
          />
          <h3 className="mt-6 text-lg font-medium text-gray-700">First Look</h3>
          <h2 className="mt-4 text-4xl font-extrabold uppercase text-gray-900">
            Nike Air Max Pulse
          </h2>
          <p className="mt-4 text-base text-gray-600 max-w-2xl mx-auto">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
            Pulse — designed to push you past your limits and help you go to the max.
          </p>
          <div className="flex justify-center space-x-4 mt-6">
            <button className="px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
              Notify Me
            </button>
            <button className="px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
              Shop Air Max
            </button>
          </div>
        </section>

        {/* Best of Air Max Section */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Best of Air Max</h2>
            <button className="px-4 py-2 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition">
              Shop
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                img: "/image1.png",
                name: "Nike Air Max Pulse",
                price: "₹ 13,995",
                gender: "Women's Shoes",
              },
              {
                img: "/image2.png",
                name: "Nike Air Max Pulse",
                price: "₹ 13,995",
                gender: "Men's Shoes",
              },
              {
                img: "/image3.png",
                name: "Nike Air Max 97 SE",
                price: "₹ 16,995",
                gender: "Men's Shoes",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition"
              >
                <Image
                  src={product.img}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-60 object-contain"
                />
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-medium text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500">{product.gender}</p>
                  <p className="mt-2 font-bold text-gray-800">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Section */}
        <h2 className="text-2xl font-bold text-gray-800">Featured</h2>
        <section className="text-center">
          <Image
            src="/running.png"
            alt="Running Man"
            width={1200}
            height={600}
            className="rounded-lg object-cover"
          />
          <h1 className="mt-8 text-4xl font-extrabold text-gray-900">
            STEP INTO WHAT FEELS GOOD
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Cause everyone should know the feeling of running in that perfect pair!
          </p>
          <button className="mt-6 px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
            Find Your Shoe
          </button>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              title: "Icons",
              links: ["Air Force 1", "Huarache", "Air Max 90", "Air Max 95"],
            },
            {
              title: "Shoes",
              links: ["All Shoes", "Custom Shoes", "Jordan Shoes", "Running Shoes"],
            },
            {
              title: "Clothing",
              links: ["All Clothing", "Modest Wear", "Hoodies & Pullovers", "Shirts & Tops"],
            },
            {
              title: "Kids'",
              links: ["Infant & Toddler Shoes", "Kids' Shoes", "Kids' Jordan Shoes", "Kids' Basketball Shoes"],
            },
          ].map((col, index) => (
            <div key={index} className="text-center">
              <h3 className="font-bold mb-4">{col.title}</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {col.links.map((link, i) => (
                  <li key={i}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </>
  );
}
