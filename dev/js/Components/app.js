import React from 'react';
import UserList from "../Controller/user-list";
import ActiveUserList from "../Controller/detail-list";
require("../../scss/style.scss");

const app = () => (
    <div>
        <h2> Username List: </h2>
        <UserList />
        <hr />
        <h2> User Detail </h2>
        <ActiveUserList />
    </div>
);

export default app;