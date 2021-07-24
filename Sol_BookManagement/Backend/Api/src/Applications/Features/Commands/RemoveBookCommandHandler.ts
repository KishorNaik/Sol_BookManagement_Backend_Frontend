import { IMediatR } from "../../../../Frameworks/MediatR/Core/MediatR";
import IRequest from "../../../../Frameworks/MediatR/Core/Request/IRequest";
import IRequestHandler from "../../../../Frameworks/MediatR/Core/Request/IRequestHandler";
import { RemoveBookDataService } from "../../../Infrastructures/DataService/RemoveBookDataServiceHandler";

export class RemoveBookCommand implements IRequest<boolean>{
    public BookIdentity:string;

    constructor(bookIdentity:string){
        this.BookIdentity=bookIdentity;
    }
}

export class RemoveBookCommandHandler implements IRequestHandler<RemoveBookCommand,boolean>{
    
    private readonly mediatR:IMediatR;

    constructor(mediatR:IMediatR){
        this.mediatR=mediatR;
    }

    public HandleAsync(requestPara: RemoveBookCommand): Promise<boolean> {
        try
        {
            return this.mediatR.SendAsync<boolean,RemoveBookDataService>(new RemoveBookDataService(requestPara.BookIdentity));
        }
        catch(ex){
            throw ex;
        }
    }

}