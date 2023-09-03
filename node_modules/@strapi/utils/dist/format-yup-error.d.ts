import { ValidationError } from 'yup';
declare const formatYupErrors: (yupError: ValidationError) => {
    errors: {
        path: string[];
        message: string;
        name: string;
    }[];
    message: string;
};
export { formatYupErrors };
