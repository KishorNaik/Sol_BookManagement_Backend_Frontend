import React, { Component } from "react";

export default class Content extends Component{

    public render(){
        return (
            <React.Fragment>
                <div className="row bmp-content-bar p-shadow-5 mt-4">
                    <div className="col-sm-12 col-md-12">
                        {this.props.children}
                    </div>
                </div>
            </React.Fragment>
        )
    }

}