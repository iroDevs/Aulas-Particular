export default class UserNotFoundError extends Error {
    constructor() {
        super(`Usuario não encontrado`);

    }
}
