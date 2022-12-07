import React,{useState,useEffect} from "react";
import customerservice from "../Service/customerservice";
import {Link,useNavigate} from 'react-router-dom'

const ListCustomer=()=>
{
   const[customer,setcustomer]=useState([])
   const page=useNavigate();
   useEffect(
        ()=>
        {
            getallcustomers();
        },[]
   )

   const getallcustomers=()=>
   {
    customerservice.getallcustomers().then(
        (Response)=>
        {
            setcustomer(Response.data)
        }
    ).catch(

        error=>
        {
            console.log(error);
        }
    )

   }

   const deleteCustomer=(cusid)=>
   {
    customerservice.deletecustomer(cusid).then(
        (Response)=>
        {
            getallcustomers();
        }
    ).catch(

        error=>
        {
            console.log(error);
        }
    )
   }

   const navigateaddcustomer=()=>
   {
    page('/add-customer')

   }
   

   return(

     <div className="container">
        <h1>Customer Details</h1>
        <button type="button" onClick={()=>navigateaddcustomer()} class="btn btn-success mt-5 mb-0 d-md-flex justify-content-md-end">Add Customer</button>
     <br></br>
     <br></br>
     <table class="table table-bordered">
     <thead>
        <th>id</th>
        <th>staffname</th>
        <th>staffaddress</th>
        <th>staffsalary</th>
        <th>staffage</th>
        <th>Action</th>
     </thead>
     <tbody>
        {
            customer.map(
                cust=>
                <tr key={cust.id}>
                    <td>{cust.id}</td>
                    <td>{cust.staffname}</td>
                    <td>{cust.staffaddress}</td>
                    <td>{cust.staffsalary}</td>
                    <td>{cust.staffage}</td>
                    <td>
                        
                        <Link class="btn btn-primary" to={`/update-customer/${cust.id}`}>Update</Link>&nbsp;
                        <button type="button" onClick={()=>deleteCustomer(cust.id)} class="btn btn-danger">Delete</button>
                    
                    </td>
                </tr>

            )
        }
     </tbody>


</table>

     </div>



   )

}
export default ListCustomer;
