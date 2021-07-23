import { IMediatR } from "../../../../Frameworks/MediatR/Core/MediatR";
import IRequest from "../../../../Frameworks/MediatR/Core/Request/IRequest";
import IRequestHandler from "../../../../Frameworks/MediatR/Core/Request/IRequestHandler";
import { CreateBookDataService } from "../../../Infrastructures/DataService/CreateBookDataServiceHandler";

export class CreateBookCommand implements IRequest<boolean>{

    public BookName:string;
    public Auther:string;
    public Quantity:number;
    public Price:number;
    public PublishDate:Date

    constructor(
        bookName:string,
        auther:string,
        quantity:number,
        price:number,
        publishDate:Date
    ){
        this.BookName=bookName;
        this.Auther=auther;
        this.Quantity=quantity;
        this.Price=price;
        this.PublishDate=publishDate
    }
}

export class CreateBookCommandHandler implements IRequestHandler<CreateBookCommand,boolean>{
    
    private readonly mediatR:IMediatR=null;

    constructor(mediatR:IMediatR){
        this.mediatR=mediatR;
    }

    public HandleAsync(requestPara: CreateBookCommand): Promise<boolean> {
       try
       {
            return this.mediatR.SendAsync<boolean,CreateBookCommand>(new CreateBookDataService(
                requestPara.BookName,
                requestPara.Auther,
                requestPara.Quantity,
                requestPara.Price,
                requestPara.PublishDate
            ));
       }
       catch(ex){
           throw ex;
       }
    }

}