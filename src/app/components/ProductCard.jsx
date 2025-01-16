import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const ProductCard = ({products,title="",bannerimage}) => {
  return (
    <div className="flex flex-col gap-4">
    <h1 className="text-3xl px-4 font-bold text-[#088080]">{title}</h1>
    <img src={`${process.env.NEXT_PUBLIC_API_URL}${bannerimage?.url}` || null} alt="banner-image" 
    className="object-contain " />
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 shadow-inner border rounded-sm p-2 gap-4">
      {products && products?.length > 0 &&  products?.map((product) => (
        <Link
        href={product?.completeurl || "#"} 
          key={product.id}
          className="flex flex-col gap-2 p-4 justify-center items-center border rounded-lg shadow-md h-full cursor-pointer"
        >
          <div className="w-32 h-32 relative">
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}${product?.image?.url}` || null}
              alt={product?.image?.title}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <h2 className="text-sm text-gray-700 font-medium text-center">
            {product?.title}
          </h2>
          <p className="text-xs text-center">{product?.code}</p>
        </Link>
      ))}
    </div>
  </div>
  )
}

export default ProductCard