require('dotenv').config()
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';

import { pctController } from './controller'

const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('tiny'));

// API
app.use(pctController);

const  portPctApi = process.env.PCT_API_PORT || 3005;

app.listen(portPctApi, () => {
  console.log(`Started successfully server at port ${portPctApi}`);
  
});
