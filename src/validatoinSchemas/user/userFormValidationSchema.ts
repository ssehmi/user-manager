import * as yup from 'yup';

const userFormValidationSchema = yup.object({
    email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
    first_name: yup.string().required('First name is required'),
    last_name: yup.string().required('Last name is required'),
    avatar: yup.string().required('avatar url is required'),
});

export default userFormValidationSchema;
