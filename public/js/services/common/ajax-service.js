import { handleServiceCall } from './base-sevice';

export const makeServiceRequest = async (requestType,url,...opts) => await handleServiceCall(requestType,url,...opts);
