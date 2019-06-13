import { createConstants , POST_REQUEST , GET_REQUEST} from '../constants';
import { transactionUrl, usersUrl, transactionTypeUrl} from '../url';

export const ADD_TRANSACTION = createConstants('ADD_TRANSACTION');
export const GET_USERS = createConstants('GET_USERS');
export const TRANSACTION_TYPE = createConstants('TRANSACTION', 'TYPE');
export const GET_TRANSACTIONS = createConstants('GET_TRANSACTIONS');


const addTransactionSuccess = ({ transactions }) => ({
    type: ADD_TRANSACTION.SUCCESS,
    payLoad :{
        transactions: transactions
    }
});

const getUsersSuccess = ({ userList }) => ({ 
    type: GET_USERS.SUCCESS,
    payLoad: {
        users: userList
    }
});

const transactionTypeSuccess = ({ transactionTypeList }) => ({
    type: TRANSACTION_TYPE.SUCCESS,
    payLoad: {
        transactionTypes: transactionTypeList
    }
})
export const addTransaction = (params = null) => ({
    type: ADD_TRANSACTION.REQUEST,
    payLoad: {
        url: transactionUrl,
        requestType: POST_REQUEST,
        params: params,
        success: addTransactionSuccess
    }
});


export const getUsers = (params = null) => ({
    type: GET_USERS.REQUEST,
    payLoad: {
        url: usersUrl,
        requestType: GET_REQUEST,
        params: params,
        success: getUsersSuccess
    }
});

export const getTransactionTypes = (params = null) => ({
    type: TRANSACTION_TYPE.REQUEST,
    payLoad: {
        url: transactionTypeUrl,
        requestType: GET_REQUEST,
        params: params,
        success: transactionTypeSuccess
    }
});

export const getTransactions = (params = null) => ({
    type: GET_TRANSACTIONS.REQUEST, 
    payLoad: {
        requestType: GET_REQUEST,
        params: params,
        url: transactionUrl,
        success: addTransactionSuccess
    }
})