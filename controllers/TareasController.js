class TareasController {
    constructor(getTareaListUseCase, createTareaUseCase, getTareaByIdUseCase, updateTareaUseCase, deleteTareaUseCase, updateAllTareaUseCase, deleteAllTareaUseCase) {
        this.getTareaListUseCase = getTareaListUseCase;
        this.createTareaUseCase = createTareaUseCase;
        this.getTareaByIdUseCase = getTareaByIdUseCase;
        this.updateTareaUseCase = updateTareaUseCase;
        this.deleteTareaUseCase = deleteTareaUseCase;
        this.updateAllTareaUseCase = updateAllTareaUseCase;
        this.deleteAllTareaUseCase = deleteAllTareaUseCase;
    }

    async getAll(req, res, next) {
        try{
            const tareas = await this.getTareaListUseCase.execute();
            res.status(200).json(tareas);
        }catch(error){
            res.status(500).json({error: error.message});
            // next(error);
        }
    }

    async getById(req, res, next) {
        try{
            console.log(req.params.id);
            const id = req.params.id;
            console.log(id);
            const tarea = await this.getTareaByIdUseCase.execute(id);
            res.status(200).json(tarea);
        }catch(error){
            res.status(500).json({error: error.message});
            // next(error);
        }
    }

    async create(req, res, next) {
        try{
            console.log(req.body);
            const {titulo, descripcion, estado} = req.body;
            console.log(titulo, descripcion, estado);
            const newTarea = {titulo, descripcion, estado};
            const tarea = await this.createTareaUseCase.execute(newTarea);
            res.status(201).json(tarea);
        }catch(error){
            res.status(500).json({error: error.message});
            // next(error);
        }
    }

    async update(req, res, next) {
        try{
            const tarea = await this.updateTareaUseCase.execute(req.body);
            res.status(200).json(tarea);
        }catch(error){
            res.status(500).json({error: error.message});
            // next(error);
        }
    }

    async delete(req, res, next) {
        try{
            await this.deleteTareaUseCase.execute(req.params.id);
            res.status(204).json();
        }catch(error){
            res.status(500).json({error: error.message});
            // next(error);
        }
    }

    async updateAll(req, res, next) {
        try{
            const array = req.body;
            const tareas = await this.updateAllTareaUseCase.execute(array);
            res.status(200).json(tareas);
        }catch(error){
            res.status(500).json({error: error.message});
            // next(error);
        }
    }

    async deleteAll(req, res, next) {
        try{
            const array = req.body.primary_keys;
            const tareas = await this.deleteAllTareaUseCase.execute(array);
            res.status(200).json(tareas);
        }catch(error){
            res.status(500).json({error: error.message});
            // next(error);
        }
    }
}

module.exports = TareasController;