import React, {useEffect} from 'react';

export default function Home(){
    useEffect(() => {
        fetch('api/students')
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    },[])

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

            </section>
        </React.Fragment>
        
    )
}
