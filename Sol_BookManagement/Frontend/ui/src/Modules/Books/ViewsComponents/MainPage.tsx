import "./css/MainPage.css";
import React, { Component } from "react";
import { MainPageViewModel } from "../ViewModels/MainPageViewModel";
import Header from "./SubComponents/Layouts/Header";
import Content from "./SubComponents/Layouts/Content";
import AddBookDialogView from "./Dialogs/AddBookDialogView";
import BookListView from "./BooKList/BookListView";
import BookModel from "../Models/BookModel";
import DeleteBookDialogView from "./Dialogs/DeleteBookDialogViewModel";
import EditBookDialogView from "./Dialogs/EditBookDialogView";
import { NoRecordFound } from "./SubComponents/Shared/NoRecordFound";


export default class MainPage extends MainPageViewModel{
    
  

    private RenderBookList=():JSX.Element=>{
        let template:JSX.Element;

        if(this?.state?.BookList!=null && (this.state.BookList! as BookModel[])?.length>=1){
            
            template=<BookListView BookList={this.state.BookList!}></BookListView>
        }
        else
        {
            template=<NoRecordFound></NoRecordFound>
            
        }

        return template;
    }

    public render(){

        return (
            <React.Fragment> 
               <div className="container">
                  
                   <Header OnOpenAddBookDialog={this.OnOpenAddBookDialog}></Header>
                   <Content>
                      
                        <this.RenderBookList></this.RenderBookList>
                        {/* or Call like this
                        {this.RenderBookList()}
                        */}
                   </Content>
               </div>

               <AddBookDialogView ref={this.addBookDialogComponentsRef}></AddBookDialogView>
               <DeleteBookDialogView ref={this.deleteBookDialogComponentsRef} SelectedBook={this.state.SelectedBook}></DeleteBookDialogView>
               <EditBookDialogView ref={this.editBookDialogComponentsRef} SelectedBook={this.state.SelectedBook}></EditBookDialogView>
            </React.Fragment>
        )
    }
}
