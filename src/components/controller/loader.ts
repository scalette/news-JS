import {
    Callback,
    GetRespProperties,
    GetRespPropertiesAdditionalOptions,
    LoaderOptions,
    Method,
} from '../../types/interfaces';

class Loader {
    protected baseLink: string;
    protected options: LoaderOptions;

    constructor(baseLink: string, options: LoaderOptions) {
        console.log('adqwd', baseLink);
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options = {} }: GetRespProperties,
        callback: Callback = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load(Method.Get, endpoint, callback, options);
    }

    errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: GetRespPropertiesAdditionalOptions, endpoint: string): string {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        console.log(url, this.baseLink);
        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(method: Method, endpoint: string, callback: Callback, options: GetRespPropertiesAdditionalOptions = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
