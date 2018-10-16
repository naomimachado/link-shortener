//The API class to make backend requests

import store from '../store';
import $ from 'jquery';

class ApiClass{
    shortenLink(data) {
        let URL = " http://localhost:8080/api/shortenUrl";
        let link = {
            "longLink": data
        };
        $.ajax(URL,
            {
                method:"post",
                contentType: "application/json; charset=UTF-8",
                data: JSON.stringify(link),
                success: (resp) => {
                    store.dispatch({
                        type: 'SHORT_LINK',
                        data: resp
                    })
                    store.dispatch({
                        type: 'CLEAR_ERROR',
                    })
                },
                error: (resp) => {
                    store.dispatch({
                        type: 'ERROR',
                        data: resp.responseText
                    })
                    store.dispatch({
                        type: 'CLEAR_SHORT_LINK',
                    })
                }
            });
    }
}

export default new ApiClass();