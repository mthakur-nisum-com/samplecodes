import React from 'react';
import { Provider } from 'react-redux';
import { store } from './js/store/appStore';
import { TransactionDashboard } from './components/transactions/transactionDasboard';
import css from './scss/styles.scss';
export const AppMain = () => (
    <Provider store={store}>
        <main className="main-container">
        	<section className="content-section">
            	<TransactionDashboard/>
            </section>
        </main>
    </Provider>
);