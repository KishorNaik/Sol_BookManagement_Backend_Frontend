import React from "react";
import { Dialog } from 'primereact/dialog';
import DeleteBookDialogViewModel from "../../ViewModels/Dialogs/DeleteBookDialogViewModel";

export default class DeleteBookDialogView extends DeleteBookDialogViewModel{

    public render(){
        return (
            <React.Fragment>
                 <Dialog header="Delete Books" 
                    visible={this.state.IsDisplayModal} 
                    className="bmp-dialog-width" 
                    modal 
                    onHide={()=> this.setState({IsDisplayModal:false})}>

                    <h1>Delete Model</h1>
                    <h3>{this.props.SelectedBook?.BookIdentity}</h3>

                </Dialog>
            </React.Fragment>
        )
    }
}