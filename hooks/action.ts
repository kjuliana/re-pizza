import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {githubActions} from "../store/github/github.slice";
import {basketActions} from "../store/basket.slice";

const actions = {
    ...githubActions,
    ...basketActions
}

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch);
}