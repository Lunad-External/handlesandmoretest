// 'use client';

// import React, { useState } from 'react';

// export default function ThumbnailGallery({ thumbimage }) {
//   if (!thumbimage) return null;
  
//   const [selectedImage, setSelectedImage] = useState(
//     thumbimage[0]?.url ? `${process.env.NEXT_PUBLIC_API_URL}${thumbimage[0].url}` : null
//   );

//   const handleThumbnailClick = (thumbnailId) => {
//     console.log("thumbnailId", thumbnailId);
//     const imageUrl = thumbimage.find((thumbnail) => thumbnail.id === thumbnailId)?.url;
//     if (imageUrl) {
//       setSelectedImage(`${process.env.NEXT_PUBLIC_API_URL}${imageUrl}`);
//     }
//   };

//   return (
//     <div className="flex p-8 w-full gap-x-8">
//       {/* Left Side: Thumbnails */}
//       <div className="w-[10%] gap-y-8 flex flex-col">
//         {thumbimage && thumbimage.length > 0 && thumbimage.map((thumbnail) => (
//           <div
//             key={thumbnail.id}
//             className="relative cursor-pointer rounded-2xl transition-all duration-200 hover:scale-105"
//             onClick={() => handleThumbnailClick(thumbnail.id)}
//           >
//             <div
//               className={`absolute inset-0 rounded-2xl ${
//                 selectedImage === `${process.env.NEXT_PUBLIC_API_URL}${thumbnail.url}`
//                   ? "ring-4 ring-black ring-offset-2"
//                   : "hover:ring-2 hover:ring-gray-300"
//               }`}
//             />
//             <img
//               src={`${process.env.NEXT_PUBLIC_API_URL}${thumbnail?.url}`}
//               alt={thumbnail.title}
//               className="w-full h-[120px] rounded-2xl object-cover"
//               title="Click to view image"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Right Side: Large Image */}
//       <div className="w-5/6">
//         {selectedImage && (
//           <div className="relative rounded-lg overflow-hidden">
//             <div className={`absolute inset-0 rounded-lg ring-4 ring-blue-500 ring-offset-4`} />
//             <img
//               src={selectedImage}
//               alt="Selected Image"
//               className="w-full h-[550px] rounded-lg object-cover"
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function ThumbnailGallery({ thumbimage }) {
  const [selectedImage, setSelectedImage] = useState(
    thumbimage?.[0]?.url ? `${process.env.NEXT_PUBLIC_API_URL}${thumbimage[0].url}` : null
  );

  const handleThumbnailClick = (thumbnailId) => {
    const imageUrl = thumbimage.find((thumbnail) => thumbnail.id === thumbnailId)?.url;
    if (imageUrl) {
      setSelectedImage(`${process.env.NEXT_PUBLIC_API_URL}${imageUrl}`);
    }
  };

  if (!thumbimage) return null;

  return (
    <div className="flex flex-col md:flex-row p-4 sm:p-6 md:p-8 w-full gap-4 sm:gap-6 md:gap-8">
      {/* Thumbnails */}
      <div className="flex flex-row md:flex-col gap-4 sm:gap-6 md:gap-8 w-full md:w-[20%] lg:w-[15%] order-2 md:order-1 overflow-x-auto md:overflow-x-visible">
        {thumbimage && thumbimage.length > 0 && thumbimage.map((thumbnail) => (
          <div
            key={thumbnail.id}
            className="relative cursor-pointer rounded-lg transition-all duration-200 hover:scale-105 flex-shrink-0"
            onClick={() => handleThumbnailClick(thumbnail.id)}
          >
            <div
              className={`absolute inset-0 rounded-lg ${
                selectedImage === `${process.env.NEXT_PUBLIC_API_URL}${thumbnail.url}`
                  ? "ring-2 ring-black"
                  : "hover:ring-2 hover:ring-gray-300"
              }`}
            />
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}${thumbnail?.url}`}
              alt={thumbnail.title || "Thumbnail"}
              width={120}
              height={120}
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-full md:h-auto rounded-lg object-cover"
              title="Click to view image"
            />
          </div>
        ))}
      </div>

      {/* Large Image */}
      <div className="w-full md:w-[80%] lg:w-[85%] order-1 md:order-2">
        {selectedImage && (
          <div className="relative rounded-lg overflow-hidden aspect-w-4 aspect-h-3">
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Selected Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
}
