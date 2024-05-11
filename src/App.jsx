
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Pages/Shared/Header/Header'
import { ToastContainer } from 'react-toastify'
import Footer from './Pages/Shared/Footer/Footer'
import NotFound from './Pages/NotFound/NotFound'
import ContactUS from './Pages/ContactUS/ContactUS'
import AboutUS from './Pages/AboutUS/AboutUS'
import Home from './Pages/Home/Home'
import Hotels from './Pages/Hotels/Hotels'

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
            {/* <Route path='/hotels/:id' element={<HotelDetails />} />
            <Route path='/tours' element={<Tours />} />
            <Route path='/tours/:id' element={<RequireAuth><TourDetails /></RequireAuth>} />
            <Route path='/checkout/hotel/:hotelId/room/:roomId' element={<RequireAuth><Checkout /></RequireAuth>} />
            <Route path='/ssl-payment-success/:id' element={<Success />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/profile' element={<RequireAuth><Profile /></RequireAuth>} /> */}
            <Route path='/aboutus' element={<AboutUS />} />
            <Route path='/contactus' element={<ContactUS />} />

            <Route path='*' element={<NotFound />} />


            {/* Control Panel Routes */}
            {/* <Route path="/cpanel" element={<RequireAuth><RequireAdmin><CPanel /></RequireAdmin></RequireAuth>}>
              <Route index element={<AdDashboard />} />
              <Route path="addashboard" element={<AdDashboard />} />
              <Route path="musers" element={<ManageUsers />} />
              <Route path="mhotels" element={<ManageHotels />} />
              <Route path="mbookhotels" element={<ManageOrders />} />
              <Route path="mtours" element={<ManageTours />} />
              <Route path="mbooktours" element={<ManageBookedTours />} />
            </Route> */}
          </Routes>
        </div>
        {(window.location.pathname !== '/cpanel' && window.location.pathname !== '/cpanel/addashboard' && window.location.pathname !== '/cpanel/musers' && window.location.pathname !== '/cpanel/mbookhotels' && window.location.pathname !== '/cpanel/mhotels' && window.location.pathname !== '/cpanel/mtours' && window.location.pathname !== '/cpanel/mbooktours') && <Footer />}
        <ToastContainer />
      </div>
    </>
  )
}

export default App
