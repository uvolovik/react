import React from "react";
import MainNav from "./MainNav";
import "./SiteNavigation.scss";

type SiteNavigationProps = {
  loggedIn?: boolean;
};

const SiteNavigation = ({ loggedIn }: SiteNavigationProps) => {
  const navItem = ["Docs", "Tutorial", "Blog"];

  const listItem = navItem.map((item, key) => (
    <li key={key} className={key === 0 ? "active" : ""}>
      <a href="/item">{item}</a>
    </li>
  ));

  const loginButton = () => <button className="btn">Login</button>;

  const logoutButton = () => <button className="btn logged">Logout</button>;

  return (
    <div className="header">
      <MainNav tabs vertical aligment="left">
        {listItem}
        {loggedIn && (
          <li>
            <a href="/account">Account</a>
          </li>
        )}
      </MainNav>
      {loggedIn ? logoutButton() : loginButton()}
    </div>
  );
};

export default SiteNavigation;
