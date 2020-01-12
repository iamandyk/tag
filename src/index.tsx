import React, { useEffect } from "react";
import { Component } from "react";
import { render } from "react-dom";
import "./index.scss";

const App = () => {
  const [users, setUsers] = React.useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://randomuser.me/api/?results=10");
      const json = await res.json();

      setUsers(json.results);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      {users.map((user, index) => (
        <div key={index}>
          <img
            src={user.picture.large}
            alt={`${user.name.first} ${user.name.last}'s Avatar`}
          />
          <div>
            <div>{`${user.name.first} ${user.name.last}`}</div>
            <div>{`${user.location.state}, ${user.location.country}`}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

render(<App />, document.getElementById("root"));
