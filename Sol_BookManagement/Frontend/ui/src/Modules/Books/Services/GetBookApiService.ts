import BookModel from "../Models/BookModel";
import axios from "axios"

export const GetBookApiServiceAsync=async ():Promise<BookModel[]|null>=>{
    let data:BookModel[]|null=null;
    let response=await axios.post("http://localhost:3001/api/book/getbooks",undefined,{
       headers:{"Content-Type":"application/json"}
    });

    if(response?.status===200){
        data=response.data;
    }
    else
    {
        data=null;
    }

    return data;
};