
import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld';
import ExpenseEntryItem from './components/ExpenseEntryItem';
import ExpenseEntryItem2 from './components/ExpenseEntryItem2';

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

const item={
  id: 1,
  name: "Grape Juice",
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
