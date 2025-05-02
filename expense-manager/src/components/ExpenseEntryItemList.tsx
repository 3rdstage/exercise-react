import React from 'react';
import type { ExpenseItemValue } from './types';
import './ExpenseEntryItemList.css';

// https://www.tutorialspoint.com/reactjs/reactjs_component_collection.htm
class ExpenseEntryItemList extends React.Component{

  constructor(props: any){
    super(props);
  }

  render(){
    //@ts-ignore
    const list = this.props.items.map((item: ExpenseItemValue) =>
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.amount}</td>
        <td>{new Date(item.spendDate).toDateString()}</td>
        <td>{item.category}</td>
      </tr>
    );

    return(
      <table>
        <thead><tr>
          <th>Item</th><th>Amount</th><th>Date</th><th>Category</th>
        </tr></thead>
        <tbody>
          {list}
        </tbody>
      </table>

    );
  }
}

export default ExpenseEntryItemList;
