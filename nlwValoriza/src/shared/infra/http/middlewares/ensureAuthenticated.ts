import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
};

function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

  // Receber o Token
  const authToken = request.headers.authorization;

  if (!authToken){
    return response.status(401).end();
  }  
  // retira o Bearen
  const [,token] = authToken.split(" ");
  
  // Validar o Token
  try {
    const { sub } = verify(token,"c4a61b320a19843087ff3f887270dc7f") as IPayload;
    
    // Recuperar informações do usuário
    request.user_id = sub;
    //console.log(request.user_id);
    return next();

  }catch(err) {
    return response.status(401).end();
  }
  

  

};

export { ensureAuthenticated };