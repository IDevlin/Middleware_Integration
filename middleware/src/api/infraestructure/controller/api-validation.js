import success from '../../../utils/responses.js'
import warning from '../../../utils/responses.js'


const getData = (res, rows)=> {
    try {
        if(Array.isArray(rows)){
            return success(res, 'FETCH', 200, rows)
        }else{
            if(rows){
                if(rows.code){
                   warning(res, rows.message, rows.code, rows.stack) 
                }else{
                    success(res, 'FETCH', 200, rows)
                }
            }
        }
    } catch (error) {
        return warning(res, error.message, 500, error)
    }
    }
    export default {
        getData
    }