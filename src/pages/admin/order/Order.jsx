/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'

const Order = () => {
  return (
    <div>
    {/* Single Page Header start */}
<div className="container-fluid page-header py-5">
<h1 className="text-center text-white display-6">Profile</h1>
<ol className="breadcrumb justify-content-center mb-0">
<li className="breadcrumb-item">
 <a href="#">Home</a>
</li>
<li className="breadcrumb-item">
 <a href="#">admin</a>
</li>
<li className="breadcrumb-item active text-white">Order</li>
</ol>
</div>


<div className="container-fluid py-5">
<div className="container py-5">
    <div className='row'>
   
     <ul className="list-group col-sm-3">
<li className="list-group-item  text-white"><Link  to="/admin/profile"> Profile </Link></li>
<li className="list-group-item active"><Link className="text-white" to="/admin/order"> Order </Link></li>
<li className="list-group-item"><Link to="/admin/product"> Product </Link></li>
<li className="list-group-item"><Link  to="/admin/category"> Category </Link></li>
<li className="list-group-item d-flex justify-content-center"><button className='btn btn-danger w-50'>Logout</button></li>


</ul>
    </div>
 </div>
 </div>
</div>
  )
}

export default Order
