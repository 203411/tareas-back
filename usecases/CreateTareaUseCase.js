const Tarea = require('../entities/Tarea');

class CreateTareaUseCase {
    constructor(tareasRepository) {
        this.tareasRepository = tareasRepository;
    }

    async execute(tarea) {
        // const newTarea = new Tarea(null, tarea.titulo, tarea.descripcion, tarea.estado);
        const newsTareas = [];
        for (let i = 0; i < tarea.length; i++) {
            const newTarea = new Tarea(null, tarea[i].titulo, tarea[i].descripcion, tarea[i].estado);
            newsTareas.push(newTarea);
        }
        return await this.tareasRepository.create(newsTareas);
    }
}

module.exports = CreateTareaUseCase;