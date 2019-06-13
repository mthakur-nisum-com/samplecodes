import React, { Fragment } from 'react';
import AddTransaction from './addTransaction';
import TransactionListDashboard from './transactionList';
export const TransactionDashboard = () => (
    <section className="user-transaction-details-sec">
        <AddTransaction />
        <TransactionListDashboard/>
    </section>
    
);