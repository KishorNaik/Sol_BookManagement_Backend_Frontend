import express from "express";
import { ValidationChain, validationResult } from "express-validator";
import BaseController from "../../Frameworks/BaseController/BaseController";
import { IMediatR } from "../../Frameworks/MediatR/Core/MediatR";
import { ValidationDelegateHandlerAsync } from "../../Frameworks/ValidationDelegates/Core/ValidationDelegateHandler";
import { CreateBookCommand } from "../Applications/Features/Commands/CreateBookCommandHandler";
import { RemoveBookCommand } from "../Applications/Features/Commands/RemoveBookCommandHandler";
import { UpdateBookCommand } from "../Applications/Features/Commands/UpdatebookCommandHandler";
import { GetBookQuery } from "../Applications/Features/Queries/GetBookQueryHandler";
import { CreateBookValidation } from "../Business/Validations/CreateBookValidationHandler";
import { RemoveBookValidation } from "../Business/Validations/RemoveBookValidationHandler";
import { UpdateBookValidation } from "../Business/Validations/UpdateBookValidationHandler";
import BookModel from "../Models/BookModel";

export default class BookController extends BaseController{

    private readonly mediatR:IMediatR;

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

        //http://localhost:3001/api/book/updatebook
        this.router.post(
                            `${this.routePath}/updatebook`,
                            await this.mediatR.SendAsync<ValidationChain[],UpdateBookValidation>(new UpdateBookValidation()),
                            this.UpdateBookAsync.bind(this)
                        );

         //http://localhost:3001/api/book/removebook
        this.router.post(
                            `${this.routePath}/removebook`,
                            await this.mediatR.SendAsync<ValidationChain[],RemoveBookValidation>(new RemoveBookValidation()),
                            this.RemoveBookAsync.bind(this)
                        );

        //http://localhost:3001/api/book/getbooks
        this.router.post(
                            `${this.routePath}/getbooks`,
                            this.GetBookListAsync.bind(this)
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

    private async RemoveBookAsync(request:express.Request,response:express.Response,next:express.NextFunction): Promise<void>{
        try
        {
            await ValidationDelegateHandlerAsync(request,response,async ()=>{

                const { 
                    BookIdentity
                }=request.body;

                let flag=await this.mediatR.SendAsync<boolean,RemoveBookCommand>(new RemoveBookCommand(BookIdentity));

                return flag;
            });
        }
        catch(ex)
        {
            next(ex);
        }
    }

    private async GetBookListAsync(request:express.Request,response:express.Response,next:express.NextFunction): Promise<void>
    {
        try
        {
            let bookList:BookModel[]=await this.mediatR.SendAsync<BookModel[],GetBookQuery>(new GetBookQuery());
            response.status(200).json(bookList);
        }
        catch(ex)
        {
            next(ex);
        }
    }
}