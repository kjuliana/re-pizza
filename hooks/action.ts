import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {githubActions} from "../store/github/github.slice";
import {basketActions} from "../store/basket.slice";
import {searchActions} from "../store/searchSlice";


export const useGithubActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(githubActions, dispatch);
}

export const useBasketActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(basketActions, dispatch);
}

export const useSearchActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(searchActions, dispatch);
}