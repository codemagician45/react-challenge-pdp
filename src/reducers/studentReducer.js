import * as actions from '../actions/studentActions';

const initialState = {
    students: [],
    loading: false,
    hasErrors: false
}

const studentReducer = (state = initialState, action) => {
    switch(action.type){
        case (actions.GET_STUDENTS): 
            return {...state, loading:true}
        case (actions.GET_STUDENTS_SUCCESS):
            return {students:action.payload, loading:false, hasErrors:false}
        case (actions.GET_STUDENTS_FAILURE):
            return {...state, hasErrors:true}
        default:
            return state;
    }
}

export default studentReducer;