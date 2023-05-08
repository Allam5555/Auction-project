   
   import {createBrowserRouter} from "react-router-dom";  
   
   import ProductList from "./Pages/prodact/Prodauct";
   import App from "./App";   
   export const router = createBrowserRouter([
    {
path:'/',
element:<App/>,
children:[
    
        {
            path: "/",
          
            element: <ProductList/>  ,
          },
],
    },
  ]);  