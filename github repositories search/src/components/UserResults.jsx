import React, { useEffect, useState } from "react";

export default function UserResults({ user, onReset }) {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(user.repos_url)
      .then((res) => res.json())
      .then((json) => setRepos(json))
      .catch((error) => setError(error));
  }, [user]);

  return (
    <div>
      <div>
        <img className="img" alt="github user logo" src={user.avatar_url} />
        <h1>{user.name}</h1>
      </div>
      <div>BIO :{user.bio}</div>
      <div>LOCATION: {user.location}</div>
      <div>REPOSITORIES</div>
      <div>{error && <span>{error.message}</span>}</div>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>

      <button onClick={() => onReset && onReset()}>RESET</button>
    </div>
  );
}
