// eslint-disable jsx-a11y/anchor-is-valid 
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { GET_NEW_PRODUCT } from '../../../redux/constants/products.constant'; // Update the import
import { deleteProductStart } from '../../../redux/actions/product.action'; // Update the import

const Product = () => {
  const products = useSelector(state => state.product.products); // Update the state selector
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: GET_NEW_PRODUCT }); // Update the dispatched action
  }, [dispatch]);

  const deleteProduct = async (product) => {
    console.log("delcat in component called");
    dispatch(deleteProductStart(product)); // Update the action
  };

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
          <li className="breadcrumb-item active text-white">Product</li>
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
                <li className="list-group-item active">
                  <Link className="text-white" to="/admin/product">Product</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/admin/category">Category</Link>
                </li>
                <li className="list-group-item d-flex justify-content-center">
                  <button className="btn btn-danger w-50">Logout</button>
                </li>
              </ul>
            </div>

            {/* Table with title and Add Product button */}
            <div className="col-sm-9">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="mb-0">Product List</h2>
                <Link to="/admin/product/add">
                  <button className="btn btn-primary">No Product</button>
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
                  {products.map((item, index) => {
                    const { product } = item; // Destructure product object
                    
                    return (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{product?.image && <img src={product.image} width="200px" height="200px" alt="image2" />}
                          {!product?.image && <p>No image provided</p>}</td>
                        <td>{product?.name || "Unnamed"}</td>
                        <td>{product?.status === '0' ? "Inactive" : "Active"}</td>
                        <td>
                          <button className="btn btn-dark" onClick={() => { navigate(`/admin/product/edit/${item.id}`) }}>Edit</button>
                        </td>
                        <td>
                          <button className="btn btn-danger" onClick={() => { deleteProduct(item) }}>Delete</button>
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
  );
};

export default Product;
