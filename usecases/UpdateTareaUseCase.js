class UpdateTareaUseCase{
    constructor(tareasRepository){
        this.tareasRepository = tareasRepository;
    }
    async execute(tarea){
        return await this.tareasRepository.update(tarea);
    }
}

module.exports = UpdateTareaUseCase;