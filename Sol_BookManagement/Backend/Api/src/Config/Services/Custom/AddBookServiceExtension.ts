import Bottle from "bottlejs"
import { IMediatRRegister } from "../../../../Frameworks/MediatR/Core/MediatR";
import { CreateBookCommand, CreateBookCommandHandler } from "../../../Applications/Features/Commands/CreateBookCommandHandler";
import { RemoveBookCommand, RemoveBookCommandHandler } from "../../../Applications/Features/Commands/RemoveBookCommandHandler";
import { UpdateBookCommand, UpdateBookCommandHandler } from "../../../Applications/Features/Commands/UpdatebookCommandHandler";
import { GetBookQuery, GetBookQueryHandler } from "../../../Applications/Features/Queries/GetBookQueryHandler";
import { CreateBookValidation, CreateBookValidationHandler } from "../../../Business/Validations/CreateBookValidationHandler";
import { RemoveBookValidation, RemoveBookValidationHandler } from "../../../Business/Validations/RemoveBookValidationHandler";
import { UpdateBookValidation, UpdateBookValidationHandler } from "../../../Business/Validations/UpdateBookValidationHandler";
import BookController from "../../../Controllers/BookController";
import { CreateBookDataService, CreateBookDataServiceHandler } from "../../../Infrastructures/DataService/CreateBookDataServiceHandler"
import { GetBookDataService, GetBookDataServiceHandler } from "../../../Infrastructures/DataService/GetBookDataServiceHandler";
import { RemoveBookDataService, RemoveBookDataServiceHandler } from "../../../Infrastructures/DataService/RemoveBookDataServiceHandler";
import { UpdateBookDataService, UpdateBookDataServiceHandler } from "../../../Infrastructures/DataService/UpdateBookDataServiceHandler";

export const AddBookServiceExtension=(bottleContainer:Bottle):void=>{

    let DataServiceHandler=():void=>{
        bottleContainer.service("createBookDataServiceHandler",CreateBookDataServiceHandler,"sqlProvider","configurations");
        bottleContainer.service("updateBookDataServiceHandler",UpdateBookDataServiceHandler,"sqlProvider","configurations");
        bottleContainer.service("removeBookDataServiceHandler",RemoveBookDataServiceHandler,"sqlProvider","configurations");
        bottleContainer.service("getBookServiceHandler",GetBookDataServiceHandler,"sqlProvider","configurations");
        
    }
    
    let CommandHandler=():void=>{
        bottleContainer.service("createBookCommandHandler",CreateBookCommandHandler,"mediatR");
        bottleContainer.service("updateBookCommandHandler",UpdateBookCommandHandler,"mediatR");
        bottleContainer.service("removeBookCommandHandler",RemoveBookCommandHandler,"mediatR");
    }

    let QueryHandler=():void=>{
        bottleContainer.service("getBookQueryHandler",GetBookQueryHandler,"mediatR");
    }

    let ValidationHandler=():void=>{
        bottleContainer.service("createBookValidationHandler",CreateBookValidationHandler);
        bottleContainer.service("updateBookValidationHandler",UpdateBookValidationHandler);
        bottleContainer.service("removeBookValidationHandler",RemoveBookValidationHandler);
    }
    let Controller=():void=>{
        bottleContainer.service("bookController",BookController,"mediatR");
    }
    let MediatRRegistration=():void=>{
        let mediatR:IMediatRRegister=bottleContainer.container.mediatR;

        // Create Book
        mediatR.RegisterRequest(CreateBookDataService,bottleContainer.container.createBookDataServiceHandler);
        mediatR.RegisterRequest(CreateBookCommand,bottleContainer.container.createBookCommandHandler);
        mediatR.RegisterRequest(CreateBookValidation,bottleContainer.container.createBookValidationHandler);

        // Update Book
        mediatR.RegisterRequest(UpdateBookDataService,bottleContainer.container.updateBookDataServiceHandler);
        mediatR.RegisterRequest(UpdateBookCommand,bottleContainer.container.updateBookCommandHandler);
        mediatR.RegisterRequest(UpdateBookValidation,bottleContainer.container.updateBookValidationHandler);

        // Remove Book
        mediatR.RegisterRequest(RemoveBookDataService,bottleContainer.container.removeBookDataServiceHandler);
        mediatR.RegisterRequest(RemoveBookCommand,bottleContainer.container.removeBookCommandHandler);
        mediatR.RegisterRequest(RemoveBookValidation,bottleContainer.container.removeBookValidationHandler);

        // Get Book
        mediatR.RegisterRequest(GetBookDataService,bottleContainer.container.getBookServiceHandler);
        mediatR.RegisterRequest(GetBookQuery,bottleContainer.container.getBookQueryHandler);

    }


    DataServiceHandler();
    CommandHandler();
    QueryHandler();
    ValidationHandler();
    MediatRRegistration();
    Controller();
    
}