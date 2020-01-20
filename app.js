const express = require('express')
const exphbs = require('express-handlebars')
const hbs = require('hbs')
const bodyParser =  require('body-parser')
const path = require('path')

// database 
const db = require('./config/database.js')

// test db
db.authenticate().then(() => console.log('Database connected...')).catch((err) => console.log('Error: '+ err))
const app = express()

// handlebars
/* app.engine('handlebars', exphbs({ 
    defaultLayout: 'main'
 }))
app.set('view engine', 'handlebars')

 */

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, './public')
const viewsPath = path.join(__dirname, './templates/views')
const partialsPath = path.join(__dirname, './templates/partials')

// Setup handlebars engie and views locations
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)


//bpdy parser
app.use(bodyParser.urlencoded({extended: false}))

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))


app.get('/', (req,res) => {
    res.render('index')
})

// gigs routes
app.use('/gigs', require('./routes/gigs'))

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log('Server started on port '+PORT))

