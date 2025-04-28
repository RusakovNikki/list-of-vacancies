import { Interpolation, Theme } from '@emotion/react';

interface IButtonProps
    extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    isSmall?: boolean;
}

const Button = ({ isSmall = false, ...otherProps }: IButtonProps) => {
    const result: Interpolation<Theme> = {
        width: '226px',
        fontSize: '14px',
        lineHeight: '160%',
        textAlign: 'center',
        color: '#ffffff',
        padding: '11px',
        backgroundColor: 'black',
        border: 'none',
        cursor: 'pointer',
    };

    if (isSmall) {
        result.width = '150px';
        result.padding = '5px';
    }
    return <button {...otherProps} css={result}></button>;
};

export default Button;
