
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import NotFound from './Pages/NotFound/NotFound'
import { ToastContainer } from 'react-toastify'
import Footer from './Pages/Shared/Footer/Footer'
import Header from './Pages/Shared/Header/Header'
import ContactUS from './Pages/ContactUS/ContactUS'
import AboutUS from './Pages/AboutUS/AboutUS'
import Signin from './Pages/Auth/Signin/Signin'
import Signup from './Pages/Auth/Signup/Signup'
import Profile from './Components/Dashboard/UserDashboard/Profile/Profile'

function App() {

  return (
    <>
      <div className="App pt-20">
        {(window.location.pathname !== '/cpanel' && window.location.pathname !== '/cpanel/addashboard' && window.location.pathname !== '/cpanel/mblogs' && window.location.pathname !== '/cpanel/mjobs' && window.location.pathname !== '/cpanel/msocializations' && window.location.pathname !== '/cpanel/mjobapplications') && <Header />}
        {/* <Header /> */}
        <div className="">
          <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path='/jobs' element={<Jobs />} />
            <Route path='/jobs/:id' element={<RequireAuth><SingleJobDetails /></RequireAuth>} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/blogs/:id' element={<RequireAuth><SingleBlogDetails /></RequireAuth>} />
            <Route path='/socializations' element={<Socializations />} />
            <Route path='/socializations/:id' element={<RequireAuth><SingleSocializationDetails /></RequireAuth>} />
            <Route path='/aboutus' element={<AboutUS />} />
            <Route path='/contactus' element={<ContactUS />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/profile' element={<Profile />} /> */}
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/profile' element={<Profile />}/>
            <Route path='/aboutus' element={<AboutUS />} />
            <Route path='/contactus' element={<ContactUS />} />

            <Route path='*' element={<NotFound />} />


            {/* Control Panel Routes */}
            {/* <Route path="/cpanel" element={<RequireAuth><RequireAdmin><CPanel /></RequireAdmin></RequireAuth>}>
              <Route index element={<AdDashboard />} />
              <Route path="addashboard" element={<AdDashboard />} />
              <Route path="musers" element={<ManageUsers />} />
              <Route path="mjobs" element={<ManageJobs />} />
              <Route path="mblogs" element={<ManageBlogs />} />
              <Route path="msocializations" element={<ManageSocializations />} />
              <Route path="mjobapplications" element={<ManageJobApplications />} />
            </Route> */}
          </Routes>
        </div>
        {(window.location.pathname !== '/cpanel' && window.location.pathname !== '/cpanel/addashboard' && window.location.pathname !== '/cpanel/mblogs' && window.location.pathname !== '/cpanel/mjobs' && window.location.pathname !== '/cpanel/msocializations' && window.location.pathname !== '/cpanel/mjobapplications') && <Footer />}
        <ToastContainer />
      </div>
    </>
  )
}

export default App
