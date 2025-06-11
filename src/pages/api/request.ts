import { injectBearer } from 'brainless-token-manager';
import { extend } from 'umi-request';

import { ENV } from '@/utils/env';
// import { getAccessToken } from '@/store/auth';

const REQ_TIMEOUT = 25 * 1000;
export const PREFIX_API = ENV.APP_API_URL;

const request = extend({
  prefix: PREFIX_API,
  timeout: REQ_TIMEOUT,
  errorHandler: (error: any) => {
    const errorResponse = error?.data || error?.response;
    console.error('API Error:', errorResponse);
    throw errorResponse;
  },
});

const privateRequest = async (request: any, suffixUrl: string, configs?: Record<string, any>) => {
  try {
    // const accessToken = getAccessToken();
    const token: string = configs?.token ?? ('' as string);

    if (!token) {
      throw new Error('No access token available');
    }

    return await request(suffixUrl, injectBearer(token, configs));
  } catch (error) {
    console.error('Private request failed:', error);
    throw error;
  }
};

export { privateRequest, request };
