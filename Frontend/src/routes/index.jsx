import {createBrowserRouter} from 'react-router-dom';
import App from '../App'
import Home from '../pages/Home';
import Login from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword';
import Register from '../pages/Register';
import AdminPage from '../pages/BecomeSeller';
import AllProducts from '../pages/AllProducts';
import CategoryProduct from '../pages/CategoryProduct';

const router=createBrowserRouter([
    {
        path:'/',
        element:<App />,
        children:[
            {
                path:"",
                element:<Home />,
                children:[
                    {
                        path:'',
                        element:<AllProducts />
                    }
                ]
                
            },
            {
                path:'login',
                element:<Login />
            },
            {
                path:'forgot-password',
                element:<ForgotPassword />
            },
            {
                path:'register',
                element:<Register />
            },
            {
                path:'adminPanel',
                element:<AdminPage />
            },
            {
                path:'product-category/:categoryName',
                element:<CategoryProduct />
            },
         
        ]
    }
])

export default router