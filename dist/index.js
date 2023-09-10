import express from 'express';
import bodyParser from 'body-parser';
import { elevatorRoutes } from './routes/elevatorRoutes'; // Import routes
const app = express();
const PORT = 3000;
app.use(bodyParser.json());
app.use('/api', elevatorRoutes); // Mount the routes
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map