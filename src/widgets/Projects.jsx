import React from 'react'
import ChickenGame from '../assets/ChickenGame.png'
import sinPro from '../assets/sinpro.png'

const products = [
  {
    id: 1,
    name: 'Portal Website Program',
    href: 'http://106.14.156.67:9876/',
    imageSrc: sinPro,
    imageAlt: "portal website",
    price: '',
    color: 'A web program developed for a start-up\'s portal with React + tailwind & Java & MySQL',
  },
  {
    id: 2,
    name: 'web_online_game',
    href: 'https://cindycindy424.github.io/WebOnlineGames/cross-the-day-GAME01/index.html',
    imageSrc: ChickenGame,
    imageAlt: "web online game",
    price: '',
    color: 'An online game developed with Three.js',
  },
  {
    id: 3,
    name: 'TODO_MVC',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '',
    color: 'Black',
  },
  {
    id: 4,
    name: 'HCI game',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '',
    color: 'Black',
  },
  {
    id: 5,
    name: 'Maze Game',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '',
    color: 'Black',
  },

]


function Projects() {  
  return (
    <div className='justify-items-start pt-[10vh] px-[10vw]'>
        <p className='font-bold text-[5vw] md:text-[2vw]'>Selected Personal Projects</p>
        {/* <div className='flex flex-col'>
            <button class="bg-red-200 hover:bg-red-700 rounded px-[1vw] ph-[1vh] mt-[2vh] w-[10vw] h-[10vh]">Company Portal Website Project</button>

            <button class="bg-red-200 hover:bg-red-700 rounded px-[1vw] ph-[1vh] mt-[2vh] w-[10vw] h-[10vh]">HCI game</button>

            <button class="bg-red-200 hover:bg-red-700 rounded px-[1vw] ph-[1vh] mt-[2vh] w-[10vw] h-[10vh]">TODO_MVC</button>

            <button class="bg-red-200 hover:bg-red-700 rounded px-[1vw] ph-[1vh] mt-[2vh] w-[10vw] h-[10vh]">web_online_game</button>

        </div> */}

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="min-h-100 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-100">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        
    </div>
  )
}

export default Projects