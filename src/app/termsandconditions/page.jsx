// import { PayloadLexicalReactRenderer } from "@atelier-disko/payload-lexical-react-renderer";
// import Footer from "../components/Footer";
// import Header from "../components/Header";
// import { getNavLinkMenu, getTermsandConditons } from "../service/apiService";

// export default async function Page() {
//     const navItems = await getNavLinkMenu();
//     const termsData = await getTermsandConditons();
//     let { title = "", description = "", bannerimage = {} } = termsData || {};

//     return (
//         <div>
//             <Header navItems={navItems} />
//             <section className="flex flex-col items-center gap-y-16 max-w-6xl mx-auto py-16 px-12">
//                 <div className="flex relative w-full">
//                     <img src={`${process.env.NEXT_PUBLIC_API_URL}${bannerimage?.url}`} alt={bannerimage?.alt || "termsandconditons"}
//                         loading="lazy"
//                         className="w-full h-[150px] object-cover"
//                     />
//                     <div className="absolute left-8 bottom-3.5 flex flex-col">
//                         <span className="text-white text-2xl font-medium">{title}</span>
//                         <div className="flex items-center gap-1 mt-1 -pl-1">
//                             <span className="w-1 h-1 bg-white rounded-full"></span>
//                             <span className="w-1 h-1 bg-white rounded-full"></span>
//                             <span className="w-1 h-1 bg-white rounded-full"></span>
//                             <span className="w-8  border-b-[3px] border-white rounded-lg "></span>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="flex flex-col max-w-full"><PayloadLexicalReactRenderer content={description}
//                  elementRenderers={{
//                     paragraph: (props) => (
//                       <p className="text-xl sm:text-lg md:text-xl text-black leading-relaxed tracking-widest font-normal text-justify max-sm:text-start last:mb-2">
//                         {props.children}
//                       </p>
//                     ),
//                   }}
//                  /></div>
//             </section>
//             <Footer />
//         </div>
//     );
// }


// import { PayloadLexicalReactRenderer } from "@atelier-disko/payload-lexical-react-renderer";
// import Footer from "../components/Footer";
// import Header from "../components/Header";
// import { getNavLinkMenu, getTermsandConditons } from "../service/apiService";

// export default async function Page() {
//     const navItems = await getNavLinkMenu();
//     const termsData = await getTermsandConditons();
//     let { title = "", description = "", bannerimage = {} } = termsData || {};

//     const elementRenderers = {
//         paragraph: ({ children, format, indent, ...props }) => {
//             // Handle indentation for bullet points
//             const indentClass = indent === 1 ? 'ml-8' : '';
            
//             // Handle empty paragraphs for spacing
//             if (!children || children.length === 0) {
//                 return <div className="h-6" />;
//             }

//             return (
//                 <p className={`text-black text-sm font-medium leading-relaxed max-w-3xl mb-2 tracking-wider ${indentClass}`}>
//                     {children}
//                 </p>
//             );
//         },
//         text: ({ text, format, ...props }) => {
//             // Handle bold text (format === 1)
//             if (format === 1) {
//                 return <span className="font-bold text-lg">{text}</span>;
//             }
//             return <span>{text}</span>;
//         },
//         linebreak: () => (
//             <br />
//         ),
//         // Handle bullet points with proper spacing
//         list: ({ children, listType }) => {
//             const listClasses = `
//                 list-disc 
//                 ml-8 
//                 space-y-2 
//                 mb-4
//                 text-gray-800
//             `;
//             return <ul className={listClasses}>{children}</ul>;
//         },
//         listItem: ({ children }) => (
//             <li className="text-base leading-relaxed">
//                 {children}
//             </li>
//         ),
//         root: ({ children }) => (
//             <div className="flex flex-col space-y-4">
//                 {children}
//             </div>
//         )
//     };

