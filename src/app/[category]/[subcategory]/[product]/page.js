import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import ProductPage from "@/app/components/ProductPage";
import { getProductData } from "@/app/service/apiService";

// Mock Data Generation
// Example Mock Data
// const productData = {
//     name: "Lipstick",
//     code: "M273B",
//     designer: "Matteo and Renzo Piano 2024",
//     description: "We had long been nurturing the idea of designing a handle...",
//     image: "/lipstick.jpg",
//     isNew: true,
//     technicalDocs: [
//       { title: "Technical sheets", content: "door handle, window handle, DK" },
//       { title: "Installation directions", content: "fixing with woodscrew..." },
//     ],
//     completeCollectionData : [
//         { title: "Door Handles", image: "/doorhandles.png", isNew: true, itemCode: "DK-001" },
//         { title: "Door Knobs", image: "/doorknobs.png", isNew: false, itemCode: "KN-002" },
//         { title: "Window Latches", image: "/windowlatches.png", isNew: true, itemCode: "WL-003" },
//       ],
//     specifications: [
//       { label: "MATERIAL", value: "Brass" },
//       { label: "TYPOLOGY", value: "Door Handles - Round" },
//     ],
//     finishes : [
//         { code: "CR", color: "bg-gray-300", ringColor: "ring-gray-300", label: "Chrome" },
//         { code: "CO", color: "bg-gray-400", ringColor: "ring-gray-400", label: "Copper" },
//         { code: "NP", color: "bg-black", ringColor: "ring-black", label: "Black" },
//         { code: "IS", color: "bg-gray-200", ringColor: "ring-gray-200", label: "Ice Silver" },
//         { code: "DS", color: "bg-amber-900", ringColor: "ring-amber-900", label: "Dark Silver" },
//         { code: "US", color: "bg-zinc-800", ringColor: "ring-zinc-800", label: "Urban Steel" },
//       ]
//   };
  
//   const finishesData = [
//     { code: "CR", color: "bg-gray-300", ringColor: "ring-gray-300", label: "Chrome" },
//     { code: "CO", color: "bg-gray-400", ringColor: "ring-gray-400", label: "Copper" },
//     { code: "NP", color: "bg-black", ringColor: "ring-black", label: "Black" },
//     { code: "IS", color: "bg-gray-200", ringColor: "ring-gray-200", label: "Ice Silver" },
//     { code: "DS", color: "bg-amber-900", ringColor: "ring-amber-900", label: "Dark Silver" },
//     { code: "US", color: "bg-zinc-800", ringColor: "ring-zinc-800", label: "Urban Steel" },
//   ];
  
//   const completeCollectionData = [
//     { title: "Door Handles", image: "/doorhandles.png", isNew: true, itemCode: "DK-001" },
//     { title: "Door Knobs", image: "/doorknobs.png", isNew: false, itemCode: "KN-002" },
//     { title: "Window Latches", image: "/windowlatches.png", isNew: true, itemCode: "WL-003" },
//   ];

export default async function Page({ params }){
const { category,subcategory, product } = await params;
const productData = await getProductData(product);
    return (
        <>
        <Header/>
        <ProductPage
         productData={productData}
        />
        <Footer/>
        </>
    )
}