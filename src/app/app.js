import angular from 'angular';
import 'angular-bluebird-promises';

import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor($q, $interval) {
    this.url = 'https://github.com/preboot/angular-webpack';
    const checkInterval = $interval((function () {
      return $interval.cancel(checkInterval);
    }));
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['mwl.bluebird'])
    .directive('app', app)
    .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;