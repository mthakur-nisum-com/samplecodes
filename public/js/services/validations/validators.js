import validationConfig from './validationConfig';
import { getMessage } from './validationMessage';
const number = new RegExp('^[0-9]+$');



export const required = (...params) => {
    const [value, field, formObj, fieldName] = params;
    return value ? value.constructor === String && value.trim().length <= 0 ? getMessage(fieldName, 'required') : typeof value === Object && value === null ? getMessage(fieldName, 'required') : '' : getMessage(fieldName, 'required');
}

const maxRange = function (...params) {
    const [value, field, formObj, fieldName] = params;
    return value && parseInt(value, 10) > this.range ? getMessage(fieldName, 'maxRange') : '';
}

const numeric = (...params) => { 
    const [value, field, formObj, fieldName] = params;
    return value ? !number.test(value) ? getMessage(fieldName, 'numeric') : '' : '';
};

const buildValidator = (fieldName = null) => {
    const validatorList = [];
    const validators = validationConfig[fieldName];
    const validations = Object.keys(validators);
    validations.forEach((validatorName) => {
        if(validators[validatorName]) {
            switch (validatorName) {
                case 'required':
                    validatorList.push(required);
                    break;
                case 'maxRange':
                    validatorList.push(maxRange.bind({ range: validators[validatorName] }));
                    break;
                case 'numeric':
                    validatorList.push(numeric);
                    break;
            }
        }
        
    });
    return validatorList;
}
export const checkValidations = (name = '', validate = false) => {
    if (validate) {
        if (name && name.length) {
            const validations = buildValidator(name);
            return validations;
        }
    }
};