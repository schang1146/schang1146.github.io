import axios from 'axios';

// add additional actions with:
// export const ${action_name} = '${action_name}';

export const GET_PROJECT_FAILURE = 'GET_PROJECT_FAILURE';
export const GET_PROJECT_START = 'GET_PROJECT_START';
export const GET_PROJECT_SUCCESS = 'GET_PROJECT_SUCCESS';
export const DELETE_PROJECT_FAILURE = 'DELETE_PROJECT_FAILURE';
export const DELETE_PROJECT_START = 'DELETE_PROJECT_START';
export const DELETE_PROJECT_SUCCESS = 'DELETE_PROJECT_SUCCESS';
export const POST_PROJECT_FAILURE = 'POST_PROJECT_FAILURE';
export const POST_PROJECT_START = 'POST_PROJECT_START';
export const POST_PROJECT_SUCCESS = 'POST_PROJECT_SUCCESS';
export const PUT_PROJECT_FAILURE = 'PUT_PROJECT_FAILURE';
export const PUT_PROJECT_START = 'PUT_PROJECT_START';
export const PUT_PROJECT_SUCCESS = 'PUT_PROJECT_SUCCESS';

export const getProjects = () => (dispatch) => {
    dispatch({ type: GET_PROJECT_START });
    return axios
        .get(`http://localhost:5000/api/projects`)
        .then((res) => {
            dispatch({ type: GET_PROJECT_SUCCESS, payload: res });
        })
        .catch((err) => dispatch({ type: GET_PROJECT_FAILURE }));
};

export const deleteProject = () => (dispatch) => {
    dispatch({ type: DELETE_PROJECT_START });
};

export const postProject = () => (dispatch) => {
    dispatch({ type: POST_PROJECT_START });
};

export const putProject = () => (dispatch) => {
    dispatch({ type: PUT_PROJECT_START });
};
