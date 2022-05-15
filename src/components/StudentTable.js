export const StudentTable = ({students}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>DOB</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {students && students.map((student, index) => (
                    <tr>
                        <td>{student.name}</td>
                        <td>{student.dob}</td>
                        <td>{student.city}</td>
                        <td>{student.state}</td>
                        <td>{student.zip}</td>
                        <td></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}