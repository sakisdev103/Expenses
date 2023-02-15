import React, { useState , useContext } from 'react';
import { globalContext } from '../context/globalState';
import Transactions from './transactions';
import Balance from './balance';

function Main() {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const {addTransaction} = useContext(globalContext);

  const handleSubmit = (e) =>{
    e.preventDefault();
    const newTransaction = {
        id: Math.floor(Math.random() * 10000),
        text,
        amount: +amount
    }

    addTransaction(newTransaction);

  }

  return (
    <main className='main'>
        <form onSubmit={handleSubmit}>
            <div className='inputs'>
                <input type="text" placeholder='Enter Expence' value={text} onChange={ (e)=> setText(e.target.value)}/>
                <input type="text" placeholder='Amount' value={amount} onChange={(e)=> setAmount(e.target.value)} />
            </div>
            <button type="submit" className='add-btn'>ADD</button>
        </form>
        <section className="transactions">
            <h3>Recent Transactions</h3>
            <div className="underline"></div>
            <div className='container'>
                <Transactions/>
            </div>
            <div className="balance">
                <p>YOUR BALANCE</p>
                <h3><Balance/></h3>
            </div>
        </section>
    </main>
  )
}

export default Main