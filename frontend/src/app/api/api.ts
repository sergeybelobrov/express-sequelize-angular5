import * as querystring from "querystring";
import * as url from "url";

import * as isomorphicFetch from "isomorphic-fetch";
import * as assign from "core-js/library/fn/object/assign";

interface Dictionary<T> { [index: string]: T; }
export interface FetchAPI { (url: string, init?: any): Promise<any>; }

const BASE_PATH = "http://127.0.0.1:3000".replace(/\/+$/, "");

export interface FetchArgs {
    url: string;
    options: any;
}

export class BaseAPI {
    basePath: string;
    fetch: FetchAPI;

    constructor(fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) {
        this.basePath = basePath;
        this.fetch = fetch;
    }
};

export interface InlineResponse2004Results {
    "id"?: string;
    "name"?: string;
    "description"?: string;
    "status"?: string;
}
/**
 * ProjectApi - fetch parameter creator
 */
export const ProjectApiFetchParamCreator = {

    projectCreate(params: {  "data"?: InlineResponse2004Results; }, options?: any): FetchArgs {
        const baseUrl = `/api/projects/`;
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "POST" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["data"]) {
            fetchOptions.body = JSON.stringify( params.data);
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },

    projectDelete(params: {  "data"?: InlineResponse2004Results; }, options?: any): FetchArgs {

        const baseUrl = `/api/projects/`;
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "DELETE" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["data"]) {
            fetchOptions.body = JSON.stringify( params.data);
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },

    projectList(options?: any): FetchArgs {
        const baseUrl = `/api/projects/`;
        let urlObj = url.parse(baseUrl, true);
        urlObj.query = assign({}, urlObj.query);
        let fetchOptions: RequestInit = assign({}, { method: "GET" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },


    projectUpdate(params: {  "data"?: InlineResponse2004Results; }, options?: any): FetchArgs {
        // verify required parameter "id" is set
        const baseUrl = `/api/projects/`;
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = assign({}, { method: "PATCH" }, options);

        let contentTypeHeader: Dictionary<string> = {};
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["data"]) {
            fetchOptions.body = JSON.stringify(params["data"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = assign({}, contentTypeHeader, fetchOptions.headers);
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
};


export const ProjectApiFp = {

    projectCreate(params: { "data"?: InlineResponse2004Results;  }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<any> {

        const fetchArgs = ProjectApiFetchParamCreator.projectCreate(params, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response;
                } else {
                    throw response;
                }
            });
        };
    },

    projectDelete(params: { "data"?: InlineResponse2004Results;  }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<any> {
        const fetchArgs = ProjectApiFetchParamCreator.projectDelete(params, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response;
                } else {
                    throw response;
                }
            });
        };
    },

    projectList( options?: any): (fetch?: FetchAPI, basePath?: string) => Promise< Array<InlineResponse2004Results> > {
        const fetchArgs = ProjectApiFetchParamCreator.projectList(options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },

    projectUpdate(params: { "data"?: InlineResponse2004Results;  }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<any> {
        const fetchArgs = ProjectApiFetchParamCreator.projectUpdate(params, options);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response;
                } else {
                    throw response;
                }
            });
        };
    },
};

export class ProjectApi extends BaseAPI {

    projectCreate(params: {  "data"?: InlineResponse2004Results; }, options?: any) {
        return ProjectApiFp.projectCreate(params, options)(this.fetch, this.basePath);
    }

    projectDelete(params: {  "data": InlineResponse2004Results; }, options?: any) {
        return ProjectApiFp.projectDelete(params, options)(this.fetch, this.basePath);
    }

    projectList(options?: any) {
        return ProjectApiFp.projectList(options)(this.fetch, this.basePath);
    }

    projectUpdate(params: {  "data"?: InlineResponse2004Results; }, options?: any) {
        return ProjectApiFp.projectUpdate(params, options)(this.fetch, this.basePath);
    }
};


