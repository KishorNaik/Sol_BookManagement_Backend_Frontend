import { ValidationChain } from "express-validator";
import IRequest from "../../../Frameworks/MediatR/Core/Request/IRequest";
import IRequestHandler from "../../../Frameworks/MediatR/Core/Request/IRequestHandler";
import BookValidationAbstract from "./Abstract/BookValidationAbstract";

export class CreateBookValidation implements IRequest<ValidationChain[]>{

}

export class CreateBookValidationHandler extends BookValidationAbstract implements IRequestHandler<CreateBookValidation,ValidationChain[]>{

    public HandleAsync(requestPara: CreateBookValidation): Promise<ValidationChain[]> {
        return new Promise((resolve,reject)=>{

            try
            {
                let validationSummary:ValidationChain[]=new Array<ValidationChain>();

                validationSummary.push(
                    this.BookNameValidation(),
                    this.AutherValidation(),
                    this.PriceValidation(),
                    this.QuantityValidation(),
                    this.PublishDateValidation()
                );

                resolve(validationSummary);
            }
            catch(ex){
                reject(ex);
                throw ex;
            }

        });
    }

}