import axios from 'axios';
import { API_HOSTNAME } from '../utils/constants';

// TODO: Update/remove on finalising authorization method
// axios.interceptors.request.use(config => {
//   return {
//     ...config,
//     headers: {
//       ...config.headers,
//     //   Authorization: Cookies.get('authToken'),
//     },
//   };
// });

/**
 * create api path
 * @param url string
 */
const getPath = url => `${API_HOSTNAME}/${url}`;

/**
 * api basic operations
 *
 */
const api = {
  get: (url, config = {}) => axios.get(getPath(url), config),

  post: (url, data = {}, config = {}) => axios.post(getPath(url), data, config),

  delete: (url, config = undefined) => axios.delete(getPath(url), config),
};

/**
 *
 * @param response ApiResponse
 * @param successType string
 */
export function handleOnSuccess(response, successType) {
  const { status, data } = response;
  switch (status) {
    case 200:
    case 206:
      return {
        type: successType,
        payload: data.data,
      };

    default:
      return {};
  }
}

/**
 *
 * @param response ApiResponse
 * @param errorType string
 */
export function handleOnError(response, errorType) {
  const status = (response && response.status) || 599;
  const message = (response && response.statusText) || 'Network Error';
  switch (status) {
    case 422:
    case 412:
    case 503: // Service Not available
    case 409: // Conflict or duplicate request
      return {
        type: errorType,
        payload: response.data,
      };
    case 500:
    case 404:
    case 599:
      return {
        type: errorType,
        payload: {
          message: message,
        },
      };
    // case 401:
    //   return {
    //     type: ActionType.USER_NOT_AUTHENTICATED,
    //     payload: {
    //       message: message,
    //     },
    //   };
    default:
      return {};
  }
}

export default api;
