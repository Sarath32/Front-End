import React,{Component}from 'react';
import Headertable from './headertable'
import Bodytable from './bodytable'

export default class Table extends Component
{
    render()
    {
        return(
            <table>
               <Headertable/>
               <Bodytable/>
            </table>
        )
    }
}