/**
 * EXPRESS PASSPORT INTEGRATION FOR 2-FA
 */


const express = require('express');
const session = require('express-session');
const passport = require('passport');
const { Strategy: GoogleStrategy } = require('passport-google-oauth20');

const app = express();
const port = 3000;

// Configure Passport session management
app.use(session({
  secret: 'your_session_secret',
  resave: false,
  saveUninitialized: true,
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Define Google OAuth 2.0 strategy
passport.use(new GoogleStrategy({
  clientID: 'your_client_id',
  clientSecret: 'your_client_secret',
  callbackURL: 'http://localhost:3000/auth/google/callback',
}, (accessToken, refreshToken, profile, done) => {
  // This function will be called after the user grants permission and returns control to your application
  // You can use the access token to make authenticated requests to the Gmail API
  // For example:
  // const gmail = google.gmail({ version: 'v1', auth: accessToken });
  // const response = await gmail.users.messages.list({ userId: 'me' });
  return done(null, profile);
}));

// Serialize user object into the session
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user object from the session
passport.deserializeUser((obj, done) => {
  done(null, obj);
});

// Define route for initiating OAuth 2.0 authentication
app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email'],
}));

// Define route for handling OAuth 2.0 callback
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
  // Successful authentication, redirect to home page or any other route
  res.redirect('/');
});

// Define route for logging out
app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// Define middleware to protect routes that require authentication
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

// Example protected route
app.get('/', ensureAuthenticated, (req, res) => {
  res.send('You are authenticated!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
