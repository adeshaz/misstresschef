import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import NotFoundPage from './pages/NotFoundPage'
import Navbar from './components/Navbar'
import About from './pages/About'
import Footer from './components/Footer'
import Cart from './pages/Cart'
import Shop from './pages/Shop'
import Hero from './components/Hero'
import ProductCard from './components/ProductCard'
import ProductDetails from './pages/ProductDetails'
import CheckOut from './pages/CheckOut'
import ThankYou from './pages/ThankYou'
import AdminDashboard from './pages/AdminDashboard'
import AdminLogin from './pages/AdminLogin'
import AdminOrders from './pages/AdminOrders'
import TrackOrder from './pages/TrackOrder'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Profile from './pages/Profile'
import ProtectedRoute from './components/ProtectedRoutes'
import VerifyEmail from './pages/VerifyEmail'
import ResendVerification from './pages/ResendVerification'


const App = () => {
  return (
    <div>
      <Navbar />
     
    <Routes>
     {/* Customer routes */}
      <Route path='/' element={<Home/>} />
       <Route path="/checkout" element={<ProtectedRoute><CheckOut /></ProtectedRoute>} />

      <Route path='/shop' element ={<Shop />}/>
        <Route path="/product/:id" element={<ProductDetails />} />
         <Route path="/cart" element={<Cart />} />
         
          <Route path='/admin-dashboard' element={<AdminDashboard />} />
          <Route path='/track-order' element={<TrackOrder />} />
            <Route path="/verify/:token" element={<VerifyEmail />} />
            <Route path="/resend-verification" element={<ResendVerification />} />
          <Route path='/track-order/:orderId' element={<TrackOrder />} />
          
           <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />

           {/* Admin routes */}
          <Route path='/admin-login' element={<AdminLogin />} />
          <Route path='/admin-orders' element={<AdminOrders />} />
          
      <Route path='/about'  element ={<About />}/>
      <Route path='/sp-contact' element={<Contact />} />
        <Route path='/contact' element={<Navigate to ={'/sp-contact' }/>}/>
        <Route path='/thank-you' element={<ThankYou />} />
 

     
{/* wild card routing */}
        <Route path='*'element={<NotFoundPage />} />
    </Routes>
    <Footer />
    </div>
  )
}

export default App
