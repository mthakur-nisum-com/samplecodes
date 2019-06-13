import React,{ Fragment } from 'react';
import { Field } from 'redux-form';
import { checkValidations } from '../../js/services/validations/validators';


export const FieldError = ({ msg }) => <span className="form-error">{msg}</span>;
export const FieldWarning = ({ msg }) => <span className="form-warning" > {msg}</span>;

const FormValidationMessge = ({ error, warning }) => <Fragment>
    {error && <FieldError msg={error} />}
    {warning && <FieldError msg={warning} />}
</Fragment>

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => {
    return (
        <Fragment>
            <Fragment>
                <input {...input} type={type} />
                {touched && (<FormValidationMessge error={error} warning={warning}/>)}
            </Fragment>
        </Fragment>
    )
}
const RadioBtnGrp = ({ input, options, meta: { touched, error, warning }, keyName , customClass} ) => {
    return (<Fragment>
        {options.map((option, index) => {
            return (
                <Fragment key={index}>
                    <label className={customClass}>{option[keyName]}
                        <input name={input.name} onChange={event => {
                            return input.onChange(event.target.checked ? option : null);
                        }} id={index} key={index} type="radio" />
                    </label>
                </Fragment>
            )

        })}
        { touched && (<FormValidationMessge error={error} warning={warning} /> )}
    </Fragment>)
};
export const Input = ({ name, validate, warning, type, id }) => (<Field name={name} type={type} component={renderField} validate={checkValidations(name, validate)} id={id} />);
export const RadioButtonGroup = ({ name, validate, warning=[], options , keyName , customClass=''}) => <Field component={RadioBtnGrp} name={name} validate={checkValidations(name, validate)} warning={warning} options={options} keyName={keyName} customClass={customClass}/>