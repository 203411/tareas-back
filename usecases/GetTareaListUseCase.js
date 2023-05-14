class GetTareaListUseCase {
    constructor(tareasRepository) {
        this.tareasRepository = tareasRepository;
    }

    execute() {
        return this.tareasRepository.getAll();
    }
}

module.exports = GetTareaListUseCase;