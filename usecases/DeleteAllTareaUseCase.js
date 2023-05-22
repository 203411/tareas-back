class DeleteAllTareaUseCase{
    constructor(tareasRepository){
        this.tareasRepository = tareasRepository;
    }
    async execute(array){
        return await this.tareasRepository.deleteAll(array);
    }
}

module.exports = DeleteAllTareaUseCase;