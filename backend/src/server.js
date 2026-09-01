const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded ({ extended : true }));

app.get ('/', (req, res) => {
    res.status(200).json({
        success : true,
        message : 'Selamat datang',
        version : '1.0.0'
    });
});

app.get ('/api/status', (req, res) => {
    res.status(200).json({
        success : true,
        message: 'Server dalam keadaan sehat dan aktif',
        timestamp: new Date().toISOString()
    });
});

app.get ('/api/biodata', (req, res) => {
    res.status(200).json({
        success : true,
        "data": {
            "nama": "Jedidah Excellent N",
            "kelas": "XI RPL 1",
            "cita_cita": "Fullstack Developer",
             "hobi": "Coding & Gaming"
  }
    });
});

app.use((req, res) => {
    res.status(404).json({
        success : false,
        message : 'Endpoint tidak ditemukan'
    });
});

app.listen(PORT, () => {
    console.log('==========================')
    console.log(`Server Berjalan di http://localhost:${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`)
});