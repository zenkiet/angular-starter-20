import packageJson from '../../package.json';
const name = packageJson.name;

export const STORAGE_KEYS = {
  USER: `${name}.user`,
  ACCESS_TOKEN: `${name}.access_token`,
  REFRESH_TOKEN: `${name}.refresh_token`,

  SCHEME: `${name}.scheme`,
  PAGING_CUSTOMIZE: `${name}.paging_customize`,
};
