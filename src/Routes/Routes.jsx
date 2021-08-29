
import { Switch, Route } from "react-router"
import { HotelDetails } from "../Components/HotelDetails/Components/HotelDetails"
import Login from "../Components/Login/Login"
import { SearchPage } from "../Components/SearchPage/SearchPage"
import { Home } from "./Home"

export const Routes = () => {

    return <>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>

            <Route exact path="/search">
                <SearchPage />
            </Route>

            <Route path="/search/:id">
                <HotelDetails />
            </Route>
        </Switch>

    </>

}