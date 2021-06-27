import { RouteComponentProps } from "@reach/router";

interface IComponentProps extends RouteComponentProps {}

const AddUserPage = (props: IComponentProps) => {
  return <h1>AddUserPage user {props.path}</h1>;
};

export default AddUserPage;
