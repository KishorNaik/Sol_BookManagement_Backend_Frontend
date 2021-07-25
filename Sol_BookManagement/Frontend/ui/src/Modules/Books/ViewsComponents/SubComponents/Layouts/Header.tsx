import React, { Component, MouseEvent } from "react";
import {Button} from "primereact/button";

interface IHeaderProps{
    OnOpenAddBookDialog?:(event:MouseEvent)=>void;
}


export default class Header extends Component<IHeaderProps,{}>{

    constructor(props:IHeaderProps){
        super(props);
    }

    public render(){
        return (
            <React.Fragment>
                <div className="row align-items-center bmp-topbar p-shadow-5 mt-2">
                    <div className="col-sm-12 col-md-9">
                        <h1 className="bmp-title">Book Management</h1>
                    </div>
                    <div className="col-sm-12 col-md-3 p-2">
                        <Button label="Add Book" className="p-button-warning w-100" onClick={this.props.OnOpenAddBookDialog} />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}