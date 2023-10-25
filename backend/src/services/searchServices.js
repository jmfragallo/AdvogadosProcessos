const { searchModel } = require('../models/index');

const getAllProcess = async () => {
    const process = await searchModel.getAllProcess();
    return process;
}

const getProcessosAdvogadoID = async (advogado_id) => {
    const result = await searchModel.GetProcessosAdvogadoID(advogado_id);
    return result;
}

const getProcessosAdvogadoName = async (name) => {
    const result = await searchModel.GetProcessosAdvogadoName(name);
    return result;
}


module.exports = {
    getAllProcess,
    getProcessosAdvogadoID,
    getProcessosAdvogadoName
};
