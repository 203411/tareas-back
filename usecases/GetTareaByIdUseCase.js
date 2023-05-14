class GetTareaByIdUseCase{
    constructor(tareasRepository){
        this.tareasRepository = tareasRepository;
    }
    async execute(id){
        const tarea = await this.tareasRepository.getById(id);
        return tarea;
    }
}

module.exports = GetTareaByIdUseCase;