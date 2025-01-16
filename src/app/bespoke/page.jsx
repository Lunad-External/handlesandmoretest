import Footer from "../components/Footer";
import Header from "../components/Header";
import { getNavLinkMenu } from "../service/apiService";

export default async function Page() {
    const navItems = await getNavLinkMenu();
    return (
        <div>
           <Header navItems={navItems}/> 
           <h1>
               Bespoke
           </h1>
           <Footer/>
        </div>
    );
}