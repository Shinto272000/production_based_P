import { Table, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ListUserspage() {

    const [data, setData] = useState([])


    const fetchUsers = async () => {

        const response = await axios.get("http://localhost:8000/users")
        setData(response.data)
    }

    useEffect(() => {
        fetchUsers();
    }, [])
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map(
                        (user, index) => <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>
                                <Link to={"users/"+user.id}>
                                    <button variant="primary" size='5m'> view</button>
                                </Link>
                                {''}
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </Table>
    )


}
export default ListUserspage