import { ValidationChain } from "express-validator";
import IRequest from "../../../Frameworks/MediatR/Core/Request/IRequest";
import IRequestHandler from "../../../Frameworks/MediatR/Core/Request/IRequestHandler";
import BookValidationAbstract from "./Abstract/BookValidationAbstract";

export class UpdateBookValidation implements IRequest<ValidationChain[]>{

}

export class UpdateBookValidationHandler extends BookValidationAbstract implements IRequestHandler<UpdateBookValidation,ValidationChain[]>{
    
    public HandleAsync(requestPara: UpdateBookValidation): Promise<ValidationChain[]> {
        return new Promise((resolve,reject)=>{

            try
            {
                let validationSummary:ValidationChain[]=new Array<ValidationChain>();
                    validationSummary.push(
                        this.BookIdentityValidation(),
                        this.BookNameValidation(),
                        this.AutherValidation(),
                        this.PriceValidation(),
                        this.QuantityValidation(),
                        this.PublishDateValidation()
                    );

                resolve(validationSummary);
            }
            catch(ex)
            {
                reject(ex);
                throw ex;
            }

        });
    }

}