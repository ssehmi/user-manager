import { TypedUseSelectorHook, useSelector } from "react-redux";
import type { RootState } from "../configureStore";

// export typed versions of useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
