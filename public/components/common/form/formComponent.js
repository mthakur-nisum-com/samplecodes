import React from 'react'
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
export const FormComponent = props => (
    <form onSubmit={props.handleSubmit} autoComplete="off">
        {props.children}
    </form>
)
const stateToProps = (state, props) => ({
    form: props.name,
    initialValues: props.initialValues
})
export default connect(stateToProps, null)(reduxForm(FormComponent.props)(FormComponent));