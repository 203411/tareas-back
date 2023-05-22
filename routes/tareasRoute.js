const express = require('express');
const router = express.Router();

const TareasController = require('../controllers/TareasController');
const TareasRepository = require('../adapters/TareasRepository');
const GetTareaListUseCase = require('../usecases/GetTareaListUseCase');
const CreateTareaUseCase = require('../usecases/CreateTareaUseCase');
const GetTareaByIdUseCase = require('../usecases/GetTareaByIdUseCase');
const UpdateTareaUseCase = require('../usecases/UpdateTareaUseCase');
const DeleteTareaUseCase = require('../usecases/DeleteTareaUseCase');
const UpdateAllTareaUseCase = require('../usecases/UpdateAllTareaUseCase');
const DeleteAllTareaUseCase = require('../usecases/DeleteAllTareaUseCase');

const tareasRepository = new TareasRepository();
const getTareaListUseCase = new GetTareaListUseCase(tareasRepository);
const createTareaUseCase = new CreateTareaUseCase(tareasRepository);
const getTareaByIdUseCase = new GetTareaByIdUseCase(tareasRepository);
const updateTareaUseCase = new UpdateTareaUseCase(tareasRepository);
const deleteTareaUseCase = new DeleteTareaUseCase(tareasRepository);
const updateAllTareaUseCase = new UpdateAllTareaUseCase(tareasRepository);
const deleteAllTareaUseCase = new DeleteAllTareaUseCase(tareasRepository);

const tareasController = new TareasController(getTareaListUseCase, createTareaUseCase, getTareaByIdUseCase, updateTareaUseCase, deleteTareaUseCase, updateAllTareaUseCase, deleteAllTareaUseCase);

router.get('/', tareasController.getAll.bind(tareasController));
router.get('/:id', tareasController.getById.bind(tareasController));
router.post('/', tareasController.create.bind(tareasController));
router.put('/', tareasController.update.bind(tareasController));
router.delete('/multiple', tareasController.deleteAll.bind(tareasController));
router.delete('/:id', tareasController.delete.bind(tareasController));
router.put('/multiple', tareasController.updateAll.bind(tareasController));


module.exports = router;