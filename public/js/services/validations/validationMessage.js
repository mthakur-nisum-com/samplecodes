const messages = {
    "transactionAmount": {
        "required": 'Amount is Required',
        "maxRange": 'Transaction amount cannot exceed more than 500',
        "numeric": 'Transaction amount should be a integer and either zero or non-negetive integer'
    },
    "user": {
        "required": 'Select a User to initiate transfer'
    },
    "transactionType": {
        "required": "Select payment mode"
    }
}

export const getMessage = (fieldName, validator) => {
    const messageObj = messages[fieldName];
    return messageObj[validator] ? messageObj[validator] : '';
};

