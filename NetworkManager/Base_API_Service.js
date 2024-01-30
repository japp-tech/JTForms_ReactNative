import AsyncStorage from '@react-native-community/async-storage';
import NetInfo from '@react-native-community/netinfo';
import { BaseURL, APIRequests } from './NetworkConstants';
import {fetch} from 'react-native-ssl-pinning';
import * as Constants from '../Utils/constants';

const networkError = {
  response: {
    api_status: Constants.network_code,
    noNetwork: Constants.no_Network,
  },
};

const RequestMethod = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

const getLoginHeaders = () => {
  let customHeaders = {
    'Content-Type': 'multipart/form-data',
    //'Connection': 'keep-alive',
    //'credentials': 'same-origin',
    //'Accept': 'application/json'
  };
  return customHeaders;
};

const getHeaders = async () => {
  let accessToken = await getAccesstoken();
  let loginheaders = {
    'Content-Type': 'application/json',
    // Connection: 'keep-alive',
    Accept: 'application/json',
    // Authorization: `Bearer ${decodeURIComponent(accessToken)}`,
  };
};

const getAccesstoken = async () => {
  let accessToken = await AsyncStorage.getItem('AccessToken');
  return accessToken;
};

const get = async url => {
  let network;
  await NetInfo.fetch().then(state => (network = state.isConnected));
  if (network) {
    return callGetApi(RequestMethod.GET, url);
  } else {
    return networkError;
  }
};

const post = async (url, params) => {
  let network;
  await NetInfo.fetch().then(state => (network = state.isConnected));
  if (network) {
    return callPostApi(RequestMethod.POST, url, params);
  } else {
    return networkError;
  }
};

const callGetApi = async (requestMethod, url) => {
  let accessToken = await getAccesstoken();
  let loginheaders = {
    'Content-Type': 'application/json',
    Connection: 'keep-alive',
    Accept: 'application/json',
    Authorization: `Bearer ${decodeURIComponent(accessToken)}`,
  };

  let requestInit = {
    headers: loginheaders,
    method: requestMethod,
    credentials: 'same-origin',
  };
  return fetch(`${url}`, requestInit)
    .then(response => {
      const statusCode = response.status;
      return new Promise((resolve, reject) => {
        response
          .json()
          .then(response => {
            resolve({ response, statusCode });
          })
          .catch(error => {
            alert(error);
            reject('Invalid Response!');
          });
      });
    })
    .catch(error => {
      alert('Something went wrong!');
    });
};
const callPostApi = async (requestMethod, url, params) => {
  let requestInit = null;
  let headers = getLoginHeaders();
  if (url === BaseURL + APIRequests.login || BaseURL + APIRequests.register) {
    requestInit = {
      method: requestMethod,
      body: params,
      sslPinning: {
        certs: ["add your certificate"] // your certificates name (without extension), for example cert1.cer, cert2.cer
      },
    };
  } else {
    requestInit = {
      headers: headers,
      method: requestMethod,
      body: params,
    };
  }

  return fetch(`${url}`, requestInit)
    .then(response => {
      const statusCode = response.status;
      return new Promise((resolve, reject) => {
        response
          .json()
          .then(response => {
            resolve({ response, statusCode });
          })
          .catch(error => {
            reject('Invalid Response!');
          });
      });
    })
    .catch(error => {
      return networkError;
    });
};

export default {
  get,
  post,
};
