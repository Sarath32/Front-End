import React,{useState,useEffect} from "react";
import {Link,useNavigate,useParams} from 'react-router-dom';
import customerservice from "../Service/customerservice";

const Updatecustomercomponent=()=>
{
    const[staffname,setstaffname]=useState('')
    const[staffaddress,setstaffaddress]=useState('')
    const[staffsalary,setstaffsalary]=useState('')
    const[staffage,setstaffage]=useState('')
    const page=useNavigate();
    const{id}=useParams();

    const navigatecancel=()=>
   {
    page('/ListCustomer')

   }
   


    const updatecustomers=()=>
    {
        const customers={staffname,staffaddress,staffsalary,staffage}
        customerservice.updatecustomer (id,customers).then(
            (response)=>
            {
                page('/ListCustomer');
            }

        ).catch(

            error=>
            {
                console.log(error);
            }
        )
       
    }
    useEffect(
        ()=>
        {
            customerservice.getcustomerbyID(id).then(
                (response)=>
                {
                    setstaffname(response.data.staffname)
                    setstaffaddress(response.data.staffaddress)
                    setstaffsalary(response.data.staffsalary)
                    setstaffage(response.data.staffage)
                }
            ).catch(
    
                error=>
                {
                    console.log(error);
                }
            )
        },[]
            
            )
   
       

    

    return(
        <div className='container'>
            <div className='row text-center'>
                <h2>Update Customer Details</h2>

            </div>
            <div className='card-body'>
             <form>
                <div className='row'>
                   <label>Customer Name</label>
                   <input 
                        type="text" 
                        placeholder='Enter Customer Name'
                        name='customername'
                        className='form-control'
                        value={staffname}
                        onChange={(e)=>setstaffname(e.target.value)}
                        
                        ></input>
                </div>
                <div className='row'>
                   <label>Customer Address</label>
                   <input 
                        type="text" 
                        placeholder='Enter Customer Address'
                        name='customeraddress'
                        className='form-control'
                        value={staffaddress}
                        onChange={(e)=>setstaffaddress(e.target.value)}
                        
                        ></input>
                </div>
                <div className='row'>
                   <label>Customer Salary</label>
                   <input 
                        type="text" 
                        placeholder='Enter Customer Salary'
                        name='customersalary'
                        className='form-control'
                        value={staffsalary}
                        onChange={(e)=>setstaffsalary(e.target.value)}
                        
                        ></input>
                </div>
                <div className='row'>
                   <label>Customer Age</label>
                   <input 
                        type="text" 
                        placeholder='Enter Customer Age'
                        name='customerage'
                        className='form-control'
                        value={staffage}
                        onChange={(e)=>setstaffage(e.target.value)}
                        
                        ></input>&nbsp;
                </div>
                <div className='row'>
                <button type="button"  onClick={()=>updatecustomers()} class="btn btn-primary ">UPDATE</button>&nbsp;
                <button type="button" onClick={()=>navigatecancel()} class="btn btn-danger">CANCEL</button>
                    
                </div>

             </form>
                
            </div>
        </div>
    )

}
export default Updatecustomercomponent;