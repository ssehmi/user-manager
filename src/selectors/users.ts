import { createSelector } from "reselect";
import { RootState } from "../store/configureStore";

export const selectUsers = (state: RootState) => state.users;

/*
 * Usage: useSelector((state) => selectUserById(state, 'IdOfUser'))
 *
 */
export const selectUserById = createSelector(
  selectUsers,
  (_: any, id: number | string) => id,
  (users, id) => {
    return users.find((user) => user.id.toString() === id);
  }
);
