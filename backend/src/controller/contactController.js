const Contact =require('../models/contactModel');

const getAll = async (req, res) => {
    try {
        const contacts = await Contact.getAllContact();
        res.json({ success : true, data : contacts})
    } catch (err){
        console.error(err);
        res.status(500).json({ success : false, message : 'Server error'})
    };
};

const getById = async (req, res) => {
    try{ 
        const contact = await Contact.getContactById(req.params.id);
        if (!contact) return res.status(404).json({success: false, message : 'Not Found'});
        res.json({success : true, data: contact})
    } catch (err) {
        console.error(err);
        res.status(500).json({ success : false, message : 'Server error'})
    };
};

const create = async (req, res) => {
    try {
        const result = await Contact.createContact(req.body);
        res.status(200).json({
            success: true,
            message : 'Message saved',
            data : { id : result.insertId, ...req.body}
        })
    } catch (err) {
        console.error(err);
        res.status(400).json({ success: false, message : 'Invalid Data'})
    }
};

const remove = async (req, res) => {
    try {
        const result = await Contact.deleteContact(req.params.id);
        if (result.affectedRows === 0 )
            return res.status(404).json({ success: false, message : 'Not Found'});
        res.json({ success: true, message: 'Message Deleted'});
    } catch (err) {
        console.error(err)
        res.status(500).json({ success: false, message : 'Server error'})
    }
}

module.exports = { getAll, getById, create, remove}