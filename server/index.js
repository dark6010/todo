const { loadNuxt, build } = require('nuxt')

const app = require('express')()
const isDev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000
var todo = require('../routes/todoRoutes');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var mongoDB = 'mongodb+srv://admin:admin@cluster0.uabxi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:dd'));

async function start () {
  // We get Nuxt instance
  const nuxt = await loadNuxt(isDev ? 'dev' : 'start')
  
  // Render every route with Nuxt
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use('/api', todo);
  app.use(nuxt.render)

  // Build only in dev mode with hot-reloading
  if (isDev) {
    build(nuxt)
  }
  // Listen the server
  app.listen(port, '0.0.0.0')
  console.log('Server listening on `localhost:' + port + '`.')
}

start()
