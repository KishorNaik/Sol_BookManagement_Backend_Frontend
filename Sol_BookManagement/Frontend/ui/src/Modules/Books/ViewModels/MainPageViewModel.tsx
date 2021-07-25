import React, { Component, MouseEvent } from "react";
import AddBookDialogView from "../ViewsComponents/AddBookDialogView";

interface IMainPageViewModelProps{

}

interface IMainPageViewModelState{

}

export abstract class MainPageViewModel extends Component<IMainPageViewModelProps,IMainPageViewModelState>{

    protected addBookDialogComponentsRef:React.RefObject<AddBookDialogView>;

    constructor(props:IMainPageViewModelProps){
        super(props);

        this.addBookDialogComponentsRef=React.createRef<AddBookDialogView>();
    }

    protected OnOpenAddBookDialog=(event:MouseEvent):void=>{
        //console.log("Test");
        this.addBookDialogComponentsRef.current?.OnDisplayDialog();
    }

}