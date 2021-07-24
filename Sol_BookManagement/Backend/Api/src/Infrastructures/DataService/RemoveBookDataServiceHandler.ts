import IRequest from "../../../Frameworks/MediatR/Core/Request/IRequest";
import IRequestHandler from "../../../Frameworks/MediatR/Core/Request/IRequestHandler";
import { ISqlProvider } from "../../../Frameworks/SqlProvider/Core/SqlProviders";
import { IConfiguration } from "../../Config/Settings/Core/Configuration";
import BookModel from "../../Models/BookModel";
import BookDataServiceAbstract from "../Abstracts/BookDataServiceAbstract";

export class RemoveBookDataService extends BookModel implements IRequest<boolean>{

    constructor(bookIdentity:string){
        super();
        this.BookIdentity=bookIdentity;
    }
}

export class RemoveBookDataServiceHandler extends BookDataServiceAbstract implements IRequestHandler<RemoveBookDataService,boolean>{
    
    private readonly sqlProvider:ISqlProvider;
    private readonly configuration:IConfiguration;

    constructor(sqlProvider:ISqlProvider,configuration:IConfiguration){
        super();
        this.sqlProvider=sqlProvider;
        this.configuration=configuration;
    }

    public async HandleAsync(requestPara: RemoveBookDataService): Promise<boolean> {
       try
       {
            console.log(await this.SqlConnectionConfigAsync(this.configuration));

            return true;
       }
       catch(ex)
       {
           throw ex;
       }
       finally
       {

       }
    }

}