import React, { useState } from 'react';
import './App.css';

function App() {
  const [balance, setBalance] = useState(0);
  const [value, setValue] = useState(0);
  const handleAddition = (e) => {
    setBalance(balance + parseInt(value))
    handleTransactionLabel("add");
    e.preventDefault();
  }
  const handleSubtraction = (e) => {
    setBalance(balance - parseInt(value))
    e.preventDefault();
    handleTransactionLabel("remove");
  }
var dateTime= new Date().toISOString();
var balanceText =dateTime.concat("-",value,"-");
const handleTransactionLabel=(e)=>{

  var ulId=document.getElementById("transaction")
  var liId= document.createElement("li");
  var text= document.createElement('p');
  text=balanceText.concat(e)
  liId.appendChild(document.createTextNode(text))
  ulId.appendChild(liId);
}

  return (
    <div className="App">
      <fieldset className="parentField">
        <div className="header">
          <h1>Expense Tracker - Basics</h1>
          <form >
            <fieldset className="form">
              <label >
                <h3>Balance : {balance}</h3>

                <input type="number" onChange={e => setValue(e.target.value)} id="input" />
              </label>
              <div className="buttons">
              <button type="submit" id="add" onClick={handleAddition}>add</button>
              <button type="submit" id="remove" onClick={handleSubtraction}>remove</button>
              </div>
            </fieldset>
          </form>
          <fieldset className="secondSet">
            <ul id="transaction" className="transactionHistory">
              Transaction:
            </ul>
          </fieldset>
        </div>
      </fieldset>
    </div>
  );
}

export default App;
