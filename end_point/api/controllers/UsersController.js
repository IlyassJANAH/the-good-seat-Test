let axios = require("axios") ;
let jwt = require('jsonwebtoken');


/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {

  /**
   * `UserController.signup()`
   */
  signup: function (req, res) {

    console.log("teeest")
    // Attempt to signup a user using the provided parameters

    axios({
      url: 'https://staging.api.external.thegoodseat.fr/registeruser',
      method: 'post',
      data: {
        email: req.param('email'),
        firstName: req.param('firstName'), // an error in the good seat documentation
        lastName: req.param('lastName'),// an error in the good seat documentation
        birthDate: req.param('birthDate'),
        phoneNumber: req.param('phoneNumber'),
        isPhoneNumberVerified: true,
        country: req.param('country'),
      },
      headers: {
        'x-api-key': '8k5jqE35yN3yVUaxFP824FOq8oJeLyr3bVyiZmig',
        'Content-Type' : 'application/json'
      }
    }).then(function (response) {
      // handle success
      console.log(response.data);
      res.send(response.data);
    })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  },

  /**
   * `UserController.login()`
   */

  login: function (req, res) {


    axios({
      url: 'https://staging.api.external.thegoodseat.fr/loginuser',
      method: 'post',
      data: {
        email: req.param('email'),
        phoneNumber: req.param('phoneNumber'),
      },
      headers: {
        'x-api-key': '8k5jqE35yN3yVUaxFP824FOq8oJeLyr3bVyiZmig',
        'Content-Type' : 'application/json'
      }
    }).then(function (response) {
      // handle success
      console.log(response.data);
      res.send(response.data);
    })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }
};

