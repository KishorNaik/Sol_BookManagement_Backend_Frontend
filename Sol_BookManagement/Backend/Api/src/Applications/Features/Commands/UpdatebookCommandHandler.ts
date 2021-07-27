import { IMediatR } from "../../../../Frameworks/MediatR/Core/MediatR";
import IRequest from "../../../../Frameworks/MediatR/Core/Request/IRequest";
import IRequestHandler from "../../../../Frameworks/MediatR/Core/Request/IRequestHandler";
import { UpdateBookDataService } from "../../../Infrastructures/DataService/UpdateBookDataServiceHandler";

export class UpdateBookCommand implements IRequest<boolean>{
    
    public BookIdentity:string;
    public BookName:string;
    public Auther:string;
    public Quantity:number;
    public Price:number;
    public PublishDate:Date|string;

    constructor(
        bookIdentity:string,
        bookName:string,
        auther:string,
        quantity:number,
        price:number,
        publishDate:Date|string
    ){
        this.BookIdentity=bookIdentity;
        this.BookName=bookName;
        this.Auther=auther;
        this.Quantity=quantity;
        this.Price=price;
        this.PublishDate=publishDate;
    }
}

export class UpdateBookCommandHandler implements IRequestHandler<UpdateBookCommand,boolean>{

    private readonly mediatR:IMediatR;

    constructor(mediatR:IMediatR){
        this.mediatR=mediatR;
    }

    public HandleAsync(requestPara: UpdateBookCommand): Promise<boolean> {
       try
       {
            return this.mediatR.SendAsync<boolean,UpdateBookDataService>(new UpdateBookDataService(
                requestPara.BookIdentity,
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