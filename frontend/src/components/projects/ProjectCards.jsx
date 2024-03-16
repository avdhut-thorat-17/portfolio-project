/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
  {
    id: 1,
    name: 'Property Listing Website',
    href: '#',
    imageSrc: 'img1.webp',
    imageAlt: "Property Listing Website.",
    Date: 'Dec 2023',
    tech: 'Html, CSS, JS, React.js,Next.js',
  },
  {
    id: 1,
    name: 'Property Listing Website',
    href: '#',
    imageSrc: 'img1.webp',
    imageAlt: "Property Listing Website.",
    Date: 'Dec 2023',
    tech: 'Html, CSS, JS, React.js,Next.js',
  }, {
    id: 1,
    name: 'Property Listing Website',
    href: '#',
    imageSrc: 'img1.webp',
    imageAlt: "Property Listing Website.",
    Date: 'Dec 2023',
    tech: 'Html, CSS, JS, React.js,Next.js',
  }, {
    id: 1,
    name: 'Property Listing Website',
    href: '#',
    imageSrc: 'img1.webp',
    imageAlt: "Property Listing Website.",
    Date: 'Dec 2023',
    tech: 'Html, CSS, JS, React.js,Next.js',
  },
  // More products...
]

export default function ProjectCards() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-5 sm:px-6 sm:py-5 lg:max-w-7xl lg:px-8 mb-5">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Projects Section</h2>

        <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-2 flex justify-between"> {/* Adjusted margin-top */}
                <div>
                  <h3 className="text-sm font-bold text-black">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.tech}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.Date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
