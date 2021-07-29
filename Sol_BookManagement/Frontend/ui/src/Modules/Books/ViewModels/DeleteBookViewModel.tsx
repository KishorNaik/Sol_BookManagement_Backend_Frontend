import { Component, MouseEvent } from "react";
import { boolean } from "yup/lib/locale";
import BookModel from "../Models/BookModel";
import { DeleteBookApiServiceAsync } from "../Services/DeleteBookApiService";
import PubSub from "pubsub-js";

interface IDeleteBookViewModel {
    Book:BookModel;
}

export default abstract class DeleteBookViewModel extends Component<IDeleteBookViewModel,{}>{

    constructor(props:IDeleteBookViewModel){
        super(props);
    }

    protected OnHideDeleteBookDialog=():void=>{
        PubSub.publish("OnHideDeleteBookDialog");
    }

    protected OnBookDeleteButtonHandler=async ():Promise<void>=>{
        let data=await DeleteBookApiServiceAsync(this.props.Book);

        if(data!=null && (data as unknown as boolean)===true){
            PubSub.publish("RefreshBookOfList");
            this.OnHideDeleteBookDialog();
        }
    }
}