import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, Table } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

export default function ViewUserpage() {

    const {userid} = useParams();

    const [user, setUser] = useState(undefined);

    const fetchUser = async () => {

        try {
            const response = await axios.post("http://localhost:8000/users/"+userid);
            setUser(response.data);
        }catch(error){
            console.error("error fetching user",error)

        }    
    }
    useEffect(() => { fetchUser() }, [userid]);

    if (user === undefined)
        return <div>Loading</div>
    return (<Card>
        <Table>
            <tbody>
                <tr>
                    <td>id</td>
                    <td>{userid}</td>
                </tr>
                <tr>
                    <td>name</td>
                    <td>dasd</td>
                </tr>
                <tr>
                    <td>age</td>
                    <td> 17</td>
                </tr>
            </tbody>
        </Table>
    </Card>

    )
}
