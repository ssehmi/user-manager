import {
    Typography,
    Container,
    Grid,
    CardActions,
    Button,
} from '@material-ui/core';
import { RouteComponentProps } from '@reach/router';
import { useDispatch } from 'react-redux';
import UserCard from '../../../components/UserCard';
import { selectUserById } from '../../../selectors/users';
import { useAppSelector } from '../../../store/hooks/appHooks';
import removeUserAction from '../../../actions/user/removeUserAction';
import RoutePaths from '../../../routing/RoutePaths';

interface IComponentProps extends RouteComponentProps {
    userId?: string;
}

const UserDetailPage = (props: IComponentProps) => {
    const { userId = '', navigate } = props;
    const dispatch = useDispatch();

    const user = useAppSelector((state) => selectUserById(state, userId));

    const navigateToEdit = () => {
        navigate && navigate(`/user/edit/${userId}`);
    };

    const removeUser = async () => {
        await dispatch(removeUserAction(userId));
        navigate && navigate(RoutePaths.userList);
    };

    return (
        <Container maxWidth="lg">
            <Grid item xs={12} md={6}>
                {user ? (
                    <UserCard
                        id={user.id}
                        email={user.email}
                        avatar={user.avatar}
                        first_name={user.first_name}
                        last_name={user.last_name}>
                        <CardActions>
                            <Button
                                size="small"
                                color="primary"
                                onClick={navigateToEdit}>
                                Edit
                            </Button>
                            <Button
                                size="small"
                                color="primary"
                                onClick={removeUser}>
                                Remove
                            </Button>
                        </CardActions>
                    </UserCard>
                ) : (
                    <Typography>User not found</Typography>
                )}
            </Grid>
        </Container>
    );
};

export default UserDetailPage;
