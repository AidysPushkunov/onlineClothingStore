'use strict'


module.exports = (app) => {
    const passport = require('passport')
    const usersController = require('./../Controller/UsersController.js');
    const productsController = require('./../Controller/ProductController.js');

    app
        .route('/api/users')
        .get(passport.authenticate('jwt', { session: false }),  usersController.getAllUsers);

    app
        .route('/api/auth/signup')
        .post(usersController.signup);

    app
        .route('/api/auth/signin')
        .post(usersController.signin);

    app
        .route('/api/auth/logout')
        .post(usersController.logout);

    app
        .route('/api/product/getproducts')
        .get(productsController.getProducts);
}