/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { GET_NEW_CATEGORY } from '../../../redux/constants/categories.constant'
import { deleteCategoryStart } from '../../../redux/actions/category.action'

const Category = () => {
  const categories=useSelector(state=> state.category.categories)
  const dispatch= useDispatch();
 const navigate=useNavigate();

  useEffect(() => {
    dispatch({ type: GET_NEW_CATEGORY });
  }, [dispatch]); 
  const deleteCategory=async(category)=>{
    console.log("delcat in component called")
    dispatch(deleteCategoryStart(category))
  }
  return (
    <div>
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Profile</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">admin</a>
          </li>
          <li className="breadcrumb-item active text-white">Category</li>
        </ol>
      </div>

      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row">
            {/* Sidebar with links */}
            <div className="col-sm-3">
              <ul className="list-group">
                <li className="list-group-item">
                  <Link to="/admin/profile">Profile</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/admin/order">Order</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/admin/product">Product</Link>
                </li>
                <li className="list-group-item active">
                  <Link className="text-white" to="/admin/category">Category</Link>
                </li>
                <li className="list-group-item d-flex justify-content-center">
                  <button className="btn btn-danger w-50">Logout</button>
                </li>
              </ul>
            </div>

            {/* Table with title and Add Category button */}
            <div className="col-sm-9">
              {/* Table title and Add Category button */}
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="mb-0">Category List</h2>
                <Link to="/admin/category/add">
                  <button className="btn btn-primary">Ajay Category</button>
                </Link>
              </div>

              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
  {categories.map((item, index) => {
    const { category } = item; // Destructure category object
    
    
    return (
      <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td>{category?.image && <img src={category.image} width="200px" height="200px" alt="image2"/>}
        {!category?.image && <p>no image provided</p>}</td> 
        <td>{category?.name || "Unnamed"}</td>  
        <td>{category?.status==='0'?"InActive":"Active"}</td>   
        <td>
            
            <button className="btn btn-dark" onClick={() => {navigate(`/admin/category/edit/${item.id}`)}}>Edit</button>
        </td>
        <td>
            
            <button className="btn btn-danger" onClick={() => {deleteCategory(item)}}>Delete</button>
        </td>
      </tr>
    );
  })}
</tbody>

              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category
