import Bag from "../pages/Bag/Bag"
import Contact from "../pages/Contact"
import Home from "../pages/Home/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Sneaker from "../pages/Sneaker"

const publicRoutes = [
    { path: '/', component: Home},
    { path: '/sneaker', component: Sneaker},
    { path: '/bag', component: Bag},
    { path: '/contact', component: Contact},
    { path: '/login', component: Login},
    { path: '/register', component: Register},
    // { path: '/productDetails', component: ProductDetails},
]

const privateRoutes = [

]

export {publicRoutes , privateRoutes}