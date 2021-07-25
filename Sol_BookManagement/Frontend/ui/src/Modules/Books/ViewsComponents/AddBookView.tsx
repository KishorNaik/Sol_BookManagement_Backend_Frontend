import React, { Component } from "react";
import { Formik, Form,Field } from "formik";
import * as Yup from 'yup';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Calendar } from 'primereact/calendar';
import {Button} from "primereact/button";
import { AddBookViewModel } from "../ViewModels/AddBookViewModel";
import { ErrorDisplay } from "./SubComponents/Shared/ErrorDisplay";

export default class AddBookView extends AddBookViewModel{

    public render(){
        return (
            <React.Fragment>
                <Formik
                    initialValues={
                        {
                            BookName:'',
                            Auther:'',
                            Quantity:undefined,
                            Price:0.00,
                            PublishDate:new Date()
                        }
                    }
                    onSubmit={(values)=>{

                    }}
                >
                    {
                        (formik)=>(
                            <form onSubmit={formik.handleSubmit}>
                                <div className="container mt-3">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="p-fluid">
                                                <div className="p-field">
                                                    <span className="p-float-label">
                                                        <InputText id="txtBookName" value={formik.values.BookName} onChange={formik.handleChange} />
                                                        <label htmlFor="txtBookName">BookName</label>
                                                    </span>
                                                    {formik.errors.BookName ? <ErrorDisplay Message={formik.errors.BookName}></ErrorDisplay> : null}
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-12">
                                            <div className="p-fluid">
                                                <div className="p-field">
                                                    <span className="p-float-label">
                                                        <InputText id="txtAuther" value={formik.values.Auther} onChange={formik.handleChange} />
                                                        <label htmlFor="txtAuther">Auther</label>
                                                    </span>
                                                    {formik.errors.Auther ? <ErrorDisplay Message={formik.errors.Auther}></ErrorDisplay> : null}
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-12">
                                            <div className="p-fluid">
                                                <div className="p-field">
                                                    <span className="p-float-label">
                                                        <InputNumber id="txtQuantity" value={formik.values.Quantity} onValueChange={formik.handleChange} mode="decimal" useGrouping={false} />
                                                        <label htmlFor="txtQuantity">Quantity</label>
                                                    </span>
                                                    {formik.errors.Auther ? <ErrorDisplay Message={formik.errors.Auther}></ErrorDisplay> : null}
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-12">
                                            <div className="p-fluid">
                                                <div className="p-field">
                                                    {/* <span className="p-float-label"> */}
                                                        
                                                        <InputNumber id="txtPrice" value={formik.values.Price} onValueChange={formik.handleChange} mode="currency" currency="INR" currencyDisplay="code" locale="en-IN" />
                                                        
                                                    {/* </span> */}
                                                    {formik.errors.Auther ? <ErrorDisplay Message={formik.errors.Auther}></ErrorDisplay> : null}
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-sm-12 col-md-3">
                                            <div className="p-fluid">
                                                <div className="p-field">
                                                    <span className="p-float-label">
                                                    <Calendar id="navigators" value={formik.values.PublishDate} onChange={formik.handleChange} monthNavigator yearNavigator yearRange="2010:2030"/>
                                                        <label htmlFor="txtPublishDate">Publish Date</label>
                                                    </span>
                                                    {formik.errors.Auther ? <ErrorDisplay Message={formik.errors.Auther}></ErrorDisplay> : null}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-sm-12 col-md-12">
                                            <div className="p-fluid float-md-end">
                                                <div className="p-field ">
                                                    <Button label="Submit" className="p-button-rounded p-button-warning" />
                                                </div>
                                            </div>   
                                        </div>
                                    </div>
                                </div>
                            </form>
                        )
                    }
                </Formik>
            </React.Fragment>
        )
    }
}