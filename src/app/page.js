import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductSlider from "./components/Homebanner";
import Lookbook from "./components/LookBook";
import HandlesCarousel from "./components/SliderCarousel";
import TopCategories from "./components/TopCategories";
import UnderConstruction from "./components/UnderConstruction";
import { getBrandsData, getHandlesData, getNavLinkMenu } from "./service/apiService";


export default async function Home() {

  const navItems = await getNavLinkMenu();
  const handlesData = await getHandlesData()
  const brandsData = await getBrandsData();
  const Handles = "Handles";
  const Brands = "Brands";
  return (
    // <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-10">
    <div>
      <UnderConstruction/>
      {/* <Header navItems={navItems}/>
      <ProductSlider />
      <HandlesCarousel Handles={Handles} handlesData={handlesData}/>
      <Lookbook/>
      <TopCategories/>
      <HandlesCarousel Handles={Brands} handlesData={brandsData} />
      <Footer/> */}
    </div>
  );
}
