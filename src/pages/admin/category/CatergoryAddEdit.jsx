/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_NEW_CATEGORY } from '../../../redux/constants/categories.constant';
import { storage } from '../../../firebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const CatergoryAddEdit = () => {
  let initState = {};
  
  const dispatch = useDispatch();
  const { id } = useParams(); 

  
  const categories = useSelector(state => 
    state.category.categories
  );
if(id){
  let category= categories.find(category=> category.id===id)
  if(category){
    initState=category.category
    console.log(initState,"initstae")
  }
  else{
    initState={name:"",status:'0',image:""}
  }
}
  

const [data, setData] = useState(initState);
  const handleInputChange = (event) => {
    setData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const storageRef = ref(storage, `category/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed', 
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      }, 
      (error) => {
        console.error("Upload failed:", error);
      }, 
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setData((prevState) => ({
            ...prevState,
            image: downloadURL // Set the download URL directly
          }));
        });
      }
    );
  };

  const submit = (event) => {
    event.preventDefault();
    dispatch({
      type: ADD_NEW_CATEGORY,
      payload: data,
    });
    setData(initState); // Reset form after submission
  };

  return (
    <div>
      {/* Single Page Header start */}
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">{id ? "Edit Category" : "Add Category"}</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item"><a href="#">Admin</a></li>
          <li className="breadcrumb-item"><a href="#">Category</a></li>
          <li className="breadcrumb-item active text-white">{id ? "Edit Category" : "Category Add"}</li>
        </ol>
      </div>

      <div className="container mt-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="mb-0">Category List</h2>
          <Link to="/admin/category">
            <button className="btn btn-primary">Back</button>
          </Link>
        </div>
        <form onSubmit={submit}>
          {/* Category Name */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Category Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={data.name}
              onChange={handleInputChange} 
              required
            />
          </div>

          {/* Status Select */}
          <div className="mb-3">
            <label htmlFor="status" className="form-label">Status</label>
            <select
              className="form-select"
              id="status"
              name="status"
              value={data.status}
              onChange={handleInputChange} 
              required
            >
              <option value='1'>Active</option>
              <option value='0'>Inactive</option>
            </select>
          </div>

          {/* Image Upload */}
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Upload Image</label>
            <input
              type="file"
              className="form-control"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary">
            {id ? "Update" : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CatergoryAddEdit;
