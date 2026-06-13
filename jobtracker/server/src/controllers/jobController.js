const jobService = require('../services/jobService');

const getJobs = (req, res) => {
    res.status(200).json(jobService.getAllJobs());
};

const createJob = (req, res) => {
    const { empresa, puesto, estado } = req.body;
    
    if (!empresa || !puesto || !estado) {
        return res.status(400).json({ error: "Faltan datos: empresa, puesto o estado." });
    }
    res.status(201).json(jobService.createJob(req.body));
};

const updateJob = (req, res) => {
    const updatedJob = jobService.updateJob(req.params.id, req.body);
    if (!updatedJob) return res.status(404).json({ error: "No encontrado." });
    res.status(200).json(updatedJob);
};

const deleteJob = (req, res) => {
    const success = jobService.deleteJob(req.params.id);
    if (!success) return res.status(404).json({ error: "No encontrado." });
    res.status(204).send();
};

module.exports = { getJobs, createJob, updateJob, deleteJob };