import React, { Fragment , PureComponent} from 'react';
import { connect } from 'react-redux';
import FormComponent from '../common/form/formComponent';
import { Input, RadioButtonGroup} from '../common/customControls';
import { addTransaction, getUsers, getTransactionTypes } from '../../js/actions/transaction';

const stateToProps = ({ transaction }) => ({
    users: transaction.users,
    transactionTypes: transaction.transactionTypes
});
@connect(stateToProps, { addTransaction, getUsers, getTransactionTypes })
export default class extends PureComponent {
    componentDidMount = async () => {
        const { getUsers, getTransactionTypes } = this.props;
        await getUsers();
        await getTransactionTypes();
    } 
    addNewTransaction = (...params) => {
        const [user, action, { reset }] = params;
        const { transactionAmount, user: { userId, userName }, transactionType } = user;
        const transactionObj = {
            transactionAmount: transactionAmount,
            userId: userId,
            userName: userName,
            transactionType: transactionType
        };
        this.props.addTransaction(transactionObj);
        reset();
    }
    render() {
        const { users, transactionTypes} = this.props;
        return (
            <Fragment>
                {(transactionTypes.length >0&& users.length >0) && (<section className="add-transaction-sec">
                    <FormComponent name="addTransaction" initialValues={{ user: null, transactionAmount: null, transactionType: null }} onSubmit={this.addNewTransaction}>
                        <ul className="add-transaction-form-sec">
                            <li>
                                <RadioButtonGroup options={users} name="user" validate={true} keyName="userName" customClass="custom-radio-btn-no-label" />
                            </li>
                            <li>
                                <RadioButtonGroup options={transactionTypes} name="transactionType" validate={true} keyName="transactiontype" customClass="custom-radio-btn-label" />
                            </li>
                            <li className="form-row">
                                <Input type="text" name="transactionAmount" id="transactionAmount" validate={true} />
                            </li>
                            <li className="form-row">
                                <button type="submit" className="app-primary-btn right">Transfer</button>
                            </li>
                        </ul>
                    </FormComponent>
                </section>)}
           </Fragment>

        )
    }
}
