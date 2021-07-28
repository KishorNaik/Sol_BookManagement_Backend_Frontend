import IRequest from "../../../Frameworks/MediatR/Core/Request/IRequest";
import IRequestHandler from "../../../Frameworks/MediatR/Core/Request/IRequestHandler";
import { ISqlProvider } from "../../../Frameworks/SqlProvider/Core/SqlProviders";
import { IConfiguration } from "../../Config/Settings/Core/Configuration";
import BookModel from "../../Models/BookModel";
import BookDataServiceAbstract from "../Abstracts/BookDataServiceAbstract";

export  class GetBookDataService implements IRequest<BookModel[]>{

}

export  class GetBookDataServiceHandler extends BookDataServiceAbstract implements IRequestHandler<GetBookDataService,BookModel[]>{

    private readonly sqlProvider:ISqlProvider;
    private readonly configuration:IConfiguration;

    constructor(sqlProvider:ISqlProvider, configuration:IConfiguration){
        super();
        this.sqlProvider=sqlProvider;
        this.configuration=configuration;
    }

    public async HandleAsync(requestPara: GetBookDataService): Promise<BookModel[]> {
        try
        {
            let query=await this.QueryExecuteAsync(this.sqlProvider,this.configuration,"Get-Books","uspGetBooks",undefined);

            let bookList:BookModel[]=query.recordset;
          
            return bookList;
        }
        catch(ex){
            throw ex;
        }
    }

}