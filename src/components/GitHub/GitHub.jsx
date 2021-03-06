import React, { useState } from "react";
import UserResults from "../User-Results/UserResults";
import UserInput from "../User-Input/UserInput";
import githubLogo from "../Images/githubLogo.png";
import "./GitHub.css";

export default function GitHub() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [repos, setRepos] = useState([]);

  const fetchGithubUser = function (githubName) {
    fetch(`https://api.github.com/users/${githubName}`)
      .then((response) => {
        if (response.status >= 200 && response.status < 400) {
          return response
            .json()
            .then((json) => {
              setUser(json);
              setError(null);
              fetchGitHubUserRepositories(json.repos_url);
            })
            .catch((error) => setError(error));
        } else {
          response.json().then((error) => setError(error));
        }
      })
      .catch((error) => setError(error));
  };

  const fetchGitHubUserRepositories = function (repoUrl) {
    fetch(repoUrl).then((response) => {
      if (response.status >= 200 && response.status < 400) {
        return response
          .json()
          .then((json) => setRepos(json))
          .catch((error) => setError(error));
      } else {
        response.json().then((error) => setError(error));
      }
    });
  };

  return (
    <div className="gitHub">
      <div className="gitHub_heading">
        <div className="gitHub_heading_image">
          <a href="https://github.com/">
            <img src={githubLogo} width="100px" />
          </a>
        </div>
        <div>
          <div className="gitHub_heading_greeting">
            GitHub repository search
          </div>
        </div>
      </div>

      <UserInput onSubmit={fetchGithubUser} />
      {error && <div class="error">{error.message}</div>}
      {user && <UserResults user={user} repos={repos} />}
    </div>
  );
}
