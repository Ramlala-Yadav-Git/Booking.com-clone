import Degination from "../Components/Degination"
import { Discover } from "../Components/Discover"
import FooterBlue from "../Components/Footer/FooterBlue"
import { Navbar } from "../Components/Navbar/Navbar"
import { SearchDeals } from "../Components/SearchDeals/SearchDeals"
import { HomeGuestsDiv } from "../Components/HomeGuests/HomeGuestsDiv"
import { NextTrip } from "../Components/NextTripDiv/NextTrip"




export const Home = () => {



    return <>
        <Navbar />
        <SearchDeals />
        <NextTrip />
        <HomeGuestsDiv />
        <Degination />
        <Discover />
        <FooterBlue />

    </>
}
