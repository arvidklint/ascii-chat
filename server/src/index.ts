import Express from 'express';

const app = Express();

const port = 4201;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(4201), () => console.log(`Game server listening on port ${port}!`);

export default app;
