import express from 'express';
import { SERVER_PORT } from './Config/config.js';
import routes from './routes/router.js';
import generalError from './Middlewares/generalError.js';

const app = express();

app.use(express.json());    
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.use(generalError);

app.listen(SERVER_PORT, () => {console.log(`Server corriendo: ${SERVER_PORT}`)});