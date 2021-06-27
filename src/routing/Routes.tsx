import { Router } from "@reach/router";
import RoutePaths from "./RoutePaths";
import BaseLayout from "../components/BaseLayout";
import pages from "../pages";

const { AddUserPage, EditUserPage, ListUsersPage, UserDetailsPage } = pages;

const Routes = () => {
  return (
    <Router>
      <BaseLayout default path="/">
        <ListUsersPage default path={RoutePaths.userList} />
        <AddUserPage path={RoutePaths.addUser} />
        <EditUserPage path={RoutePaths.editUser} />
        <UserDetailsPage path={RoutePaths.userDetails} />
      </BaseLayout>
    </Router>
  );
};

export default Routes;
