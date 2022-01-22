import { config as envSetup } from 'dotenv';
import express from 'express';
import cors from 'cors';
import path from 'path';

envSetup();

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (_req, res) => {
	app.use(express.static(path.join(__dirname, '..', 'client')));
	res.sendFile(path.join(__dirname, '..', 'client', 'src', 'index.html'));
});

app.listen(process.env.PORT || 5000, () => {
	console.log('Server listening on port', process.env.PORT || 5000);
});
