import React from "react";
import { Dialog } from 'primereact/dialog';
import {Button} from "primereact/button";
import { AddDialogViewModel } from "../ViewModels/AddBookDialogViewModel";

export default class AddBookDialogView extends AddDialogViewModel{
    // private footer = (
    //     <div>
    //         <Button label="Yes" icon="pi pi-check" onClick={this.OnHideDialog} />
    //         <Button label="No" icon="pi pi-times" onClick={this.OnHideDialog} />
    //     </div>
    // );
    public render(){
        console.log(this.state.IsDisplayModel);
        return (
            <React.Fragment>
                <Dialog header="Add Books" 
                    visible={this.state.IsDisplayModel} 
                    //footer={this.footer} 
                    className="bmp-dialog-width" 
                    modal 
                    onHide={()=> this.setState({IsDisplayModel:false})}>

                    <h1>Dialog</h1>

                </Dialog>
            </React.Fragment>
        )
    }
}