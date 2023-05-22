class UpdateAllTareaUseCase {
    constructor(tareaRepository) {
        this.tareaRepository = tareaRepository;
    }

    async execute(array) {
        return await this.tareaRepository.updateAll(array);
    }
}

module.exports = UpdateAllTareaUseCase;