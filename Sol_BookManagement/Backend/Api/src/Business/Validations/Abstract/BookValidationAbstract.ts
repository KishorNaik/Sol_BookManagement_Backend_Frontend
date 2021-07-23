import {check,ValidationChain,validationResult } from "express-validator";

export default abstract class BookValidationAbstract{

    protected BookIdentityValidation=():ValidationChain=>{
        return check('BookIdentity').isUUID();
    }

    protected BookNameValidation=():ValidationChain=>{
        return check('BookName').notEmpty().withMessage("Book name required");
    }

    protected AutherValidation=():ValidationChain=>{
        return check('Auther').notEmpty().withMessage("Auther name required");
    }

    protected QuantityValidation=():ValidationChain=>{
        return check('Quantity')
                    .notEmpty().withMessage("Quantity required")
                    .isNumeric().withMessage("Quantity must be numeric")
                    .custom((value)=>{
                        if(typeof(value)==="number"){
                            if((<number>value)>=0){
                                return true;
                            }
                        }
                        return false;
                    }).withMessage("Quantity must be Positive number");
                    
    }
    protected PriceValidation=():ValidationChain=>{
        return check('Price')
                .notEmpty().withMessage("Price Required")
                .isCurrency()
                .custom((value)=>{
                    if(typeof(value)==="number"){
                        if((<number>value)>=0){
                            return true;
                        }
                       
                    }
                    return false;
                }).withMessage("Price must be Positive number");
    }

    protected PublishDateValidation=():ValidationChain=>{
        return check('PublishDate')
                    .notEmpty().withMessage('Publish Date Required')
                    .isDate({format:"MM/DD/YYYY"}).withMessage("It must be date")
                    .custom((value)=>{
                        
                        let publishDate:Date=new Date(value);
                        let nowDate:Date=new Date();

                        if(publishDate.getDate()<=nowDate.getDate()){
                            return true;
                        }
                        return false;
                    }).withMessage("Publish date should not be future date");
    }

}