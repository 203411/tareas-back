const Tarea = require('../entities/Tarea');

class CreateTareaUseCase {
    constructor(tareasRepository) {
        this.tareasRepository = tareasRepository;
    }

    async execute(tarea) {
        const newTarea = new Tarea(null, tarea.titulo, tarea.descripcion, tarea.estado);
        return await this.tareasRepository.create(newTarea);
    }
}

module.exports = CreateTareaUseCase;