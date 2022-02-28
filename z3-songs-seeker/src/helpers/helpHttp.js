export const helpHttp = () => {
    const customFetch = (url, options) => {
        const defaultHeader = {
            accept: 'application/json'
        }

        const controller = new AbortController();
        options.signal = controller.signal; /* Si no se obtiene respuesta del servidor
        se utiliza esto para parar la petición */

        options.method = options.method || "GET";

        options.headers = options.headers 
        ? {...defaultHeader, ...options.headers} 
        : defaultHeader;

        options.body = JSON.stringify(options.body) || false;
        if(!options.body) delete options.body; 

        console.log(options);

        setTimeout(() => {
            controller.abort()
        }, 3000);
        /* controlamos cuanto tiempo esperamos la respuesta del servidor, sino abortamos. */

        return fetch(url, options)
        .then(res => 
            res.ok 
            ? res.json() 
            : Promise.reject({
            err:true,
            status: res.status || '00',
            statusText: res.status.statusText || 'Ocurrió un error'
        }))
        .catch((err) => err);
    }



    const get= (url, options = {}) => customFetch(url, options);

    const post = (url, options = {}) => {
        options.method = 'POST';

        return customFetch(url, options)
    };

    const put = (url, options = {}) => {
        options.method = 'PUT';

        return customFetch(url,options);
    };

    const del = (url, options = {}) => {
        options.method = 'DELETE';

        return customFetch(url,options);
    }

    return {
        get, post, put, del
    };
};