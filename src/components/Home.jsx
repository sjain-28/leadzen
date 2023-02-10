import React, { useEffect, useState } from 'react';
// import "./home.css";
import Data from './Data';
import Pagination from './Pagination';
const Home = () => {
    const [users, setUsers] = useState([]);
    const [currentPage,setCurrentpage]= useState(1);
    const [usersPerPage] = useState(3);

    const getDetails = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            setUsers(data)
            console.log(data);
            console.log(data[0].name);
        }
        catch (e) {
            console.log(e);
        }

    }


    useEffect(() => {
        getDetails();
    }, []);
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser,indexOfLastUser);

    const paginate = (pageNumber) => {
        setCurrentpage(pageNumber); 
    }

    // console.log("user is:", users);
    return (
        <>
            <div className="container">

                <Data users={currentUsers} />
                <Pagination usersPerPage={usersPerPage} totalUsers={users.length} paginate={paginate} />
            </div>
            
        </>
    );
}

export default Home;
