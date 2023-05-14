require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const logger = require("morgan");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const flash = require("connect-flash");
// const authenticate = require("./authenticate");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const passportLocalMongoose = require("passport-local-mongoose");
//const findOrCreate = require("mongoose-findorcreate");
const PORT = process.env.PORT;
const userRouter = require("./routes/users")
const uploadRoute = require("./routes/uploadRoutes")
const commentRoutes = require("./routes/commentRouter");
const resetRoutes = require("./routes/resetPasswordRouter");
const postRouter = require("./routes/postRouter");

const app = express();

//INITIALIZE
app.use(logger("dev"));
app.use(express.json());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(session({
    name: "session-id",
    secret: "Thisisourlittlesecret",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(
    cors({
         origin: "http://127.0.0.1:5173", // allow to server to accept request from different origin
         methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
         credentials: true, // allow session cookie from browser to pass through
   })
);

app.use("", userRouter);
app.use("/upload", uploadRoute)
app.use("", postRouter);
app.use("/posts", commentRoutes);
app.use("", resetRoutes);

// displaying frontend
if (process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '../frontend/dist')))
    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname, "../", "frontend", "dist", "index.html"))
    })
}else{
    app.get('/', (req, res)=>{
        res.send('please set to production')
    })
}

//CONNECTIONS
mongoose.set('strictQuery', true);
const url = process.env.MONGODB_URL;
const connect = mongoose.connect(url, {useNewUrlParser: true});
connect
.then(() => {
    console.log("connected to db succesfully");
})
.catch((err) => {
    console.log(err.message);
});

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:8000/auth/google/nuesa",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
  },
   function(accessToken, refreshToken, profile, cb) {
    console.log(profile);
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
  ));
  
  app.listen(PORT, () => {
      console.log(`server is running at http://localhost:${PORT}`);
  });
