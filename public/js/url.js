import { buildServiceUrl } from './utils/format-url';

const appUrl = buildServiceUrl();

export const transactionUrl = `${appUrl}/transactions`;
export const usersUrl = `${appUrl}/users`;
export const transactionTypeUrl = `${appUrl}/transactionTypes`;