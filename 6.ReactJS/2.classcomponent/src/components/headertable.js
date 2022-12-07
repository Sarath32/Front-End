import React,{Component}from 'react';

export default class Headertable extends Component
{
    render()
    {
        return(
            <thead>
                <th>Customer ID </th>
                <th>Customer Name</th>
                <th>Customer Address</th>
                <th>Customer Phnnum</th>
            </thead>
        )
    }
}