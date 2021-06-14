import React, { useEffect, useState } from "react";
import "./UserResults.css";

export default function UserResults({ user, repos }) {
  console.log(repos);
  return (
    <div className="c-user-results">
      <div className="c-user-results__informations">
        <img
          className="c-user-results__username-info__img"
          alt="github user logo"
          src={user.avatar_url}
        />
      </div>
      <div className="c-user-results__username-info__info">
        <div className="info__neme-login">
          <div className="username-info__info_name">{user.name}</div>
          <div className="user">{user.login}</div>
        </div>

        {user.bio && <div className="user">Bio: {user.bio}</div>}
        {user.location && <div className="user">Location: {user.location}</div>}

        <div className="user">Repositories: </div>
        <ul>
          {repos.map((repo) => (
            <li className="repositories" key={repo.id}>
              <a target="about:blank" className="repositories_name" href={repo.html_url}>
                {repo.name}
              </a>
              <div>{repo.description}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
