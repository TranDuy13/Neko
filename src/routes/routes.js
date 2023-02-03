import config from "~/config";
import React from "react";
import PrivateRoute from "../pages/PrivateRoute";
const Login = React.lazy(() => import("~/pages/Login"));
const Product = React.lazy(() => import("~/pages/Product/Product"));
const Home = React.lazy(() => import("~/pages/Home/Home"));

const ProductList = React.lazy(() => import("~/pages/ProductList"));
const Products = React.lazy(() => import("~/pages/Products"));
const ProductTypeDetail = React.lazy(() => import("~/pages/ProductTypeDetail"));
const AddProductType = React.lazy(() => import("~/pages/AddProductType"));
const AddProduct = React.lazy(() => import("~/pages/AddProduct"));

const publicRoutes = [
  { path: config.routes.home, component: Home },
  {
    path: config.routes.product,
    component: Product,
  },
  {
    path: config.routes.login,
    component: Login,
    layout: null,
  },
  {
    path: config.routes.login,
    component: Login,
    layout: null,
  },
  {
    path: config.routes.privateroute,
    component: PrivateRoute,
    private: [
      {
        path: config.routes.admin,
        component: Home,
      },
      {
        path: config.routes.producttype,
        component: Products,
      },
      {
        path: config.routes.detailtype,
        component: ProductTypeDetail,
      },
      {
        path: config.routes.addtypeproduct,
        component: AddProductType,
      },
      {
        path: config.routes.addproduct,
        component: AddProduct,
      },
      {
        path: config.routes.products,
        component: ProductList,
      },
    ],
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
