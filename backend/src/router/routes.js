const { Router } = require('express');
const searchController = require('../controllers/searchController');

const searchRoute = Router();

searchRoute.get('/all', searchController.getAllProcess);
searchRoute.get('/:advogado_id', searchController.getProcessosAdvogadoID);
searchRoute.get('/', searchController.getProcessosAdvogadoName)

module.exports = searchRoute;
