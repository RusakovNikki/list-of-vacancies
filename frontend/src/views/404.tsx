import { typography } from '@scripts/gds';
import { useTitle } from '@scripts/hooks/useTitle';

const NotFoundPage = () => {
    const titleStyles = useTitle;

    return (
        <div css={{ textAlign: 'center' }}>
            <p css={titleStyles}>Такая страница не найдена</p>
            <span css={{ ...typography('h1') }}>🤧</span>
        </div>
    );
};

export default NotFoundPage;
