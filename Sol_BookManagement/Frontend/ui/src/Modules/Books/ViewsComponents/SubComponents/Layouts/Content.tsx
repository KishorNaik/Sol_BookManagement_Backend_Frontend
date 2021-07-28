import React, { Component } from "react";

export default class Content extends Component{

    public render(){
        return (
            <React.Fragment>
                <div className="row bmp-content-bar p-shadow-5 mt-4 p-2 gx-4 gy-4">
                  
                        {this.props.children}
                    
                </div>
            </React.Fragment>
        )
    }

}