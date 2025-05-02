import React from 'react';
import './ExpenseEntryItem.css';

class ExpenseEntryItem extends React.Component{
  render(){
    return(
      <div className='item'>
        <div><b>Item:</b> <em>Beet Juice</em></div>
        <div><b>Amount:</b> <em>30.0</em></div>
        <div><b>Spend Date:</b> <em>2020-10-10</em></div>
        <div><b>Category:</b> <em>Food</em></div>
      </div>
    );
  }
}

export default ExpenseEntryItem;