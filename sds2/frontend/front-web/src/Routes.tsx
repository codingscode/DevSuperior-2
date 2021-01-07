import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Home'
import Orders from './Orders'
import Navbar from './Navbar'


export default function Routes() {

     return (
         <BrowserRouter>
             <Navbar />
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