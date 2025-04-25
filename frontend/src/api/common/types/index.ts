export interface Config<T> {
    data?: T;
    headers?: Record<string, string>;
    method?: 'GET' | 'POST' | 'PATCH' | 'DELETE' | 'PUT';
}
