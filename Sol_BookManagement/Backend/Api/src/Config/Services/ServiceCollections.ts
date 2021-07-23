import {AddSqlProviderService} from "../../../Frameworks/SqlProvider/Extension/SqlProviderServiceExtension";
import {AddConfigurationService} from "../Settings/Extension/ConfigurationServiceExtension";
import {AddPostgresProviderService  } from "../../../Frameworks/PostgresProvider/Extension/PostgresProviderServiceExtension";
import { AddBookServiceExtension } from "./Custom/AddBookServiceExtension";
import { AddMediatR } from "../../../Frameworks/MediatR/Extension/MediatRServiceExtension";

export default class ServiceCollections{

    constructor(){
        console.log("Services running");
    }

    public AddConfigurationService=AddConfigurationService;
    public AddSqlProviderService=AddSqlProviderService;
    public AddPostgresProviderService=AddPostgresProviderService;
    public AddMediatR=AddMediatR;
    public AddBookService=AddBookServiceExtension;

}