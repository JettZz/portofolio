const db = require('../config/db');

// 1. GET ALL - Mengambil semua data sertifikat (diurutkan dari tanggal terbaru)
const getAllTestimoni = async () => {
    const [rows] = await db.query('SELECT * FROM testimoni ORDER BY rating DESC');
    return rows;
};

// 2. GET BY ID - Mengambil 1 data sertifikat berdasarkan ID
const getTestimoniById = async (id) => {
    const [rows] = await db.query('SELECT * FROM testimoni WHERE id = ?', [id]);
    return rows[0];
};

// 3. CREATE - Menambahkan sertifikat baru ke database
const createTestimoni = async (data) => {
    const { name, role, company, message, avatar_url, rating } = data;
    const [result] = await db.query(
        'INSERT INTO testimoni (name, role, company, message, avatar_url, rating) VALUES (?, ?, ?, ?, ?, ?)',
        [name, role, company || null, message, avatar_url || null, rating]
    );
    return result;
};

// 4. UPDATE - Memperbarui data sertifikat berdasarkan ID
const updateTestimoni = async (id, data) => {
    const { name, role, company, message, avatar_url, rating } = data;
    const [result] = await db.query(
        'UPDATE testimoni SET name = ?, role = ?, company = ?, message = ?, avatar_url = ?, rating = ? WHERE id = ?',
        [name, role, company || null, message, avatar_url || null, rating, id]
    );
    return result;
};

// 5. DELETE - Menghapus sertifikat dari database berdasarkan ID
const deleteTestimoni = async (id) => {
    const [result] = await db.query('DELETE FROM testimoni WHERE id = ?', [id]);
    return result;
};

module.exports = {
    getAllTestimoni,
    getTestimoniById,
    createTestimoni,
    updateTestimoni,
    deleteTestimoni
};