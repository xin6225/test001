// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

import {AppConfig} from '../app/shared/config/app-config';
import {APP_CONFIG} from '../app/shared/config/configuration';

export const environment = {
  production: false
};


export function appConfigFactory() {
  // this is just a example for development. real config should be done in CEP with sessionId
  return <AppConfig>{
    sessionId: '',
    jwtToken: '',
    baseUrl: '',
    navigation: {
      header: '/assets/headerNav.json',
      left: '/assets/leftNav.json'
    }
  };
}

export const appConfigProvider = [
  {
    provide: APP_CONFIG,
    useFactory: appConfigFactory,
    deps: []
  }
];
