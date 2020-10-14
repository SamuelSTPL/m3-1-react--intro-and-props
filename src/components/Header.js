import React from "react";

import "./Header.css";

const Header = (props) => {
  console.log(props);
  return (
    <header>
      {props.users.filter((person) => {
        if (person.username !== props.currentUser.username) {
          return true;
        } else {
          return false;
        }
      }).map(user => {
        return (
          <div className="headerPerson">
            <img src={user.avatar} className="headerImages"/>
            <p>{user.username}</p>
          </div>
        )
      })  
    }
    </header>
  );
};
export default Header;
