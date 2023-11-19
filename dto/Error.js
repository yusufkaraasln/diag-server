

export default class Error {
    constructor(message, code) {
        this.message = message;
        this.code = code;
    }
    
    static badRequest(message) {
        return new Error(message, 400);
    }
    
    static unauthorized(message) {
        return new Error(message, 401);
    }
    
    static forbidden(message) {
        return new Error(message, 403);
    }
    
    static notFound(message) {
        return new Error(message, 404);
    }
    
    static conflict(message) {
        return new Error(message, 409);
    }
    
    static internal(message) {
        return new Error(message, 500);
    }
    }