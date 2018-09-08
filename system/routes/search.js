var mongoose = require('mongoose');
var User = mongoose.model('User');

/**
 * Init the controller
 */
module.exports = function(System) {

  var routes = [];
  var json = System.plugins.JSON;
  
  routes.push({
    method: 'get',
    path: '/search/:keyword',
    authorized: true,
    handler: function(req, res) {
      var keyword = req.param('keyword');
      User
      .find({name: new RegExp(keyword, 'ig')}, null, {sort: {name: 1}})
        .lean()
        .then((items) => {
          json.happy({ items: items }, res);
        })
        .catch((err) => {
          json.unhappy(err, res);
        });
    }
  });
  return routes;
};
