
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { ToastContainer } from 'react-toastify'
import Footer from './Pages/Shared/Footer/Footer'
import Header from './Pages/Shared/Header/Header'
import ContactUS from './Pages/ContactUS/ContactUS'
import AboutUS from './Pages/AboutUS/AboutUS'
import Signin from './Pages/Auth/Signin/Signin'
import Signup from './Pages/Auth/Signup/Signup'
import Tours from './Pages/Tours/Tours'
import Profile from './Components/Dashboard/UserDashboard/Profile/Profile'
import Hotels from './Pages/Hotels/Hotels'
import HotelDetails from './Pages/Hotels/HotelDetails/HotelDetails'
import TourDetails from './Pages/Tours/TourDeatils/TourDetails'
import Checkout from './Pages/Checkout/Checkout'
import RequireAuth from './Components/Others/RequireAuth/RequireAuth'
import Success from './Components/Others/Success/Success'
import RequireAdmin from './Components/Others/RequireAdmin/RequireAdmin'
import CPanel from './Components/Dashboard/AdminDashboard/Admin/CPanel'
import AdDashboard from './Components/Dashboard/AdminDashboard/Dashboard/AdDashboard'
import ManageUsers from './Components/Dashboard/AdminDashboard/ManageUsers/ManageUsers'
import ManageOrders from './Components/Dashboard/AdminDashboard/ManageOrders/ManageOrders'
import ManageBookedTours from './Components/Dashboard/AdminDashboard/ManageBookedTours/ManageBookedTours'
import ManageTours from './Components/Dashboard/AdminDashboard/ManageTours/ManageTours'
import ManageHotels from './Components/Dashboard/AdminDashboard/ManageCountries/ManageHotels'
import NotFound from './Pages/NotFound/NotFound'
import Home from './Pages/Home/Home'

function App() {

  return (
    <>
      <div className="App pt-16">
        {(window.location.pathname !== '/cpanel' && window.location.pathname !== '/cpanel/addashboard' && window.location.pathname !== '/cpanel/musers' && window.location.pathname !== '/cpanel/mbookhotels' && window.location.pathname !== '/cpanel/mhotels' && window.location.pathname !== '/cpanel/mtours' && window.location.pathname !== '/cpanel/mbooktours') && <Header />}
        {/* <Header /> */}
        <div className="">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/hotels' element={<Hotels />} />
            <Route path='/hotels/:id' element={<HotelDetails />} />
            <Route path='/tours' element={<Tours />} />
            <Route path='/tours/:id' element={<RequireAuth><TourDetails /></RequireAuth>} />
            <Route path='/checkout/hotel/:hotelId/room/:roomId' element={<RequireAuth><Checkout /></RequireAuth>} />
            <Route path='/ssl-payment-success/:id' element={<Success />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/profile' element={<RequireAuth><Profile /></RequireAuth>} />
            <Route path='/aboutus' element={<AboutUS />} />
            <Route path='/contactus' element={<ContactUS />} />

            <Route path='*' element={<NotFound />} />


            {/* Control Panel Routes */}
            <Route path="/cpanel" element={<RequireAuth><RequireAdmin><CPanel /></RequireAdmin></RequireAuth>}>
              <Route index element={<AdDashboard />} />
              <Route path="addashboard" element={<AdDashboard />} />
              <Route path="musers" element={<ManageUsers />} />
              <Route path="mhotels" element={<ManageHotels />} />
              <Route path="mbookhotels" element={<ManageOrders />} />
              <Route path="mtours" element={<ManageTours />} />
              <Route path="mbooktours" element={<ManageBookedTours />} />
            </Route>
          </Routes>
        </div>
        {(window.location.pathname !== '/cpanel' && window.location.pathname !== '/cpanel/addashboard' && window.location.pathname !== '/cpanel/musers' && window.location.pathname !== '/cpanel/mbookhotels' && window.location.pathname !== '/cpanel/mhotels' && window.location.pathname !== '/cpanel/mtours' && window.location.pathname !== '/cpanel/mbooktours') && <Footer />}
        <ToastContainer />
      </div>
    </>
  )
}

export default App
