import environment from './environment';

export function configure(aurelia) {
//מסיראזהרה לגבי מימוש של Bluebird
//Promise.config({warning:false});

  aurelia.use
    .standardConfiguration()
    .feature('resources');

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
}
