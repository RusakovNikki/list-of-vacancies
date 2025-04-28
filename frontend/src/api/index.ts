import { Config } from '@api/common/types';

export class APIClient {
    private baseURL: string;

    constructor(baseURL: string) {
        this.baseURL = baseURL;
    }

    static async returnJSON(response: Response) {
        const json = await response.json();

        if (!response.ok) {
            const errorMessage = 'Request failed';

            throw new Error(errorMessage);
        }
        return json;
    }

    protected async request<T>(endpoint: string, { method, data, headers }: Config<T>) {
        const response = await fetch(`${this.baseURL}${endpoint}`, {
            ...(data && { body: JSON.stringify(data) }),
            method,
            headers,
        });

        return response;
    }

    public async post<T>(endpoint: string, { data, headers }: Config<T>) {
        return this.request<T>(endpoint, { method: 'POST', data, headers }).then(APIClient.returnJSON);
    }

    public async delete<T>(endpoint: string) {
        return await this.request<T>(endpoint, { method: 'DELETE' }).then(APIClient.returnJSON);
    }
}
