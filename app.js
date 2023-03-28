const express = require('express')
const app = express()
const port = 5000
const db = require('./server');
const votesRoutes = require('./src/routes/votesRoutes');
const cors = require("cors")

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors("*"))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api', votesRoutes);


db.authenticate().then(() => {
  console.log('Database connected...');
}).catch(err => {
  console.log('Error: ' + err);
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})