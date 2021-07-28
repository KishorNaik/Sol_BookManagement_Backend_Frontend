import { Component } from "react"
import BookModel from "../../Models/BookModel";

interface IEditBookDialogProsp{
    SelectedBook:BookModel|undefined;
}

interface IEditBookDialogState{
    IsDisplayModal:boolean;
}

export default abstract class EditBookDialogViewModel extends Component<IEditBookDialogProsp,IEditBookDialogState>{

    constructor(props:IEditBookDialogProsp){
        super(props);

        this.state={
            IsDisplayModal:false
        };
    }

    // Public Method
    public OnDisplayEditBookDialog=()=>{
        this.setState({
            IsDisplayModal:true
        });
    }

    private OnHideDisplayEditBookDialogSubscriber=()=>{
        PubSub.subscribe("HideEditBookDialog",()=>{
            this.setState({
                IsDisplayModal:false
            });
        })
    }

    public componentWillMount(){
        this.OnHideDisplayEditBookDialogSubscriber();
    }



}