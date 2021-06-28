import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { RouteComponentProps } from '@reach/router';
import getUsersAction from '../../../actions/user/getUsersAction';
import { useAppSelector } from '../../../store/hooks/appHooks';
import { selectUsers } from '../../../selectors/users';
import useStyles from './pageStyles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import UserCard from '../../../components/UserCard';
import ItemList from '../../../components/ItemList';
import UserForm from '../../../components/UserForm';

interface IComponentProps extends RouteComponentProps {}

const ListUserPage = (props: IComponentProps) => {
    const dispatch = useDispatch();
    const users = useAppSelector(selectUsers);
    const classes = useStyles();
    const [showUserForm, setShowUserForm] = useState(false);

    const toggleForm = () => {
        setShowUserForm((prev) => !prev);
    };

    useEffect(() => {
        if (users.length === 0) {
            dispatch(getUsersAction());
        }
    }, [dispatch, users.length]);

    return (
        <>
            <div className={classes.heroContent}>
                <Container maxWidth="sm">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="textPrimary"
                        gutterBottom>
                        List of users
                    </Typography>
                    <Typography
                        variant="h5"
                        align="center"
                        color="textSecondary"
                        paragraph>
                        Click on a user to view full user details. You can edit
                        or remove users from the details page.
                    </Typography>
                    <div className={classes.heroButtons}>
                        <Grid container justify="center">
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={toggleForm}>
                                {showUserForm ? 'Close Form' : 'Add New User'}
                            </Button>
                        </Grid>
                    </div>
                    {showUserForm && <UserForm />}
                </Container>
            </div>
            <Container className={classes.cardGrid} maxWidth="md">
                {users.length > 0 && (
                    <ItemList
                        baseUrl="user/details"
                        items={users}
                        renderItem={UserCard}
                    />
                )}
            </Container>
        </>
    );
};

export default ListUserPage;
