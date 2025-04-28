import { useMedia } from '@scripts/hooks/useMedia';

type FormItemProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const FormItem = (props: FormItemProps) => {
    const { xxs, md } = useMedia();
    return (
        <div
            {...props}
            css={{
                maxWidth: '466px',
                height: '67px',
                width: '100%',

                [md]: {
                    width: '128px',
                    marginBottom: '16px',
                },

                [xxs]: {
                    width: '272px',
                    marginBottom: '16px',
                },
            }}
        />
    );
};

export default FormItem;
