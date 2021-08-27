
import { Switch, Route } from "react-router"
import { SearchPage } from "../Components/SearchPage/SearchPage"
import { Home } from "./Home"

export const Routes = () => {



    return <>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/search">
                <SearchPage />
            </Route>
        </Switch>

    </>

}