import React, {useEffect} from 'react';
import { connect, useDispatch } from 'react-redux';
import { fetchStudents } from '../actions/studentActions';
import { StudentTable } from './StudentTable';

const mapStateToProps = (state) => ({
    loading: state.students.loading,
    students: state.students.students,
    hasErrors: state.students.hasErrors
})

const Home = ({loading, students, hasErrors}) =>{
    const dispatch = useDispatch()
    useEffect(() => {   
        dispatch(fetchStudents())
    }, [dispatch])

    const renderStudents = () => {
        if(loading) return <h5>Loading...</h5>
        if(hasErrors) return <h5>Unable to display students</h5>
        return <StudentTable students={students}/>
    }
    return (
        <React.Fragment>
            <section className="home-background d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div>
                                <h1>THE ANNUAL CONFERENCE</h1>
                                <h5 className="mt-5">GRAND SPACE. PORTLAND. 21-26 SEPT</h5>
                                <h5>2014</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="students-table">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {renderStudents()}
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default connect(mapStateToProps)(Home)