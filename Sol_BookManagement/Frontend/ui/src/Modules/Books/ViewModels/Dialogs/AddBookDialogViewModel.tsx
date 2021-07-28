import { Component, MouseEvent } from "react";
import PubSub from "pubsub-js";

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

    private OnHideDialog=()=>{
        this.setState({
            IsDisplayModel:false
        });
    };

    private OnHideDialogSubscribe=()=>{
        console.log("On Hide Dialog");
        this.OnHideDialog();
    }

    // protected OnHideDialogButtonHandler=(event:MouseEvent):void=>{
    //     console.log("On Hide Dialog");
    //     this.setState({
    //         IsDisplayModel:false
    //     });
    // }

    public OnDisplayDialog=():void=>{
        console.log("On Display Dialog");
        this.setState({
            IsDisplayModel:true
        });
    }

    public componentWillMount(){
        
        PubSub.subscribe("HideAddBookDialog",()=>this.OnHideDialogSubscribe());
    }
}