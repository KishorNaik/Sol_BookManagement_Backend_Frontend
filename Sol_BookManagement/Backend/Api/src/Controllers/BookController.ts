import express from "express";
import { ValidationChain, validationResult } from "express-validator";
import BaseController from "../../Frameworks/BaseController/BaseController";
import { IMediatR } from "../../Frameworks/MediatR/Core/MediatR";
import { ValidationDelegateHandlerAsync } from "../../Frameworks/ValidationDelegates/Core/ValidationDelegateHandler";
import { CreateBookCommand } from "../Applications/Features/Commands/CreateBookCommandHandler";
import { UpdateBookCommand } from "../Applications/Features/Commands/UpdatebookCommandHandler";
import { CreateBookValidation } from "../Business/Validations/CreateBookValidationHandler";
import { UpdateBookValidation } from "../Business/Validations/UpdateBookValidationHandler";

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
        //http://localhost:3001/api/book/createbook
        this.router.post(
                            `${this.routePath}/createbook`,
                            await this.mediatR.SendAsync<ValidationChain[],CreateBookValidation>(new CreateBookValidation()),
                            this.CreateBookAsync.bind(this)
                        );

        //http://localhost:3001/api/book/createbook
        this.router.post(
                            `${this.routePath}/updatebook`,
                            await this.mediatR.SendAsync<ValidationChain[],UpdateBookValidation>(new UpdateBookValidation()),
                            this.UpdateBookAsync.bind(this)
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

    private async UpdateBookAsync(request:express.Request,response:express.Response,next:express.NextFunction): Promise<void>{
        try
        {
            await ValidationDelegateHandlerAsync(request,response,async ()=>{

                const { 
                    BookIdentity,
                    BookName,
                    Auther,
                    Quantity,
                    Price,
                    PublishDate
                }=request.body;

                let flag=await this.mediatR.SendAsync<boolean,UpdateBookCommand>(new UpdateBookCommand(BookIdentity,BookName,Auther,Quantity,Price,PublishDate));

                return flag;
            });
        }
        catch(ex)
        {
            next(ex);
        }
    }
}