//     return (
//         <div className="min-h-screen flex flex-col">
//             <Header navItems={navItems} />
//             <main className="flex-grow">
//                 <section className="flex flex-col items-center gap-y-16 max-w-6xl mx-auto py-16 px-4 md:px-12">
//                     <div className="flex relative w-full rounded-lg overflow-hidden shadow-lg">
//                         <img 
//                             src={`${process.env.NEXT_PUBLIC_API_URL}${bannerimage?.url}`} 
//                             alt={bannerimage?.alt || "terms and conditions"}
//                             loading="lazy"
//                             className="w-full h-[200px] md:h-[250px] object-cover"
//                         />
//                         <div className="absolute left-8 bottom-6 flex flex-col">
//                             <h1 className="text-white text-3xl md:text-4xl font-semibold drop-shadow-lg">
//                                 {title}
//                             </h1>
//                             <div className="flex items-center gap-1.5 mt-2">
//                                 <span className="w-1.5 h-1.5 bg-white rounded-full shadow-sm"></span>
//                                 <span className="w-1.5 h-1.5 bg-white rounded-full shadow-sm"></span>
//                                 <span className="w-1.5 h-1.5 bg-white rounded-full shadow-sm"></span>
//                                 <span className="w-10 border-b-2 border-white rounded-lg"></span>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="w-full max-w-full">
//                         <PayloadLexicalReactRenderer 
//                             content={description} 
//                             elementRenderers={elementRenderers}
//                         />
//                     </div>
//                 </section>
//             </main>
//             <Footer />
//         </div>
//     );
// }

import { PayloadLexicalReactRenderer } from "@atelier-disko/payload-lexical-react-renderer"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { getNavLinkMenu, getTermsandConditons } from "../service/apiService"

export default async function Page() {
  const navItems = await getNavLinkMenu()
  const termsData = await getTermsandConditons()
  const { title = "", description = "", bannerimage = {} } = termsData || {}

  return (
    <div>
      <Header navItems={navItems} />
      <section className="flex flex-col items-center gap-y-16 max-w-6xl mx-auto pt-8 pb-16 lg:px-12 px-4">
        <div className="flex relative w-full">
          <img
            src={bannerimage?.url ? `${process.env.NEXT_PUBLIC_API_URL}${bannerimage?.url}` : "/default-image.jpg"}
            alt={bannerimage?.alt || "termsandconditions"}
            loading="lazy"
            className="w-full h-[150px] object-cover"
          />
          <div className="absolute left-8 bottom-3.5 flex flex-col">
            <span className="text-white text-2xl font-medium">{title}</span>
            <div className="flex items-center gap-1 mt-1 -pl-1">
              <span className="w-1 h-1 bg-white rounded-full"></span>
              <span className="w-1 h-1 bg-white rounded-full"></span>
              <span className="w-1 h-1 bg-white rounded-full"></span>
              <span className="w-8 border-b-[3px] border-white rounded-lg "></span>
            </div>
          </div>
        </div>

        <div className="flex flex-col max-w-full px-2">
          <PayloadLexicalReactRenderer
            content={description}
            elementRenderers={{
              paragraph: ({ children, indent }) => (
                <p
                  className={`text-md text-black leading-relaxed  text-justify max-sm:text-start last:mb-2  `}
                >
                  {children}
                </p>
              ),
              heading: ({ children, level }) => {
                if (level === 1) {
                  return <h1 className="text-sm font-bold my-4">{children}</h1>
                }
                return <h2 className=" my-3 ">{children}</h2>
              },
              list: ({ children }) => <ul className="list-disc pl-6 space-y-2 mt-2 mb-2">{children}</ul>,
              listItem: ({ children }) => <li className="text-sm text-black lg:mr-96 last:mb-2">{children}</li>,
              linebreak: () => <br />,
              tab: () => <span className="ml-4"></span>,
              text: ({ text, format }) => {
                // Check if the text is a bullet point or if it's bold (format === 1)
                if (text.startsWith("•") || format === 1) {
                  return <span className="font-bold">{text}</span>
                }
                return <span>{text}</span>
              },
            }}
          />
        </div>
      </section>
      <Footer />
    </div>
  )
}



