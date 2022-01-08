const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const cors = require('cors')
// const bodyParser = require('body-parser');  /* deprecated */

// for parsing multipart/form-data
// const multer = require('multer') 
// const upload = multer() 

// app.post('/profile', upload.array(), function (req, res, next) {
//     console.log(req.body)
//     res.json(req.body)
// })

app.use(express.json()) // for parsing application/json /* bodyParser.json() is deprecated */
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded /* bodyParser.urlencoded() is deprecated */

app.use(cors())

app.get('/', (req, res) => {
    res.json({'message': 'ok'});
})

require("./routes/programmingLanguages")(app);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({'message': err.message});

  return;
});


app.listen(port, () => {
    console.log(`Server started, listening port: ${port}`)
})