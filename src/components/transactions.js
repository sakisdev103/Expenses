import React, {useContext} from 'react';
import { globalContext } from '../context/globalState';

function Transactions() {
  const {transactions, deleteTransaction} = useContext(globalContext);
  return (
    <>
      {
        transactions.map((item)=>{
          return(
          <article key={item.id} className='flex'>
            <div className="history">
              <label>{item.text}</label>
              <label className={item.amount >= 0 ? `positive`: `negative`}>{item.amount}</label>
            </div>
            <button className='trash' onClick={()=>deleteTransaction(item.id)}><i className='fa-solid fa-trash-can'></i></button>
          </article>

          )
        })
      }
    </>
  )
}

export default Transactions