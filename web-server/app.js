const app = require('./server');
const port = 3000; 

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`); 
});