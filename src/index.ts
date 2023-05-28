import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/v1', routes);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
