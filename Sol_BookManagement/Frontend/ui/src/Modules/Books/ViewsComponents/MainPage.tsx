import React, { Component } from "react";
import { MainPageViewModel } from "../ViewModels/MainPageViewModel";
import Header from "./SubComponents/Layouts/Header";
import Content from "./SubComponents/Layouts/Content";
import AddBookDialogView from "./AddBookDialogView";

import "./css/MainPage.css";

export default class MainPage extends MainPageViewModel{

    public render(){
        return (
            <React.Fragment> 
               <div className="container">
                  
                   <Header OnOpenAddBookDialog={this.OnOpenAddBookDialog}></Header>
                   <Content>
                       <h1>Test</h1>
                   </Content>
               </div>

               <AddBookDialogView ref={this.addBookDialogComponentsRef}></AddBookDialogView>
            </React.Fragment>
        )
    }
}
