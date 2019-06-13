import { createConstants } from '../constants';
import { GET_USERS, TRANSACTION_TYPE, ADD_TRANSACTION} from '../actions/transaction';
const initialState={
    transactions: [],
    users: [],
    transactionTypes:[]
}

export default (state = initialState , { type , payLoad } ) => {
    switch (type) {
        case GET_USERS.SUCCESS:
            return { ...state, ...payLoad };
        case TRANSACTION_TYPE.SUCCESS:
            return { ...state, ...payLoad };
        case ADD_TRANSACTION.SUCCESS:
            return { ...state, ...payLoad };
        default:
            return state;
    }

} 