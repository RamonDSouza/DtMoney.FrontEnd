import React, {useContext} from 'react';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import {useTransactions} from '../../hooks/useTransactions';
import { Container } from "../Summary/styles";

export function Summary(){

  const {transactions} = useTransactions();

  const summary = transactions.reduce((acc,transaction) =>{
    if(transaction.type === 'deposit'){
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    }else{
      acc.withdraws += transaction.amount
      acc.total -= transaction.amount;
    }
    return acc;
  },{
    deposits: 0,
    withdraws: 0,
    total: 0
  })

  return(
   <Container>
    
     <div>
       <header>
         <p>Entradas</p>
         <img src={incomeImg} alt="Entradas"></img>
       </header>
      <strong>R${summary.deposits}</strong>
     </div>
     <div>
       <header>
         <p>Saídas</p>
         <img src={outcomeImg} alt="Saídas"></img>
       </header>
      <strong>-R${summary.withdraws}</strong>
     </div>
     <div className="backaground">
       <header>
         <p>Total</p>
         <img src={totalImg} alt="Total"></img>
       </header>
      <strong>R${summary.total}</strong>
     </div>
   </Container>
    )
}