/**
 * Users.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    email: {
      type: 'string',
      required: true
    },
    phoneNumber: {
      type: 'string',
      required: true
    }
  },

  /**
   * Create a new user using the provided inputs,
   *
   *
   * @param  {Object}   inputs
   *                     • email                    {String}
   *                     • firstname                {String}
   *                     • lastname                 {String}
   *                     • birthDate                {String}
   *                     • phoneNumber              {String}
   *                     • isPhoneNumberVerified    {String} {default value : true}
   *                     • country                  {String}
   * @param  {Function} cb
   */

  signup: function (inputs, cb) {
    // Create a user
    Users.create({
      email:                  inputs.email,
      firstname:              inputs.firstname,
      lastname:               inputs.lastname,
      birthDate:              inputs.birthDate,
      phoneNumber:            inputs.phoneNumber,
      isPhoneNumberVerified:  inputs.isPhoneNumberVerified,
      country:                inputs.country,
    })

  },



  /*/!**
   * Check validness of a login using the provided inputs.
   * But encrypt the password first.
   *
   * @param  {Object}   inputs
   *                     • email    {String}
   *                     • password {String}
   * @param  {Function} cb
   *!/

  attemptLogin: function (inputs, cb) {
    // Create a user
    User.findOne({
      email: inputs.email,
      // TODO: But encrypt the password first
      password: inputs.password
    })
      .exec(cb);
  }*/
};

