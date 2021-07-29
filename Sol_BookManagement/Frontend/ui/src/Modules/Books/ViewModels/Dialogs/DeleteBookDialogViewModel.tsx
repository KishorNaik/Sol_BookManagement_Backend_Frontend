import { Component } from "react";
import BookModel from "../../Models/BookModel";
import PubSub from "pubsub-js";

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

    private OnHideDeleteBookDialogSubscriber=():void=>{
        PubSub.subscribe("OnHideDeleteBookDialog",()=>{
            this.setState({
                IsDisplayModal:false
            });
        });
    }

    public componentWillMount(){
        this.OnHideDeleteBookDialogSubscriber();
    }

}