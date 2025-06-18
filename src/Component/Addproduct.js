import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Addproduct() {
        const navigate= useNavigate();
        const[ptitle,setPtitle]= useState('');
        const[pprice,setPprice]= useState('');
        const[pfile,setPfile]=useState('');
        const[message,setMessage]=useState('');


        const uploadProduct= async()=>{
            const formData= new FormData();
            formData.append('ptitle',ptitle);
            formData.append('pprice',pprice);
            formData.append('pfile',pfile);
            const responce= await axios.post("http://localhost/reactcrudphp/api/product.php",formData,{
                headers:{'Content-Type':"multipart/form-data"},
            });

            if(responce.data.success)
            {
                setMessage(responce.data.success);
                setTimeout(()=>{
                    navigate('/productlist');
                },2000);
            }
        }
        
const handleSubmit= async(e)=>{
    e.preventDefault();
    await uploadProduct();
}


    return (

        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-4">
                        <h5 className="mb-4">Add Product</h5>
                        <p className="text-warning"> {message}</p>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3 row">
                                <label className="col-sm-3 ">Product Title</label>
                                <div className="col-sm-9">
                                    <input type="text" name="username"  className="form-control" onChange={ (e)=>setPtitle(e.target.value)}  />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-3 ">Product Price</label>
                                <div className="col-sm-9">
                                    <input type="text" name="email"  className="form-control" onChange={ (e)=>setPprice(e.target.value)} />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-3 ">Product Image</label>
                                <div className="col-sm-9">
                                     <input type="file" name=""  className="form-control" onChange={ (e)=>setPfile(e.target.files[0])} /> 
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-2"></label>
                                <div className="col-sm-10">
                                    <button name="submit" className="btn btn-success">Add Product</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}

export default Addproduct;
