export default interface BookModel{
     BookIdentity?:string;
     BookName?:string;
     Auther?:string;
     Price?:number;
     Quantity?:number|undefined;
     PublishDate?: Date| string |undefined
}