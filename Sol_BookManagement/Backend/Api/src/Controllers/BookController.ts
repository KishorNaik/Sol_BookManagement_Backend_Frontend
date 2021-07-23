import express from "express";
import { ValidationChain, validationResult } from "express-validator";
import BaseController from "../../Frameworks/BaseController/BaseController";
import { IMediatR } from "../../Frameworks/MediatR/Core/MediatR";
import { ValidationDelegateHandlerAsync } from "../../Frameworks/ValidationDelegates/Core/ValidationDelegateHandler";
import { CreateBookCommand } from "../Applications/Features/Commands/CreateBookCommandHandler";
import { CreateBookValidation } from "../Business/Validations/CreateBookValidationHandler";

export default class BookController extends BaseController{

    private readonly mediatR:IMediatR=null;

    constructor(mediatR:IMediatR){
        super();

        this.router=express.Router();
        this.routePath="/api/book";

        this.mediatR=mediatR;

        this.InitializeRoutes().then((resolve)=>console.log("Book Route Initialize"));
    }

    protected async InitializeRoutes():Promise<void>{
        this.router.post(
                            `${this.routePath}/createbook`,
                            await this.mediatR.SendAsync<ValidationChain[],CreateBookValidation>(new CreateBookValidation()),
                            this.CreateBookAsync.bind(this)
                        );
    }

    private async CreateBookAsync(request:express.Request,response:express.Response,next:express.NextFunction): Promise <void>{
        try
        {

            await ValidationDelegateHandlerAsync<boolean>(request,response,async ()=>{
                const { 
                    BookName,
                    Auther,
                    Quantity,
                    Price,
                    PublishDate
                }=request.body;
                let flag:boolean= await this.mediatR.SendAsync<boolean,CreateBookCommand>(new CreateBookCommand(BookName,Auther,Quantity,Price,PublishDate));
                return flag;
            });
        }
        catch(ex){
            next(ex);
        }
    }
}