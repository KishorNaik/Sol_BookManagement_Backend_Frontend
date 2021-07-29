import React from "react";
import DeleteBookViewModel from "../ViewModels/DeleteBookViewModel";
import { Button } from 'primereact/button';

export default class DeleteBookView extends DeleteBookViewModel{

    public render(){
        return (
            <React.Fragment>
                {/* <h1>{this.props.Book?.BookIdentity}</h1> */}
                <div className="container text-center">
                    <div className="row">
                        <div className="col-12 mb-3">
                            <h3>Do you want to delete this Book?</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="container w-50">
                                <div className="row">
                                    <div className="col-12 col-md-6 col-lg-6 mb-2 p-fluid">
                                        <Button label="Yes" className="p-button-rounded p-button-warning" onClick={this.OnBookDeleteButtonHandler} />
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-6 p-fluid">
                                        <Button label="No" className="p-button-rounded" onClick={this.OnHideDeleteBookDialog} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </React.Fragment>
        )
    }
}