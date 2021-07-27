import IRequest from "../../../Frameworks/MediatR/Core/Request/IRequest";
import IRequestHandler from "../../../Frameworks/MediatR/Core/Request/IRequestHandler";
import { ISqlProvider } from "../../../Frameworks/SqlProvider/Core/SqlProviders";
import { IConfiguration } from "../../Config/Settings/Core/Configuration";
import BookModel from "../../Models/BookModel";
import BookDataServiceAbstract from "../Abstracts/BookDataServiceAbstract";

export class UpdateBookDataService extends BookModel implements IRequest<boolean>{

    constructor(
        bookIdentity:string,
        bookName:string,
        auther:string,
        quantity:number,
        price:number,
        publishDate:Date|string
    ){
        super();
        this.BookIdentity=bookIdentity;
        this.BookName=bookName;
        this.Auther=auther;
        this.Quantity=quantity;
        this.Price=price;
        this.PublishDate=publishDate
    }

}

export class UpdateBookDataServiceHandler extends BookDataServiceAbstract implements IRequestHandler<UpdateBookDataService,boolean>{

    private readonly sqlProvider:ISqlProvider;
    private readonly configuration:IConfiguration;

    constructor(sqlProvider:ISqlProvider,configuration:IConfiguration){
        super();
        this.sqlProvider=sqlProvider;
        this.configuration=configuration;
    }

    public async HandleAsync(requestPara: UpdateBookDataService): Promise<boolean> {
       try
       {
            return this.CommandExecuteAsync(this.sqlProvider,this.configuration,"Update-Book","uspSetBooks",requestPara);
       }
       catch(ex)
       {
           throw ex;
       }
    }

}