import React, { useContext } from 'react'
import { globalContext } from '../context/globalState'

function Balance() {
  const {transactions} = useContext( globalContext );  
  const amounts = transactions.map((transaction)=>transaction.amount);
  const total = amounts.reduce((acc,item)=>(acc += item), 0 ).toFixed(2);

  return (
    <>
        <p>{total}€</p>
    </>
  )
}

export default Balance