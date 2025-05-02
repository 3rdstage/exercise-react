
import React from 'react';
import ReactDOM from 'react-dom';
import type { ExpenseItemValue } from './components/types';
import HelloWorld from './components/HelloWorld';
import ExpenseEntryItem from './components/ExpenseEntryItem';
import ExpenseEntryItem2 from './components/ExpenseEntryItem2';
import ExpenseEntryItemList from './components/ExpenseEntryItemList';

ReactDOM.render(
  <React.StrictMode>
    <HelloWorld />
  </React.StrictMode>,
  document.getElementById("root")
);

function getCurrentTime(){
  return new Date().toTimeString();
}

ReactDOM.render(
  <div>
    <p>The current time is <span>{getCurrentTime()}</span></p>
  </div>,
  document.getElementById("time")
)

ReactDOM.render(
  <React.StrictMode>
    <ExpenseEntryItem />
  </React.StrictMode>,
  document.getElementById("expense")
)

const item: ExpenseItemValue={
  id: 1,
  name: "Melon Juice",
  amount: 30.5,
  spendDate: new Date("2025-05-05"),
  category: 'Food'
}

ReactDOM.render(
  <React.StrictMode>
    <ExpenseEntryItem2 item={item}/>
  </React.StrictMode>,
  document.getElementById('expense2')
)

const items: ExpenseItemValue[] = [
  { id: 1, name: "Pizza", amount: 80, spendDate: "2020-10-10", category: "Food" },
  { id: 1, name: "Grape Juice", amount: 30, spendDate: "2020-10-12", category: "Food" },
  { id: 1, name: "Cinema", amount: 210, spendDate: "2020-10-16", category: "Entertainment" },
  { id: 1, name: "Java Programming book", amount: 242, spendDate: "2020-10-15", category: "Academic" },
  { id: 1, name: "Mango Juice", amount: 35, spendDate: "2020-10-16", category: "Food" },
  { id: 1, name: "Dress", amount: 2000, spendDate: "2020-10-25", category: "Cloth" },
  { id: 1, name: "Tour", amount: 2555, spendDate: "2020-10-29", category: "Entertainment" },
  { id: 1, name: "Meals", amount: 300, spendDate: "2020-10-30", category: "Food" },
  { id: 1, name: "Mobile", amount: 3500, spendDate: "2020-11-02", category: "Gadgets" },
  { id: 1, name: "Exam Fees", amount: 1245, spendDate: "2020-11-04", category: "Academic" }
]

ReactDOM.render(
  <React.StrictMode>
    <ExpenseEntryItemList items={items} />
  </React.StrictMode>,
  document.getElementById("expenseList")
)