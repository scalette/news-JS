export interface LoaderOptions {
    apiKey: string;
}

export interface LoaderOptions {
    apiKey: string;
}

export interface GetRespPropertiesAdditionalOptions {
    sources?: string;
}
export interface GetRespProperties {
    endpoint: string;
    options?: GetRespPropertiesAdditionalOptions;
}

export enum Method {
    Get = 'GET',
    Post = 'POST',
}

export type Callback = (e: Event) => void;
