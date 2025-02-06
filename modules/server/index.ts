import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res)=>
{
     res.send(`Servicing App Build on ${process.env.BUILD_DATE}.`);
});

app.get('/test', (req, res)=>
  {
       res.send(`This is a new endpoint.`);
  });

// Endpoint to serve environment variables
app.get('/env', (req, res) => {
     res.json({
       BUILD_NUMBER: process.env.BUILD_NUMBER,
       GIT_COMMIT: process.env.GIT_COMMIT,
       BUILD_DATE: process.env.BUILD_DATE
     });
   });
// Health probe endpoint
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});
 app.listen(port, ()=>{
     console.log(
`Connected successfully on port ${port}`)
});