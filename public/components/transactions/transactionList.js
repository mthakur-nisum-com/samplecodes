import React, { memo } from 'react';
import { connect } from 'react-redux';
import { DataGrid } from '../common/grid/dataGrid';
import { getTransactions } from '../../js/actions/transaction';
import { RenderLineChart } from '../common/graphs/dataGraph';
import { findByProps } from '../../js/utils/array-utils';
const columns = [{
    field: 'transactionId',
    headerName: 'Transaction ID',
    filter: true
}, {
    field: 'transactionDoneBy',
    headerName: 'User Name',
    filter: true
}, {
    field: 'transactiontype',
    headerName: 'Payment Mode',
    filter: true
}, {
    field: 'transactionAmount',
    headerName: 'Amount',
    filter: true
}];
const graphCurves = ['DBS PayLa', 'American Express', 'Visa'];
const generateGraphData = (list = []) => {
    const graphData = [];
   
    graphCurves.forEach((paymentMode) => {
        const paymentList = findByProps(list, { transactiontype: paymentMode });
        paymentList.forEach(({ transactiontype, transactionAmount, transactionId },index) => {
            graphData.push({
                [paymentMode.trim()]: transactionAmount,
                'transactionId': graphData.length,
                'transactionAmount': transactionAmount
            });
        });
    });
    return graphData;
}
export const TransactionListDashboard = memo(({ transactions, getTransactions}) => {
    if (!transactions.length) {
        getTransactions();
    }
    return (
        <section className="transaction-grid-sec">
            <DataGrid columns={columns} data={transactions} pagination={true} paginationPageSize={10}/>
            <section className="transaction-graph-sec">
                <RenderLineChart data={generateGraphData(transactions)} curves='Visa,DBS PayLa,American Express' width={800} height={400} margin={{ "margin-left": '-34px' }} />
            </section>
        </section>

    )
})

const stateToProps = ({ transaction }) => ({
    transactions: transaction.transactions
});

export default connect(stateToProps, { getTransactions })(TransactionListDashboard);