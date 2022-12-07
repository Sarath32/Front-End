
import axios from 'axios'

const customer_baseurl='http://localhost:8080/api/compstaffdetails';

class Customerservice{

    getallcustomers(){

        return axios.get(customer_baseurl);
    }

    deletecustomer(cusid){

        return axios.delete(customer_baseurl+'/'+cusid);
    }

    createcustomer(customers){
        return axios.post(customer_baseurl,customers);
    }

    getcustomerbyID(cusid){
         return axios.get(customer_baseurl+'/'+cusid)
    }

    updatecustomer(cusid,customers){
         
        return axios.put(customer_baseurl+'/'+cusid,customers);
    }
}

export default new Customerservice();