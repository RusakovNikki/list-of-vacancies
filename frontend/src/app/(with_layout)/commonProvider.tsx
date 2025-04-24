'use client';

import { ThemeProvider } from '@greensight/gds/emotion';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import theme from './theme';

const queryClient = new QueryClient();

const CommonComponent = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};

export default CommonComponent;
