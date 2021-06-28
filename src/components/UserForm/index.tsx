import { useFormik } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import userFormSchema from '../../validatoinSchemas/user/userFormValidationSchema';
import { useDispatch } from 'react-redux';
import addUserAction from '../../actions/user/addNewUserAction';

const UserForm = () => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            email: '',
            avatar: '',
        },
        validationSchema: userFormSchema,
        onSubmit: async (values) => {
            await dispatch(addUserAction(values));
        },
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="first_name"
                    name="first_name"
                    label="First Name"
                    value={formik.values.first_name}
                    onChange={formik.handleChange}
                    error={
                        formik.touched.first_name &&
                        Boolean(formik.errors.first_name)
                    }
                    helperText={
                        formik.touched.first_name && formik.errors.first_name
                    }
                />
                <TextField
                    fullWidth
                    id="last_name"
                    name="last_name"
                    label="Last Name"
                    value={formik.values.last_name}
                    onChange={formik.handleChange}
                    error={
                        formik.touched.last_name &&
                        Boolean(formik.errors.last_name)
                    }
                    helperText={
                        formik.touched.last_name && formik.errors.last_name
                    }
                />
                <TextField
                    fullWidth
                    id="avatar"
                    name="avatar"
                    label="Avatar"
                    value={formik.values.avatar}
                    onChange={formik.handleChange}
                    error={
                        formik.touched.avatar && Boolean(formik.errors.avatar)
                    }
                    helperText={formik.touched.avatar && formik.errors.avatar}
                />
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <Button
                    color="primary"
                    variant="contained"
                    fullWidth
                    type="submit">
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default UserForm;
