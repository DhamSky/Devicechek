const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 3000; // API akan berjalan di port 3000

// Mengizinkan frontend mengakses API ini
app.use(cors());
app.use(express.json());

// Kredensial PostgreSQL milikmu
const pool = new Pool({
  user: 'idham',
  host: '192.168.88.111',
  database: 'devicecheck',
  password: 'idham1234',
  port: 5432,
});

// Endpoint untuk mengambil data perangkat
app.get('/api/devices', async (req, res) => {
  try {
    // Ganti 'nama_tabel_kamu' dengan tabel asli di database devicecheck
    const result = await pool.query('SELECT * FROM nama_tabel_kamu ORDER BY id DESC'); 
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server database bermasalah');
  }
});

app.listen(port, () => {
  console.log(`Backend API aman berjalan di http://localhost:${port}`);
});
