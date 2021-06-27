import { RouteComponentProps } from "@reach/router";

interface IComponentProps extends RouteComponentProps {
  userId?: string;
}

const EditUserPage = (props: IComponentProps) => {
  const { path, userId } = props;
  return (
    <h1>
      EditUserPage user {path} user {userId}
    </h1>
  );
};

export default EditUserPage;
