import { combineReducers } from "redux";
import type StoreState from "../types/StoreState";
import users from "./users";

export default combineReducers<StoreState>({ users });
