import { Component } from "react";
import BookModel from "../../Models/BookModel";

interface IBookCardViewModel{
    bookModel:BookModel | undefined;
}

export default abstract class BookCardViewModel extends Component<IBookCardViewModel>{

    constructor(props:IBookCardViewModel){
        super(props);
    }
}