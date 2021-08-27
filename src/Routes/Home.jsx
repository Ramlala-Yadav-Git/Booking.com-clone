import Degination from "../Components/Degination"
import { Discover } from "../Components/Discover"
import FooterBlue from "../Components/Footer/FooterBlue"
import { Navbar } from "../Components/Navbar/Navbar"
import { SearchDeals } from "../Components/SearchDeals/SearchDeals"




export const Home = () => {



    return <>
        <Navbar />
        <SearchDeals />
        <Degination />
        <Discover />
        <FooterBlue />

    </>
}
