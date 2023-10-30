import express from 'express';

const app = express();

app.get('/ping', (req, res) => {
  res.json({
    success: true,
    message: 'pong',
    data: null
  });
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
