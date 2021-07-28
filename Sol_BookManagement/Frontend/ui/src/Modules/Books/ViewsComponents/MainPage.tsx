import React, { Component } from "react";
import { MainPageViewModel } from "../ViewModels/MainPageViewModel";
import Header from "./SubComponents/Layouts/Header";
import Content from "./SubComponents/Layouts/Content";
import AddBookDialogView from "./Dialogs/AddBookDialogView";

import "./css/MainPage.css";
import BookListView from "./BooKList/BookListView";
import BookModel from "../Models/BookModel";
import DeleteBookDialogView from "./Dialogs/DeleteBookDialogViewModel";
import EditBookDialogView from "./Dialogs/EditBookDialogView";

export default class MainPage extends MainPageViewModel{
    
    public render(){
        return (
            <React.Fragment> 
               <div className="container">
                  
                   <Header OnOpenAddBookDialog={this.OnOpenAddBookDialog}></Header>
                   <Content>
                       <BookListView BookList={this.state.BookList!}></BookListView>
                   </Content>
               </div>

               <AddBookDialogView ref={this.addBookDialogComponentsRef}></AddBookDialogView>
               <DeleteBookDialogView ref={this.deleteBookDialogComponentsRef} SelectedBook={this.state.SelectedBook}></DeleteBookDialogView>
               <EditBookDialogView ref={this.editBookDialogComponentsRef} SelectedBook={this.state.SelectedBook}></EditBookDialogView>
            </React.Fragment>
        )
    }
}
