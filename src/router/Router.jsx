import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import Cart from '../pages/Cart'
import Shop from '../pages/Shop'
import Checkout from '../pages/Checkout'
import Shopdetail from '../pages/Shopdetail'
import Thanks from '../pages/Thanks'
import Contact from '../pages/Contact'
import Auth from '../pages/admin/Auth'
import Profile from '../pages/admin/profile/Profile'
import ProfileAddEdir from '../pages/admin/profile/ProfileAddEdir'
import Category from '../pages/admin/category/Category'
import CatergoryAddEdit from '../pages/admin/category/CatergoryAddEdit'
import Order from '../pages/admin/order/Order'
import Vieworder from '../pages/admin/order/Vieworder'
import Product from '../pages/admin/product/Product'
import ProductAddEdit from '../pages/admin/product/ProductAddEdit'
import Notfound from '../pages/Notfound'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
const Router = () => {
  return (
    <Routes>
    {/* Public Routes */}
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/login"  element={<Login/>}/>
    <Route path="/" element={<Homepage />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/shop" element={<Shop />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/shopdetails" element={<Shopdetail />} />
    <Route path="/thanks" element={<Thanks />} />
    <Route path="/contact" element={<Contact />} />

    {/* Admin Routes */}
    <Route path="/admin" element={<Auth />}>
      {/* Profile */}
      <Route path="profile" element={<Profile />} />
      <Route path="profile/add" element={<ProfileAddEdir />} />
      <Route path="profile/edit" element={<ProfileAddEdir />} />

      {/* Category */}
      <Route path="category" element={<Category />} />
      <Route path="category/add" element={<CatergoryAddEdit />} />
      <Route path="category/edit/:id" element={<CatergoryAddEdit />} />

      {/* Order */}
      <Route path="order" element={<Order />} />
      <Route path="order/view" element={<Vieworder />} />

      {/* Product */}
      <Route path="product" element={<Product />} />
      <Route path="product/add" element={<ProductAddEdit />} />
      <Route path="product/edit" element={<ProductAddEdit />} />
    </Route>

    {/* Fallback Route */}
    <Route path="*" element={<Notfound />} />
  </Routes>
  )
}

export default Router
