import express from 'express';

const app: any = express();
const port: number = 6540;

app.listen(port, () => {
  console.info(`App listening at http://localhost:${port}`);
});
