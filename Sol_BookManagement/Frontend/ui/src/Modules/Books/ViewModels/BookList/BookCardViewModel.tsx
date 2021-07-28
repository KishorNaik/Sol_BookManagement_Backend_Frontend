import { Component } from "react";
import BookModel from "../../Models/BookModel";
import PubSub from "pubsub-js";

interface IBookCardViewModel{
    bookModel:BookModel | undefined;
}

export default abstract class BookCardViewModel extends Component<IBookCardViewModel,{}>{

    constructor(props:IBookCardViewModel){
        super(props);
    }

    protected OnOpenDeleteBookDialogHandler=(bookModel:BookModel | undefined):void=>{
      console.log("Delete:",bookModel);

      PubSub.publish("OnDeleteBookOpenDialog",bookModel);

    }

    protected OnOpenEditBookDialogHandler=(bookModel:BookModel | undefined): void=>{
        console.log("Edit:",bookModel);

        PubSub.publish("OnEditBookOpenDialog",bookModel);
    }

    
}