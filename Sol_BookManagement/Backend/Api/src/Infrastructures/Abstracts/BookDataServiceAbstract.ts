import mssql from "mssql/msnodesqlv8";
import { ISqlProvider } from "../../../Frameworks/SqlProvider/Core/SqlProviders";
import { IConfiguration } from "../../Config/Settings/Core/Configuration";
import BookModel from "../../Models/BookModel";

export default abstract class BookDataServiceAbstract{
 
    protected SqlConnectionConfigAsync(configuration:IConfiguration):Promise<mssql.config>{

        return new Promise((resolve,reject)=>{

            try
            {
                const sqlConfig:mssql.config={
                    server:(process.env.NODE_ENV==="development") ? configuration?.AppSettingConfig?.Development?.DatabaseConnection?.Server : configuration?.AppSettingConfig?.Production?.DatabaseConnection?.Server,
                    driver:(process.env.NODE_ENV==="development") ? configuration.AppSettingConfig?.Development?.DatabaseConnection?.Driver : configuration?.AppSettingConfig?.Production?.DatabaseConnection?.Driver,
                    database:(process.env.NODE_ENV==="development") ? configuration.AppSettingConfig?.Development?.DatabaseConnection?.Database : configuration?.AppSettingConfig?.Production?.DatabaseConnection?.Database,
                    options:{
                        trustedConnection:(process.env.NODE_ENV==="development") ? configuration?.AppSettingConfig?.Development?.DatabaseConnection?.Options?.TrustedConnection : configuration?.AppSettingConfig?.Production?.DatabaseConnection?.Options?.TrustedConnection,
                    }
                }

                resolve(sqlConfig);
            }
            catch(ex)
            {
                reject(ex);
                throw ex;
            }

        });

    }


    protected SetParameterAsync(requestPara:mssql.Request,command:string,bookModel:BookModel):Promise<mssql.Request>{
        return new Promise((resolve,reject)=>{

            try
            {
               
                requestPara
                    .input("Command",mssql.VarChar,command)
                    .input("BookIdentity",mssql.UniqueIdentifier,bookModel.BookIdentity)
                    .input("BookName",mssql.VarChar,bookModel.BookName)
                    .input("Auther",mssql.VarChar,bookModel.Auther)
                    .input("Price",mssql.Money,bookModel.Price)
                    .input("Quantity",mssql.Int,bookModel.Quantity)
                    .input("PublishDate",mssql.VarChar,bookModel.PublishDate);

                resolve(requestPara);

            }
            catch(ex){
                reject(ex.message);
                throw ex;
            }

        });
    }

    protected async CommandExecuteAsync(sqlProvider:ISqlProvider, configuration:IConfiguration, command:string,procedureName:string,bookModel:BookModel):Promise<boolean>{
        try
        {
            let pool:mssql.ConnectionPool=await sqlProvider.OpenSqlConnectionAsync(await this.SqlConnectionConfigAsync(configuration));

            let request:mssql.Request=await this.SetParameterAsync(pool.request(),command,bookModel);

            let queryResult=await request.execute(procedureName);

            let flag=(queryResult.rowsAffected[0]>=1) ? true :false;

            return true;
        }
        catch(ex){
            throw ex;
        }
        finally
        {
            await sqlProvider.CloseSqlConnectionAsync();
        }
    }
    
}