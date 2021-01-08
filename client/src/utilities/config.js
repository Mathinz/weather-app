// set app mode
const AppMode = [process.env.REACT_APP_ENV];

// set API URLs
var production = 'http://localhost:7080';
const development = 'http://localhost:7080';

let baseURL = '';
switch (AppMode[0]) {
  case 'development':
    baseURL = development;
    break;
  case 'production':
    baseURL = production;
    break;
  default:
    baseURL = production;
}

export {baseURL};
