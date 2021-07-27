import BookModel from "../Models/BookModel";
import axios from "axios"

export const AddBookApiServiceAsync=async (bookModel:BookModel):Promise<object|null>=>{
    let data:object|null=null;
    let response=await axios.post("http://localhost:3001/api/book/createbook",bookModel,{
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