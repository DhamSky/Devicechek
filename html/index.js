const { Pool } = require('pg');

// Konfigurasi koneksi ke server PostgreSQL
const pool = new Pool({
  user: 'idham',
  host: '192.168.88.111', // Ubah ke IP LXC Postgres nanti
  database: 'devicecheck',
  password: 'idham1234',
  port: 5432, // Port default Postgres
});

// Test Koneksi
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Gagal terkoneksi ke database:', err.stack);
  }
  console.log('Koneksi ke PostgreSQL berhasil dibangun!');
  release();
});
