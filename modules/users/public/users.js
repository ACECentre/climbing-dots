'use strict';

angular.module('delicious.users', ['delicious.system'])
  .factory('appAuth', [
    '$http',
    'appStorage',
    function($http, appStorage) {
      return {
        isLoggedIn: function() {
          return appStorage.get('userToken');
        },
        getToken: function() {
          return appStorage.get('userToken');
        },
        refreshUser: function(cb) {
          /**
           * FIXME: convert this to an ngResource call
           */
          $http.get('/users/me').then(function(response) {
            var serializedUser = angular.toJson(response.data.res.record);
            appStorage.set('user', serializedUser);
            cb(response.data.res.record);
          });
        },
        getUser: function() {
          var serialized = appStorage.get('user');
          if (serialized) {
            return angular.fromJson(serialized);
          } else {
            return {
              name: 'unknown'
            };
          }
        }
      }
    }
  ]);
