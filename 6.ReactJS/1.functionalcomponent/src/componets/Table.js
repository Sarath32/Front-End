import React from 'react';
import Tableheader from './Tableheader';
import Tablebody from './Tablebody';


export default function Table(){
    return(
        <table border={1}>
            <Tableheader/>
            <Tablebody/>

        </table>
    )
}