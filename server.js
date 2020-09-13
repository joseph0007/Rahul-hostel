const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');
const { data } = require('autoprefixer');

//reading config.env file
dotenv.config({ path: `${__dirname}/config.env` });

//reading database info from environment variables
// let database = process.env.DATABASE;
// const dbpassword = process.env.DATABASE_PASSWORD;

// database = database.replace('<PASSWORD>', dbpassword);

//mongoose setup
mongoose
  .connect(
    'mongodb+srv://joseph:g7IoCHkZ0n4tSsgz@cluster0.l0y2z.mongodb.net/natours?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log('connection successful');
  })
  .catch((err) => console.log('conn failed' + err));

app.listen(process.env.PORT, (err) => {
  console.log('connection established');
});
