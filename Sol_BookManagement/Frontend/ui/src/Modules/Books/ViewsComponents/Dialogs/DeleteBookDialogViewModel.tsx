import React from "react";
import { Dialog } from 'primereact/dialog';
import DeleteBookDialogViewModel from "../../ViewModels/Dialogs/DeleteBookDialogViewModel";
import DeleteBookView from "../DeleteBookView";

export default class DeleteBookDialogView extends DeleteBookDialogViewModel{

    public render(){
        return (
            <React.Fragment>
                 <Dialog header="Delete Books" 
                    visible={this.state.IsDisplayModal} 
                    className="bmp-dialog-width" 
                    modal 
                    onHide={()=> this.setState({IsDisplayModal:false})}>

                        <DeleteBookView Book={this.props.SelectedBook!}></DeleteBookView>

                </Dialog>
            </React.Fragment>
        )
    }
}