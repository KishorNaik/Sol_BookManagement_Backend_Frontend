import { Component } from "react";
import BookModel from "../../Models/BookModel";

interface IDeleteBookDialogProps{
    SelectedBook?:BookModel;
}

interface IDeleteBookDialogState{
    IsDisplayModal:boolean
}

export default abstract class DeleteBookDialogViewModel extends Component<IDeleteBookDialogProps,IDeleteBookDialogState>{

    constructor(props:IDeleteBookDialogProps){
        super(props);

        this.state={
            IsDisplayModal:false
        };
    }

    // Public Method
    public OnDisplayDeleteBookDialog=():void=>{
        this.setState({
            IsDisplayModal:true
        });
    }

}