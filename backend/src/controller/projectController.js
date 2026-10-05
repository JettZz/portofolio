const projectModel = require('../models/projectModel');

const getAllprojects = async (req, res) => {
    try {
        const projects = await projectModel.getAllprojects();

        res.status(200).json({
            succes : true,
            message : 'Berhasil mengambil semua data projek',
            total : projects.length,
            data : projects
        })
    } catch (error) {
        console.error('Error getAllProjects:', error.messages);
        res.status(500).json({
            succes : false,
            message : 'Terjadi kesalahan pada server',
            error : error.message
        })
    }
}

const getProjectById = async (req, res) => {
    try {
        const { id } = req.params
        const projects = await projectModel.getProjectById(id);

        if(!project) {
            return res.status(404).json({
                success : false,
                message: `Proyek dengan ID ${id} tidak ditemukan`
            })
        }

        res.status(200).json({
            success : true,
            message : 'Berhasil mengambil data projek',
            data : project
        })
    } catch (error) {
        console.error('Error getProjectById:', error.message);
        res.status(500).json({
            success : false,
            message : 'Terjadi kesalahan pada server',
            error : error.message
        });
    }
}

const createProject = async (req, res) => {
    try {
        const data = req.body ;

        if (!data.title) {
            return res.status(400).json({
                success : false,
                message : 'Kolom "title" wajib diisi'
            })
        }

        const result = await projectModel.createProject(data);

        res.status(201).json({
            success : true,
            message : 'Proyek baru berhasil ditambahkan!',
            data : { id: result.insertId}
        })
    } catch (error) {
        console.error('Error createProject:', error.message)
        res.status(500).json({
            success : false,
            message : 'Terjadi kesalahan pada server',
            error : error.message
        })
    }
}

const updateProject = async (req, res) => {
    try {
        const {id} = req.params;
        const data = req.body;

        if(!data.title) {
            return res.status(400).json({
                success: false,
                message: "Kolom 'title' wajib diisi"
            })
        }

        const result = await projectModel.updateProject(id, data);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: `Proyek dengan ID ${id} tidak ditemukan`
            });
        }

        res.status(200).json({
            success: true,
            message: `Data proyek berhasil di perbarui`
        })
    } catch (error) {
        console.error(`Error updateProject :`, error.message)
        res.status(500).json({
            success: false,
            message:'Terjadi kesalahan pada server',
            error: error.message
        })
    }
}

const deleteProject = async (req, res) => {
    try{
        const { id } = req.params;
        const result = await projectModel.deleteProject(id)


        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: `Proyek dengan ID ${id} tidak ditemukan`
            });
        }

        res.status(200).json({
            success: true,
            message: 'Proyek berhasil di hapus.'
        })
    } catch (error) {
        console.error(`Error deleteProject:`, error.message)
        res.status(500).json({
            success: false,
            message: 'Terjadi kesalahan pada server',
            error: error.message
        })
    }
}

module.exports = {
    getAllprojects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject
}