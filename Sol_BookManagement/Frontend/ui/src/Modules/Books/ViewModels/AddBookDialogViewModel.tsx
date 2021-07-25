import { Component, MouseEvent } from "react";

interface IAddBookDialogProps{

}

interface IAddBookDialogState{
    IsDisplayModel?:boolean;
}


export abstract class AddDialogViewModel extends Component<IAddBookDialogProps,IAddBookDialogState>{

    constructor(props:IAddBookDialogProps){
        super(props);

        this.state={
            IsDisplayModel:false
        };
    }

    protected OnHideDialog=(event:MouseEvent):void=>{
        console.log("On Hide Dialog");
        this.setState({
            IsDisplayModel:false
        });
    }

    public OnDisplayDialog=():void=>{
        console.log("On Display Dialog");
        this.setState({
            IsDisplayModel:true
        });
    }
}