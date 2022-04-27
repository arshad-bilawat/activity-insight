import axios from "axios";


const get = async (url: string, headers: any) => {


    if (!url) return { message: "url missing!" };

    //additional header for get request and other in process
    if (!headers) headers = {};

    return await axios
        .get(url, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type",
                ...headers
            },
        })
        .then((res) => ({ success: true, data: res.data }))
        .catch((error) => ({ success: false, error: error }));


};

const post = async (url: string, headers: any, body: any) => {


    if (!url) return { message: "url missing!" };

    if (!body) body = {};
    //additional header for get request and other in process
    if (!headers) headers = {};

    return await axios
        .post(url, body, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type", ...headers
            },
        })
        .then((res) => ({ success: true, data: res.data }))
        .catch((error) => ({ success: false, error: error }));

};

const deleteRequest = async (url: string, headers: any, body: any) => {


    if (!url) return { message: "url missing!" };
    if (!body) body = {};

    //additional header for get request and other in process
    if (!headers) headers = {};

    var config = {
        method: 'delete',
        url: url,
        headers: {
            'Content-Type': 'application/json'
        },
        data: body
    };

    return axios(config)
        .then((res) => ({ success: true, data: res.data }))
        .catch((error) => ({ success: false, error: error }));
};

const put = async (url: string, headers: any, body: any) => {


    if (!url) return { message: "url missing!" };

    if (!body) body = {};

    //additional header for get request and other in process
    if (!headers) headers = {};

    return axios
        .put(url, body, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type", ...headers
            },
        })
        .then((res) => ({ success: true, data: res.data }))
        .catch((error) => ({ success: false, error: error }));



};


export {
    get, post, put, deleteRequest
} 