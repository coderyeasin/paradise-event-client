import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Header from './pages/Home/Header/Header';
import Register from './pages/Security/Register/Register';
import Login from './pages/Security/Login/Login';
import AuthProvider from './context/AuthProvider';
import Footer from './pages/Home/Footer/Footer';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import Explore from './pages/Home/Explore/Explore';
import PrivateRoute from './pages/Security/PrivateRoute/PrivateRoute';
import Events from './pages/Home/Events/Events';
import MyOrder from './pages/Dashboard/User/MyOrder/MyOrder';
import Review from './pages/Dashboard/User/Review/Review';
import AddEvents from './pages/Dashboard/Admin/AddEvents/AddEvents';
import AdminRoute from './pages/Security/AdminRoute/AdminRoute';
import MakeAdmin from './pages/Dashboard/Admin/MakeAdmin/MakeAdmin';
import AllUsers from './pages/Dashboard/Admin/AllUsers/AllUsers';
import AllEvents from './pages/Dashboard/Admin/AllEvents/AllEvents';
import ManageAllOrder from './pages/Dashboard/Admin/ManageAllOrders/ManageAllOrder';
import Payments from './pages/Dashboard/User/Payments/Payments';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/events" element={<Events></Events>}></Route>

            <Route path="/explore/:id"
              element={<PrivateRoute>
                <Explore></Explore>
              </PrivateRoute>}></Route>
            
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>

 {/* nested routing */}
            <Route path="/dashboard" element={<PrivateRoute>
              <Dashboard></Dashboard>
            </PrivateRoute>}>

{/* admin panel */}
            <Route path="/dashboard/addEvents" element={<AdminRoute>
              <AddEvents></AddEvents>
              </AdminRoute>}> </Route>
              
               <Route path="/dashboard/makeAdmin" element={<AdminRoute>
              <MakeAdmin></MakeAdmin>
              </AdminRoute>}> </Route>
              
               <Route path="/dashboard/AllUsers" element={<AdminRoute>
              <AllUsers></AllUsers>
              </AdminRoute>}> </Route>
              
               <Route path="/dashboard/AllEvents" element={<AdminRoute>
              <AllEvents></AllEvents>
              </AdminRoute>}> </Route>

               <Route path="/dashboard/ManageAllOrder" element={<AdminRoute>
              <ManageAllOrder></ManageAllOrder>
              </AdminRoute>}> </Route>
              
              {/*users panel  */}
              
            <Route path="/dashboard/myOrder" element={<PrivateRoute>
              <MyOrder></MyOrder>
              </PrivateRoute>}> </Route>

          
            <Route path="/dashboard/review" element={<PrivateRoute>
             <Review></Review>
              </PrivateRoute>}> </Route>
              
            <Route path="/dashboard/payment/:id" element={<PrivateRoute>
             <Payments></Payments>
            </PrivateRoute>}> </Route>
            
            </Route>

            


          </Routes>
          <Footer />
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
