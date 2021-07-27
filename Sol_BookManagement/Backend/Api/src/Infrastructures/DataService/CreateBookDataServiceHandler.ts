import IRequest from "../../../Frameworks/MediatR/Core/Request/IRequest";
import IRequestHandler from "../../../Frameworks/MediatR/Core/Request/IRequestHandler";
import { ISqlProvider } from "../../../Frameworks/SqlProvider/Core/SqlProviders";
import { IConfiguration } from "../../Config/Settings/Core/Configuration";
import BookModel from "../../Models/BookModel";
import BookDataServiceAbstract from "../Abstracts/BookDataServiceAbstract";
import mssql, { ConnectionPool } from "mssql/msnodesqlv8";

export class CreateBookDataService extends BookModel implements IRequest<boolean>{

    constructor(
        bookName:string,
        auther:string,
        quantity:number,
        price:number,
        publishDate:Date|string
    ){
        super();
        this.BookName=bookName;
        this.Auther=auther;
        this.Quantity=quantity;
        this.Price=price;
        this.PublishDate=publishDate
    }

}

export class CreateBookDataServiceHandler extends BookDataServiceAbstract implements IRequestHandler<CreateBookDataService,boolean>{
    
    private readonly sqlProvider:ISqlProvider;
    private readonly configuration:IConfiguration;

    constructor(sqlProvider:ISqlProvider,configuration:IConfiguration){
        super();
        this.sqlProvider=sqlProvider;
        this.configuration=configuration;
    }

    
    public async HandleAsync(requestPara: CreateBookDataService): Promise<boolean> {
        
       try
       {
           
           return this.CommandExecuteAsync(this.sqlProvider,this.configuration,"Create-Book","uspSetBooks",requestPara);
       }
       catch(ex)
       {
           throw ex;
       }
    }

}