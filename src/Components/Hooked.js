import React, { useState, useEffect } from 'react';

export default function Hooked() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [repos, setRepos] = useState([]);

  /** This method keeps on repeating it'self that's why we pass an empty array  */
  useEffect(() => {
    fetch('https://api.github.com/users/mirriam-akongo/repos')
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setRepos(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Is Loading....</div>;
  } else {
    return (
      <React.Fragment>
        <div>
          <h1>Mirriam's current Github Repos using react hooks</h1>
          <ul>
            {repos.map((repo) => (
              <li key={repo.id}>{repo.name}</li>
            ))}
          </ul>
          {/** The above map function means that From our repos, go into them and pick each repo and show it in it's own list*/}
        </div>
      </React.Fragment>
    );
  }
}
