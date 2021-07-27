export const GetMMDDYYYYAsync= (date:Date|string): Promise<Date|string>=>{
    return new Promise((resolve,reject)=>{

        try
        {

            var today = new Date(date);
            var dd:number | string = today.getDate();
            var mm:number | string = today.getMonth() + 1;
            var yyyy = today.getFullYear();

            if (dd < 10)
                dd = '0' + dd
            if (mm < 10)
                mm = '0' + mm
            resolve( mm + '/' + dd + '/' + yyyy);

        }
        catch(ex)
        {
            reject(ex);
            throw ex;
        }

    });
}