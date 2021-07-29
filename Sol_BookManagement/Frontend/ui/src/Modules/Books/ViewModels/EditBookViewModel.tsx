import React, { Component } from "react";
import BookModel from "../Models/BookModel";
import { Toast } from "primereact/toast";
import PubSub from "pubsub-js";
import { EditBookApiServiceAsync } from "../Services/EditbookApiSevice";

interface IEditBookViewModelProps{
    Book:BookModel | undefined
}

interface IEditBookViewModelState{

}

export default abstract class EditBookViewModel extends Component<IEditBookViewModelProps,IEditBookViewModelState>{

    protected toastObj:React.RefObject<Toast>;

    constructor(props:IEditBookViewModelProps){
        super(props);

        this.toastObj=React.createRef<Toast>();
    }

    protected OnEditBookSubmitButtonHandler=async (bookModel:BookModel):Promise<void>=>{

        //console.log(bookModel);
        let data=await EditBookApiServiceAsync(bookModel);

        //console.log(data);

        if(data!=null){
          
            this.toastObj.current?.show({severity: 'success', summary: 'Success Message', detail: 'Book Updated'});
        }
        else
        {
            this.toastObj.current?.show({severity: 'error', summary: 'Error Message', detail: 'Something went wrong!!!'});
        }
    }

    protected OnToastHideCloseEditBookDialogHandler=():void=>{
        PubSub.publish("RefreshBookOfList");
        PubSub.publish("HideEditBookDialog");
    }
}