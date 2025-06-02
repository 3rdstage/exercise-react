import React, { SyntheticEvent } from 'react';
import type { ExpenseItemValue } from './types';
import './ExpenseEntryItemList.css';


// https://www.tutorialspoint.com/reactjs/reactjs_component_collection.htm
// https://www.tutorialspoint.com/reactjs/reactjs_stateless_component.htm
class ExpenseEntryItemList extends
    React.Component<{items: ExpenseItemValue[]}, {items: ExpenseItemValue[]}>{

  constructor(props : {items: ExpenseItemValue[]}){
    super(props);

    this.state = { items : this.props.items };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleMouseEnter(ev: React.MouseEvent){
    ev.currentTarget.classList.add("highlight");
    console.log("Mouse Entered");
    console.log(ev.currentTarget);
    console.log(ev.currentTarget.classList);
  }

  handleMouseLeave(ev: React.MouseEvent){
    ev.currentTarget.classList.remove("highlight");
    console.log("Mouse Left");
    console.log(ev.currentTarget);
    console.log(ev.currentTarget.classList);
  }

  handleMouseOver(ev: React.MouseEvent){
    console.log(`The mouse is at (${ev.clientX}, ${ev.clientY})`);
  }

  handleRemove(id: number, ev: React.MouseEvent){
    console.log(`Removing item ${id}`)

    this.setState((state, props) => {
        return { items : state.items.filter((item) => (item.id != id)) }
    })

    console.log(`Removed item ${id}`)
  }

  getTotalAmount(): number{
    return this.state.items.reduce((sum, val) => sum + val.amount, 0);
  }

  override render(){
    //@ts-ignore
    const list = this.state.items.map((item: ExpenseItemValue) =>
      <tr key={item.id} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <td>{item.name}</td>
        <td>{item.amount.toLocaleString()}</td>
        <td>{new Date(item.spendDate).toDateString()}</td>
        <td>{item.category}</td>
        <td><a href="#" onClick={(ev) => this.handleRemove(item.id, ev)}>Remove</a></td>
      </tr>
    );

    return(
      <table onMouseOver={this.handleMouseOver}>
        <thead><tr>
          <th>Item</th><th>Amount</th><th>Date</th><th>Category</th><th>Remove</th>
        </tr></thead>
        <tbody>
          {list}
          <tr>
            <td colSpan={1} style={{textAlign: "right"}}>Total Amount</td>
            <td colSpan={4} style={{textAlign: "left"}}>{this.getTotalAmount().toLocaleString()}</td>
          </tr>
        </tbody>
      </table>

    );
  }
}

export default ExpenseEntryItemList;
