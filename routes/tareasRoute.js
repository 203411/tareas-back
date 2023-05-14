const express = require('express');
const router = express.Router();

const TareasController = require('../controllers/TareasController');
const TareasRepository = require('../adapters/TareasRepository');
const GetTareaListUseCase = require('../usecases/GetTareaListUseCase');
const CreateTareaUseCase = require('../usecases/CreateTareaUseCase');
const GetTareaByIdUseCase = require('../usecases/GetTareaByIdUseCase');
const UpdateTareaUseCase = require('../usecases/UpdateTareaUseCase');
const DeleteTareaUseCase = require('../usecases/DeleteTareaUseCase');

const tareasRepository = new TareasRepository();
const getTareaListUseCase = new GetTareaListUseCase(tareasRepository);
const createTareaUseCase = new CreateTareaUseCase(tareasRepository);
const getTareaByIdUseCase = new GetTareaByIdUseCase(tareasRepository);
const updateTareaUseCase = new UpdateTareaUseCase(tareasRepository);
const deleteTareaUseCase = new DeleteTareaUseCase(tareasRepository);

const tareasController = new TareasController(getTareaListUseCase, createTareaUseCase, getTareaByIdUseCase, updateTareaUseCase, deleteTareaUseCase);

router.get('/', tareasController.getAll.bind(tareasController));
router.get('/:id', tareasController.getById.bind(tareasController));
router.post('/', tareasController.create.bind(tareasController));
router.put('/', tareasController.update.bind(tareasController));
router.delete('/:id', tareasController.delete.bind(tareasController));

module.exports = router;