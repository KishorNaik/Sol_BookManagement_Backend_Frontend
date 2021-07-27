import React, { Component } from "react";
import { MainPageViewModel } from "../ViewModels/MainPageViewModel";
import Header from "./SubComponents/Layouts/Header";
import Content from "./SubComponents/Layouts/Content";
import AddBookDialogView from "./AddBookDialogView";

import "./css/MainPage.css";
import BookListView from "./BooKList/BookListView";
import BookModel from "../Models/BookModel";

export default class MainPage extends MainPageViewModel{

    private OnDemoBookList=():BookModel[]=>{
        let bookModelList:BookModel[]=new Array<BookModel>();
            bookModelList.push({
                BookIdentity:"23-56-89-89",
                BookName:"Test_BookName1",
                Auther:"Test_Auther1",
                Price:30.00,
                Quantity:20,
                PublishDate:"07/25/2021"

            });

            bookModelList.push({
                BookIdentity:"23-56-89-30",
                BookName:"Test_BookName2",
                Auther:"Test_Auther2",
                Price:40.00,
                Quantity:50,
                PublishDate:"07/25/2021"

            });

            bookModelList.push({
                BookIdentity:"23-56-89-40",
                BookName:"Test_BookName3",
                Auther:"Test_Auther3",
                Price:20.00,
                Quantity:30,
                PublishDate:"07/25/2021"

            });

            bookModelList.push({
                BookIdentity:"23-56-89-42",
                BookName:"Test_BookName4",
                Auther:"Test_Auther1=4",
                Price:30.00,
                Quantity:20,
                PublishDate:"07/25/2021"

            });

            bookModelList.push({
                BookIdentity:"23-56-89-43",
                BookName:"Test_BookName5",
                Auther:"Test_Auther5",
                Price:40.00,
                Quantity:50,
                PublishDate:"07/25/2021"

            });

            bookModelList.push({
                BookIdentity:"23-56-89-44",
                BookName:"Test_BookName6",
                Auther:"Test_Auther6",
                Price:20.00,
                Quantity:30,
                PublishDate:"07/25/2021"

            });

        return bookModelList;
    }



    public render(){
        return (
            <React.Fragment> 
               <div className="container">
                  
                   <Header OnOpenAddBookDialog={this.OnOpenAddBookDialog}></Header>
                   <Content>
                       <BookListView BookList={this.OnDemoBookList()}></BookListView>
                   </Content>
               </div>

               <AddBookDialogView ref={this.addBookDialogComponentsRef}></AddBookDialogView>
            </React.Fragment>
        )
    }
}
