import React from "react";
import BookModel from "../../Models/BookModel";
import BookListViewModel from "../../ViewModels/BookList/BookListViewModel";
import BookCardView from "./BookCardView";

export default class BookListView extends BookListViewModel{

    
    public render(){
        
        return (
            
            <React.Fragment>
                {this.props?.BookList?.map((element:BookModel | undefined)=>{
                    return (
                        <BookCardView bookModel={element} key={element?.BookIdentity}></BookCardView>
                    )
                })}
            </React.Fragment>
        )
    }
}