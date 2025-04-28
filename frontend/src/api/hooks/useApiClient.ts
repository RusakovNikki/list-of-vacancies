import { useMemo } from 'react';

import { APIClient } from '..';

export const useApiClient = (url: string = '/api/') => {
    return useMemo(() => new APIClient(url), [url]);
};
