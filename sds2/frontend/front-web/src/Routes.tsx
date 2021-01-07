import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./Home"
import Orders from "./Orders"


export default function Routes() {

     return (
         <BrowserRouter>
             <Switch>
                 <Route path="/orders">
                    <Orders />
                 </Route>
                 <Route path="/">
                     <Home />
                 </Route>
                 
             </Switch>
         </BrowserRouter>
     )
}