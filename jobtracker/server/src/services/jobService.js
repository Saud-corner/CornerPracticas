let jobs = [];
let idCounter = 1;

const getAllJobs = () => jobs;

const createJob = (jobData) => {
    const newJob = { id: idCounter++, ...jobData, createdAt: new Date().toISOString() };
    jobs.push(newJob);
    return newJob;
};

const updateJob = (id, jobData) => {
    const index = jobs.findIndex(j => j.id === Number(id));
    if (index === -1) return null;
    jobs[index] = { ...jobs[index], ...jobData, updatedAt: new Date().toISOString() };
    return jobs[index];
};

const deleteJob = (id) => {
    const index = jobs.findIndex(j => j.id === Number(id));
    if (index === -1) return false;
    jobs.splice(index, 1);
    return true;
};

module.exports = { getAllJobs, createJob, updateJob, deleteJob };