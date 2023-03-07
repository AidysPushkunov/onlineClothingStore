import React from "react";
import { Navigate } from "react-router";

const Admin = (props) => {



    return (
        <>
            {
                    !props.currentUser?.root ? <Navigate to={'/'} /> : 
                    
                    <>
                        Добавить товар
                    </>
            }
        </>
    )
}

export default Admin;