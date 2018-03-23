import {APP_CONFIG} from '../app/shared/config/configuration';

export const environment = {
  production: true
};

export function appConfigFactory() {
  return window['xinConfig'] ? window['xinConfig'] : null;
}

// export function ncConfigFactory(): ApiConfigOptions {
//   return window['notificationCenterConfig'] ? window['notificationCenterConfig'] : null;
// }

export const appConfigProvider = [
  {
    provide: APP_CONFIG,
    useFactory: appConfigFactory,
    deps: []
  }
  // ,{
  //   provide: NC_API_CONFIG,
  //   useFactory: ncConfigFactory,
  //   deps: []
  // }
];
