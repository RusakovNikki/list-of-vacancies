import { useTitle } from '@/hooks/useTitle';

const NotFoundPage = () => {
    const titleStyles = useTitle;

    return (
        <div css={{ textAlign: 'center' }}>
            <p css={titleStyles}>Такая страница не найдена</p>
            <span css={{ fontSize: '50px' }}>🤧</span>
        </div>
    );
};

export default NotFoundPage;
