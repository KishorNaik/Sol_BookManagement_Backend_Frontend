import { IMediatR } from "../../../../Frameworks/MediatR/Core/MediatR";
import IRequest from "../../../../Frameworks/MediatR/Core/Request/IRequest";
import IRequestHandler from "../../../../Frameworks/MediatR/Core/Request/IRequestHandler";
import { GetBookDataService } from "../../../Infrastructures/DataService/GetBookDataServiceHandler";
import BookModel from "../../../Models/BookModel";

export class GetBookQuery implements IRequest<BookModel[]>{

}

export class GetBookQueryHandler implements IRequestHandler<GetBookQuery,BookModel[]>{
    
    private readonly mediatR:IMediatR;

    constructor(mediatR:IMediatR){
        this.mediatR=mediatR;
    }

    public HandleAsync(requestPara: GetBookQuery): Promise<BookModel[]> {
        try
        {
            return this.mediatR.SendAsync<BookModel[],GetBookDataService>(new GetBookDataService());
        }
        catch(ex)
        {
            throw ex;
        }
    }

}