const express = require('express');
const cors = require('cors');
const jobRoutes = require('./src/routes/jobRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/v1/jobs', jobRoutes);

app.listen(PORT, () => {
    console.log(` Servidor backend corriendo en http://localhost:${PORT}`);
});