import { combineReducers } from 'redux';
// add additional reducers with:
// import { ${reducer_name} } from ${reducer_location};
import { projectsReducer } from './projectsReducer';

export default combineReducers({
    // add additional reducers with:
    // ${reducer_name},
    projectsReducer,
});
