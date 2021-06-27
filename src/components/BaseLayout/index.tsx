import { Link as RouterLink, RouteComponentProps } from "@reach/router";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import RoutePaths from "../../routing/RoutePaths";

interface IComponentProps extends RouteComponentProps {
  children: React.ReactNode;
}
const BaseLayout = ({ children }: IComponentProps) => {
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Link component={RouterLink} to={RoutePaths.userList}>
            <Typography variant="h6" color="textPrimary" noWrap>
              Users List
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>

      <main>{children}</main>
    </>
  );
};

export default BaseLayout;
