import React from "react"



export const NoRecordFound=():JSX.Element=>{

    return (
        <React.Fragment>
            <div className="col-12">
                <div className="alert alert-danger" role="alert">
                    No Records Found
                </div>
            </div>
        </React.Fragment>
    )
}

