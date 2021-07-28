import { Toast } from "primereact/toast";
import React, { Component } from "react";
import BookModel from "../Models/BookModel";
import { AddBookApiServiceAsync } from "../Services/AddBookApiService";
import PubSub from "pubsub-js";


interface IAddBookViewModelPros{

}

export abstract class AddBookViewModel extends Component<IAddBookViewModelPros,{}>{

    protected toastObj:React.RefObject<Toast>;

    constructor(props:IAddBookViewModelPros){
        super(props);

        this.toastObj=React.createRef<Toast>();
    }

    protected OnAddBookSubmitButtonHandler=async(values:BookModel):Promise<void>=>{
        
        let data=await AddBookApiServiceAsync(values);
        console.log(data);

        if(data!=null){
          
            this.toastObj.current?.show({severity: 'success', summary: 'Success Message', detail: 'Book submitted'});
        }
        else
        {
            this.toastObj.current?.show({severity: 'error', summary: 'Error Message', detail: 'Something went wrong!!!'});
        }
        
        
    }

    protected OnToastHideCloseAddBookDialogHandler=():void=>{
        PubSub.publish("HideAddBookDialog");
    }
}