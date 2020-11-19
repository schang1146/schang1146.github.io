import { GET_PROJECT_FAILURE, GET_PROJECT_START, GET_PROJECT_SUCCESS, DELETE_PROJECT_FAILURE, DELETE_PROJECT_START, DELETE_PROJECT_SUCCESS, POST_PROJECT_FAILURE, POST_PROJECT_START, POST_PROJECT_SUCCESS, PUT_PROJECT_FAILURE, PUT_PROJECT_START, PUT_PROJECT_SUCCESS } from '../actions';

const initialState = {
    isGettingProjects: false,
    isDeletingProject: false,
    isPostingProject: false,
    isPuttingProject: false,
    error: '',
    projects: [],
};

export const projectsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PROJECT_FAILURE:
            return {
                ...state,
                isGettingProjects: false,
            };
        case GET_PROJECT_START:
            return {
                ...state,
                isGettingProjects: true,
            };
        case GET_PROJECT_SUCCESS:
            return {
                ...state,
                isGettingProjects: false,
                projects: action.payload.data,
            };
        case DELETE_PROJECT_FAILURE:
            return {
                ...state,
                isDeletingProject: false,
            };
        case DELETE_PROJECT_START:
            return {
                ...state,
                isDeletingProject: true,
            };
        case DELETE_PROJECT_SUCCESS:
            return {
                ...state,
                isDeletingProject: false,
            };
        case POST_PROJECT_FAILURE:
            return {
                ...state,
                isPostingProject: false,
            };
        case POST_PROJECT_START:
            return {
                ...state,
                isPostingProject: true,
            };
        case POST_PROJECT_SUCCESS:
            return {
                ...state,
                isPostingProject: false,
            };
        case PUT_PROJECT_FAILURE:
            return {
                ...state,
                isPuttingProject: false,
            };
        case PUT_PROJECT_START:
            return {
                ...state,
                isPuttingProject: true,
            };
        case PUT_PROJECT_SUCCESS:
            return {
                ...state,
                isPuttingProject: false,
            };
        default:
            return state;
    }
};
