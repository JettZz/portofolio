const db = require('../config/db')

const getAllSkills = async () => {
    const [rows] = await db.query('SELECT * FROM skills ORDER BY category, name');
    return rows
};

const getSkillById = async (id) => {
    const [rows] = await db.query('SELECT * FROM skills WHERE id = ?', [id]);
    return rows[0];
};

const createSkill = async (data) => {
    const { name, category, percentage, icon_url} = data;
    const [result] = await db.query(
        `INSERT INTO skills (name, category, percentage, icon_url) VALUES (?, ?, ?, ?)`,
        [name, category || 'Other', percentage || 0, icon_url]
    );
    return result;
};

const updateSkill = async (id, data) => {
    const { name, category, percentage, icon_url} = data;
    const [result] = await db.query(
        'UPDATE skills SET name = ?, category = ?, percentage = ?, icon_url= ? WHERE id = ?',
        [name, category, percentage, icon_url, id]
    );
    return result;
};

const deleteSkill = async (id) => {
    const [result] = await db.query('DELETE FROM skills WHERE id = ?', [id]);
    return result;
};

module.exports = { getAllSkills, getSkillById, createSkill, updateSkill, deleteSkill };