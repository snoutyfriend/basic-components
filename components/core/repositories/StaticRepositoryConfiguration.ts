import {StaticUrlConfiguration} from "../interfaces/StaticUrlConfiguration";

export class StaticRepositoryConfiguration implements StaticUrlConfiguration{
    constructor(private baseUrl: string) {}

    public getBaseUrl(): string {
        return this.baseUrl;
    }
}
