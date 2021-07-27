import { Component } from "react";
import BookModel from "../../Models/BookModel";

interface IBookListViewModelProps{
    BookList:BookModel[];
}

export default abstract class BookListViewModel  extends Component<IBookListViewModelProps,{}>{

    constructor(props:IBookListViewModelProps){
        super(props);
    }
}