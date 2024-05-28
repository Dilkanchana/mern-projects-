const express = require('express');
const dotenv = require('dotenv');
const http = require('http');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const chatRoutes = require('./routes/chatRoutes');
const socketSetup = require('./socket');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

dotenv.config();

connectDB();

const app = express();
const server = http.createServer(app);

app.use(express.json());

app.use('/api/users', authRoutes);
app.use('/api/messages', chatRoutes);

app.use(notFound);
app.use(errorHandler);

socketSetup(server);

const PORT = process.env.PORT || 5000;

server.listen(PORT, console.log(`Server running on port ${PORT}`));

