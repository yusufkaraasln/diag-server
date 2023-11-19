export default class Result {
  constructor(success, message, data) {
    this.success = success;
    this.message = message;
    this.data = data;
  }

  static success(message, data) {
    return new Result(true, message, data);
  }

  static fail(message) {
    return new Result(false, message, null);
  }
}
