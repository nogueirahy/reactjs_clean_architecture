import { AxiosHttpClient } from '../../../infra/http'

export const makeAxiosHttpClient = (): typeof AxiosHttpClient => AxiosHttpClient;
