import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import propertiesReducer from './reducer-properties';

const rootReducer = combineReducers({
    form: formReducer,
    properties: propertiesReducer
});

export default rootReducer;