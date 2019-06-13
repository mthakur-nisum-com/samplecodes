import { SERVICE_ERROR } from '../../constants';

export const errorService = (errorCode,errorMessage) => ({
    type: SERVICE_ERROR,
    payLoad: {
        code:errorCode,
        errorMsg: errorMessage
    }
})