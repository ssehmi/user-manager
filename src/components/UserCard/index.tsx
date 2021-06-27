import { Typography } from '@material-ui/core';
import UserCardItem from './UserCardItem';
import UserCardMedia from './UserCardMedia';
import UserCardContent from './UserCardContent';
import { User } from '../../types/User';

interface ComponentProps extends User {
    children?: React.ReactNode;
}

const UserCard = ({
    first_name,
    last_name,
    avatar,
    email,
    children,
}: ComponentProps) => {
    return (
        <UserCardItem>
            <UserCardMedia image={avatar} title="Image title" />
            <UserCardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {`${first_name} ${last_name}`}
                </Typography>
                <Typography gutterBottom component="p">
                    {email}
                </Typography>
            </UserCardContent>
            {children}
        </UserCardItem>
    );
};

export default UserCard;
