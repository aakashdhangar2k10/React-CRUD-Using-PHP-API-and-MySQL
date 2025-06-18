import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Productlist() {
    const [product, setProduct] = useState([]);
    const [message, setMessage]= useState('');
    
    useEffect(() => {
     const getProduct =  () => {
            fetch("http://localhost/reactcrudphp/api/product.php")
            .then(res=>{return res.json()})
            .then(data=>{setProduct(data)})
            .catch(error=>{console.log(error)});
        }
        getProduct();
        }, []);


    const handleDelete= async(id)=>{
        const res= await axios.delete("http://localhost/reactcrudphp/api/product.php/"+id);
        setMessage(res.data.success);   
        setProduct();
        
    }


    return (

        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-7 mt-4">
                        <h5 className="mb-4">Product List</h5>
                        <p className="text-danger">{message}</p>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Sr. No</th>
                                    <th scope="col">Product title</th>
                                    <th scope="col">Product Price</th>
                                    <th scope="col">Product Image</th>
                                    <th scope="col">Product Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                               {
                                product.map((pData, index)=>(

                                <tr key = {index}> 
                                    <td scope="row">{index+1}</td>
                                    <td >{pData.ptitle}</td>
                                    <td>{pData.pprice}</td>
                                    <td><img src={`http://localhost/reactcrudphp/images/${pData.pimage}`} height={90} width={90}/></td>
                                    <td>{pData.status==1?"Active":"Inactive"}</td>
                                    <td>
                                        <Link to={"/editproduct/"+pData.id}  className= "btn btn-success mx-2">Edit</Link>
                                        <button className= "btn btn-danger mx-2" onClick={ ()=>handleDelete(pData.id)}>Delete</button>
                                    </td>
                                </tr>
                                ))   
                            } 
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}

export default Productlist;
