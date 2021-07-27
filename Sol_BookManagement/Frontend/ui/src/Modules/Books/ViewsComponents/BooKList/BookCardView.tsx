import React, { Component } from "react";
import BookCardViewModel from "../../ViewModels/BookList/BookCardViewModel";

import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Knob } from 'primereact/knob';

export default class BookCardView extends BookCardViewModel{

    private Footer=():JSX.Element=>{
        return (
            <React.Fragment>
               <span>
                    <Button label="Edit" icon="pi pi-save" />
                    <Button label="Delete" icon="pi pi-times" className="p-button-secondary p-ml-2" />
                </span>
            </React.Fragment>
        )
    }

    public render(){

        let subTitleTemplate:string=`${this.props.bookModel?.Auther}     | ${this.props.bookModel?.PublishDate}`;

        return (
            <React.Fragment>
                <div className="col-lg-4 col-xl-4 col-md-6 col-sm-4">
                    <div className="p-shadow-22 text-center">
                        <Card footer={this.Footer} title={this.props.bookModel?.BookName} subTitle={subTitleTemplate}>
                            <React.Fragment>
                                <div className="container">
                                   
                                    <div className="row">
                                        <div className="col-6">
                                            <h5>Quantity</h5>
                                            <Knob value={this.props.bookModel?.Quantity} valueColor={"SlateGray"} rangeColor={"Orange"}/>
                                             
                                        </div>
                                        <div className="col-6">
                                            
                                            <h5>Price</h5>
                                            <Knob value={this.props.bookModel?.Price} valueColor={"SlateGray"} rangeColor={"Orange"}/>
                                                
                                        </div>
                                    </div>
                               </div>
                            
                            </React.Fragment>
                        </Card>
                    </div>      
                </div>
            </React.Fragment>
        )
    }
    
}