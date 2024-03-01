require('dotenv').config()
const express = require("express");
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');
const bcrypt = require('bcrypt');
const saltRounds = 10;

//passport is a package that enables the google login procedure.
//We create a new GoogleStrategy object that takes in our clientID, secret, and a callback url.
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback'
  },
  //This async handler tries to either find a new user, or create a new user. It will print if authentication fails. 
  async (accessToken, refreshToken, profile, done) => {
    try {
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        return done(null, existingUser);
      }
      try {
        //here is where we should put email verification?
      } catch (err) {
        done(err, null);
      }
      //creates a new user from google.profile fields. I need to make hashes for username & password
      const newUser = await new User({
        googleId: profile.id,
        email: profile.emails[0].value,
        name: {
            first: profile.name.givenName,
            last: profile.name.familyName
        },
      }).save();
      done(null, newUser);
    } catch (err) {
        console.log('Unsuccessful authentication');
      done(err, null);
    }
  }
));


passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
      .then(user => {
        done(null, user);
      });
  });