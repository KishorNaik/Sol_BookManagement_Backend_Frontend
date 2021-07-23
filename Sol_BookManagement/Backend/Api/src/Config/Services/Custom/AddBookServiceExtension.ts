import Bottle from "bottlejs"
import { IMediatRRegister } from "../../../../Frameworks/MediatR/Core/MediatR";
import { CreateBookCommand, CreateBookCommandHandler } from "../../../Applications/Features/Commands/CreateBookCommandHandler";
import { CreateBookValidation, CreateBookValidationHandler } from "../../../Business/Validations/CreateBookValidationHandler";
import BookController from "../../../Controllers/BookController";
import { CreateBookDataService, CreateBookDataServiceHandler } from "../../../Infrastructures/DataService/CreateBookDataServiceHandler"

export const AddBookServiceExtension=(bottleContainer:Bottle):void=>{

    let DataServiceHandler=():void=>{
        bottleContainer.service("createBookDataServiceHandler",CreateBookDataServiceHandler,"sqlProvider","configurations");
    }
    let CommandHandler=():void=>{
        bottleContainer.service("createBookCommandHandler",CreateBookCommandHandler,"mediatR");
    }
    let ValidationHandler=():void=>{
        bottleContainer.service("createBookValidationHandler",CreateBookValidationHandler);
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
    }


    DataServiceHandler();
    CommandHandler();
    ValidationHandler();
    MediatRRegistration();
    Controller();
    
}