import React, { Component, MouseEvent } from "react";
import AddBookDialogView from "../ViewsComponents/Dialogs/AddBookDialogView";
import DeleteBookDialogView from "../ViewsComponents/Dialogs/DeleteBookDialogViewModel";
import PubSub from "pubsub-js";
import BookModel from "../Models/BookModel";
import EditBookDialogView from "../ViewsComponents/Dialogs/EditBookDialogView";

interface IMainPageViewModelProps{

}

interface IMainPageViewModelState{
    SelectedBook:BookModel|undefined;
}

export abstract class MainPageViewModel extends Component<IMainPageViewModelProps,IMainPageViewModelState>{

    protected addBookDialogComponentsRef:React.RefObject<AddBookDialogView>;
    protected deleteBookDialogComponentsRef:React.RefObject<DeleteBookDialogView>;
    protected editBookDialogComponentsRef:React.RefObject<EditBookDialogView>;

    constructor(props:IMainPageViewModelProps){
        super(props);

        this.state={
            SelectedBook:{}
        }

        this.addBookDialogComponentsRef=React.createRef<AddBookDialogView>();
        this.deleteBookDialogComponentsRef=React.createRef<DeleteBookDialogView>();
        this.editBookDialogComponentsRef=React.createRef<EditBookDialogView>();
    }

    protected OnOpenAddBookDialog=(event:MouseEvent):void=>{
        //console.log("Test");
        this.addBookDialogComponentsRef.current?.OnDisplayDialog();
    }

    private OnDeleteBookOpenSubscribe=():void=>{
        PubSub.subscribe("OnDeleteBookOpenDialog",(msg:string|symbol, data:BookModel)=>{

            this.setState({
                SelectedBook:data
            });

            this.deleteBookDialogComponentsRef.current?.OnDisplayDeleteBookDialog();
        });
    }

    private OnEditBookOpenSubscriber=():void=>{
        PubSub.subscribe("OnEditBookOpenDialog",(ms:string|symbol,data:BookModel)=>{
            this.setState({
                SelectedBook:data
            });

            this.editBookDialogComponentsRef.current?.OnDisplayEditBookDialog();
        })
    }

    public componentWillMount(){
        this.OnDeleteBookOpenSubscribe();
        this.OnEditBookOpenSubscriber();
    }


}