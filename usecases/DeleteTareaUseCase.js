class DeleteTareaUseCase{
    constructor(tareasRepository){
        this.tareasRepository = tareasRepository;
    }

    async execute(id){
        return await this.tareasRepository.delete(id);
    }
}

module.exports = DeleteTareaUseCase;
