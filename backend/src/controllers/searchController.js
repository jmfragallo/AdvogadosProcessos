const { searchService } = require('../services/index');

const getAllProcess = async (req, res) => {
    try {
        const search = await searchService.getAllProcess();
        res.status(200).json(search);
    } catch (error) {
        console.error('Erro ao obter todos os processos:', error);
        res.status(500).json({ error: 'Erro ao obter todos os processos' });
    }
}

const getProcessosAdvogadoID = async (req, res) => {
    const advogado_id = req.params.advogado_id; 
    
    try {
        const result = await searchService.getProcessosAdvogadoID(advogado_id);
        res.status(200).json(result);
    } catch (error) {
        console.error('Erro ao obter processos do advogado:', error);
        res.status(500).json({ error: 'Erro ao obter processos do advogado' });
    }
}

const getProcessosAdvogadoName = async (req, res) => {
    const name = req.params.name;
    
    try {
        const result = await searchService.getProcessosAdvogadoName(name);
        res.status(200).json(result);
    } catch (error) {
        console.error('Erro ao obter processos do advogado:', error);
        res.status(500).json({ error: 'Erro ao obter processos do advogado' });
    }
}

module.exports = {
    getAllProcess,
    getProcessosAdvogadoID,
    getProcessosAdvogadoName
};
