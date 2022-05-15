import axios from "axios"

// Create Redux action types
export const GET_STUDENTS = 'GET_STUDENTS'
export const GET_STUDENTS_SUCCESS = 'GET_STUDENTS_SUCCESS'
export const GET_STUDENTS_FAILURE = 'GET_STUDENTS_FAILURE'

// Create Redux action creators that return an action

export const getStudents = () => ({
    type: GET_STUDENTS
})

export const getStudentsSuccess = (students) => ({
    type: GET_STUDENTS_SUCCESS,
    payload: students
})

export const getStudentsFailure = () => ({
    type: GET_STUDENTS_FAILURE
})

// Combine them all in an asynchronous thunk
export const fetchStudents = () => {
    return async (dispatch) => {
        dispatch(getStudents())
        try {
            axios.get('api/students').then((response) => {
                dispatch(getStudentsSuccess(response.data))
            });
        } catch (err) {
            dispatch(getStudentsFailure())
        }
    }
}

