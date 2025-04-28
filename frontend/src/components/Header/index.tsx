import { css } from '@emotion/react';
import Link from 'next/link';
import React from 'react';

import { useTitle } from '@scripts/hooks/useTitle';

const Header = () => {
    const titleStyles = useTitle();

    return (
        <header
            css={{
                width: 'inherit',
                minHeight: '304px',
                border: '1px solid transparent',
                marginBottom: '30px',
            }}
        >
            <Link href="/">
                <h1 css={titleStyles} style={{ marginTop: '81px', marginBottom: '74px' }}>
                    List of vacancies
                </h1>
            </Link>
        </header>
    );
};

export default Header;
