import Image from "next/image";
import React from "react";
import { ScrollableSection } from "./ScrollableSection";
import ProductCard from "./ProductCard";

const CategoryPage = ({productData = [],subcategoryDetails}) => {
    
  return (
    <section className="max-w-6xl mx-auto p-4 flex  gap-20 ">
      <div className="flex flex-col gap-y-10">
        {/* Finishes Section */}
        <div className="flex flex-col gap-y-2 px-1">
          <h1 className="text-md items-start px-2 text-[#088080] font-bold">
            Finishes
          </h1>
          <div className="border-b-2 border-gray-300 w-full" />
          <ScrollableSection>
            {subcategoryDetails?.Finishes && subcategoryDetails?.Finishes?.length > 0 && subcategoryDetails?.Finishes.map((finish) => (
              <div key={finish?.id} className="flex items-center gap-2">
                <div className="border-2 border-grey-300 p-0.5 flex items-center justify-center">
                  <span
                  style={{ backgroundColor: finish?.color }}
                    className={`w-10 h-10 border-2 rounded-full `}
                  />
                </div>
                <span className="text-sm">{finish?.title}</span>
              </div>
            ))}
          </ScrollableSection>
        </div>

        {/* Brands Section */}
        <div className="flex flex-col gap-y-2 px-1">
          <h1 className="text-md items-start px-2 text-[#088080] font-bold">
            Brands
          </h1>
          <div className="border-b-2 border-gray-300 w-full" />
          <ScrollableSection>
            {subcategoryDetails?.brand && subcategoryDetails?.brand?.length > 0 && subcategoryDetails?.brand?.map((brand) => (
              <div key={brand?.id} className="flex items-center gap-4">
                <div className="border-2 border-grey-300 p-0.5 flex items-center justify-center">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_URL}${brand?.image?.url}` || null}
                    alt={brand?.title || ""}
                    width={40}
                    height={40}
                  />
                </div>
                <span className="text-lg">{brand?.title || ""}</span>
              </div>
            ))}
          </ScrollableSection>
        </div>

        {/* Other Categories */}
        <div className="flex flex-col gap-y-2 ">
          <h1 className="text-md items-start pl-0.5 text-[#088080] font-bold">
            Other Categories
          </h1>
          <div className="border-b-2 border-gray-300 w-full" />
          <div className="flex flex-col gap-y-2 pl-2">
            <h2>Pull Handles</h2>
            <h2>Furniture Handles</h2>
          </div>
        </div>
      </div>
      <ProductCard products={productData} title={subcategoryDetails?.title} bannerimage={subcategoryDetails?.bannerimage}/>
    </section>
  );
};

export default CategoryPage;


