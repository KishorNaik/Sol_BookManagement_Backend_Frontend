import React from "react";
import { Dialog } from 'primereact/dialog';
import EditBookDialogViewModel from "../../ViewModels/Dialogs/EditBookDialogViewModel";
import EditBookView from "../EditBookView";

export default class EditBookDialogView extends EditBookDialogViewModel{

    public render(){
        return (
            <React.Fragment>
                <Dialog header="Edit Books" 
                    visible={this.state.IsDisplayModal} 
                    className="bmp-dialog-width" 
                    modal 
                    onHide={()=> this.setState({IsDisplayModal:false})}>

                    {/* <h1>Edit Model</h1>
                    <h3>{this.props.SelectedBook?.BookIdentity}</h3> */}

                    <EditBookView Book={this.props.SelectedBook}></EditBookView>

                </Dialog>
            </React.Fragment>
        )
    }
}