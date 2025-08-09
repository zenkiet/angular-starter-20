import packageJson from '../package.json';

declare const window: any;

export const environment = {
  production: false,
  mobile: false,
  version: packageJson.version,
  apiUrl: window['env'].API_URL,
};
