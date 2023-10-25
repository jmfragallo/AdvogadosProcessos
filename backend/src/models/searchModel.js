const conn = require('./connection');

const getAllProcess = async () => {
  const [result] = await conn.execute(`SELECT * 
  FROM escritorio.processos`);
  return result;
}

const getProcessosAdvogadoID = async (advogado_id) => {
  const [result] = await conn.execute(`SELECT DISTINCT cliente_id, numero_processo, proximo_prazo, arquivo 
  FROM pessoas 
  INNER JOIN processos 
  ON pessoas.id = processos.advogado_id 
  WHERE pessoas.id = ${advogado_id};`);
  return result
}

const getProcessosAdvogadoName = async () => {
    const [result] = await conn.execute(`SELECT DISTINCT advogado_id, nome 
    FROM pessoas 
    INNER JOIN processos ON pessoas.id = processos.advogado_id;
    `);
    return result
  }

module.exports = {
  getAllProcess,
  getProcessosAdvogadoID,
  getProcessosAdvogadoName,
};
