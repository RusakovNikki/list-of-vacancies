import Link from 'next/link';
import React from 'react';

import { typography } from '@scripts/gds';

const Header = () => {
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
                <h1 css={{ ...typography('h1') }} style={{ marginTop: '81px', marginBottom: '74px' }}>
                    List of vacancies
                </h1>
            </Link>
        </header>
    );
};

export default Header;
