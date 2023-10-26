const { searchModel } = require('../models/index');

const getAllProcess = async () => {
    const process = await searchModel.getAllProcess();
    return process;
}

const getProcessosAdvogadoID = async (advogado_id) => {
    const result = await searchModel.getProcessosAdvogadoID(advogado_id);
    return result;
}

const getProcessosAdvogadoName = async (name) => {
    const result = await searchModel.getProcessosAdvogadoName(name);
    return result;
}


module.exports = {
    getAllProcess,
    getProcessosAdvogadoID,
    getProcessosAdvogadoName
};
