import { Container, Grid } from '@material-ui/core';
import { RouteComponentProps } from '@reach/router';
import UserForm from '../../../components/UserForm';
import { selectUserById } from '../../../selectors/users';
import { useAppSelector } from '../../../store/hooks/appHooks';

interface IComponentProps extends RouteComponentProps {
    userId?: string;
}

const EditUserPage = (props: IComponentProps) => {
    const { userId = '', navigate } = props;
    const user = useAppSelector((state) => selectUserById(state, userId));
    return (
        <Container maxWidth="lg">
            <Grid item xs={12} md={6}>
                <UserForm
                    mode="edit"
                    initialValue={user}
                    onSubmitSuccess={() =>
                        navigate && navigate(`/user/details/${userId}`)
                    }
                />
            </Grid>
        </Container>
    );
};

export default EditUserPage;
