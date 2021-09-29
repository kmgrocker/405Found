import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import SeatBook from './pages/cafetaria/SeatBook'
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import UserMap from "./pages/userMap/UserMap";
import WorkSpaceSeatBook from './pages/cafetaria/workSpaceSeatBook' ;
import FaceMaskDetector from './pages/facemask/FaceMaskDetector';

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/usermap">
            <UserMap />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/CafeteriaSeatBook">
            {/* <ProductList /> */}
            <SeatBook />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
           <Route path="/WorkSpaceSeatBook">
            <WorkSpaceSeatBook />
          </Route>
          <Route path="/FaceMaskDetector">
            <FaceMaskDetector />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
