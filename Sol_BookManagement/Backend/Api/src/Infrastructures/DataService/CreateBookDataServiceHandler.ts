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
        publishDate:Date
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
    
    private readonly sqlProvider:ISqlProvider=null;
    private readonly configuration:IConfiguration=null;

    constructor(sqlProvider:ISqlProvider,configuration:IConfiguration){
        super();
        this.sqlProvider=sqlProvider;
        this.configuration=configuration;
    }

    
    public async HandleAsync(requestPara: CreateBookDataService): Promise<boolean> {
        
       try
       {
           console.log(await await this.SqlConnectionConfigAsync(this.configuration));
            // let pool:mssql.ConnectionPool=await this.sqlProvider.OpenSqlConnectionAsync(await this.SqlConnectionConfigAsync(this.configuration));

            // let request:mssql.Request=await this.SetParameterAsync(pool.request(),"AddBook",requestPara);

            // let queryResult=await request.execute("uspSetBook");

            // let flag=(queryResult.rowsAffected[0]>=1) ? true :false;

            return true;

       }
       catch(ex)
       {
           throw ex;
       }
       finally
       {
            //await this.sqlProvider.CloseSqlConnectionAsync();
       }
    }

}