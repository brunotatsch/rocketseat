

class ErrorNlw extends Error {

  public readonly code: number;
 
  constructor(code: number = 400, message: string) {
    super(message);
    
    Object.setPrototypeOf(this, ErrorNlw.prototype);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ErrorNlw)
    }
    
    this.code = code;
  }
}

export { ErrorNlw }