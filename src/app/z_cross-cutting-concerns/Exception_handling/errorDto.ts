export class ErrorDto{
  userMessage: string;
  internalMessage: string;
  errorCode: number;
  moreInfoUrl: string;
  occuredOn:string;
  
  toString() {
    return JSON.stringify(this);
  }
}