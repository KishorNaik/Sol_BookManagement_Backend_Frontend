import { ValidationChain } from "express-validator";
import IRequest from "../../../Frameworks/MediatR/Core/Request/IRequest";
import IRequestHandler from "../../../Frameworks/MediatR/Core/Request/IRequestHandler";
import BookValidationAbstract from "./Abstract/BookValidationAbstract";

export class RemoveBookValidation implements IRequest<ValidationChain[]>{

}

export class RemoveBookValidationHandler extends BookValidationAbstract implements IRequestHandler<RemoveBookValidation,ValidationChain[]>{

    constructor(){
        super();
    }

   public HandleAsync(requestPara: RemoveBookValidation): Promise<ValidationChain[]> {
        return new Promise((resolve,reject)=>{
            try
            {
                let validationSummary:ValidationChain[]=new Array<ValidationChain>();
                    validationSummary.push(
                        this.BookIdentityValidation()
                    );

                    resolve(validationSummary);
            }
            catch(ex)
            {
                reject(ex.message);
                throw ex;
            }
        });
    }

}