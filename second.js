import React from  'react';
import { Component } from 'react';
class ExpressEntryItem extends React.Component
{
    render()
    {
        return(
            <div>
                <div><b>Item: </b><em>MangoJuice</em></div>
                <div><b>Amount: </b><em>30000</em></div>
                <div><b>spend </b><em>2024-07-01</em></div>
                <div><b>category </b><em>food</em></div>
            </div>
        );
    }
}
export default ExpressEntryItem;