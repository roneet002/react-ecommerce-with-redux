// import logo from './logo.svg';
import './App.css';
import Home from './component/Home/Home';
import Products from './component/Products/Products.js';
import FAQs from './component/FAQs/FAQs';
import Contact from './component/Contact/Contact';
import NotFound from './component/NotFound/NotFound';
import About from './component/About/About';
import RootLayout from './component/RootLayout/RootLayout';
import ProductDetail from './component/ProductDetail/ProductDetail';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CartContainer from './component/Cart/CartContainer';


const router = createBrowserRouter([
{path:'/', element: <RootLayout />,
children:[
{index:true, element: <Home />},
{path:'/About', element: <About />},
{path:'/Products', element: <Products />},
{path:'/ProductDetail/:id', element: <ProductDetail />},
{path:'/FAQs', element: <FAQs />},
{path:'/Cart', element: <CartContainer />},
{path:'/Contact', element: <Contact />},
{path:'/NotFound', element: <NotFound />}
],
errorElement:<NotFound />

},


])

function App() {
  return (
   <>
<RouterProvider router={router} />
   {/* <Home /> */}
   </>
  );
}

export default App;
