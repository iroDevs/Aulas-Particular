export default class UserArlerdyExist extends Error {
    constructor() {
        super(`Usuario já existe com este email`);

    }
}
