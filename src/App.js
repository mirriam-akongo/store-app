import React, { Component } from 'react';
import Hooked from './Components/Hooked';
import Crud from './Components/Crud';
// import Token from "./Components/Token";

export default class App extends Component {
  /** First lifecycle method */
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      repos: [],
    };
  }
  /** Second lifecycle method */
  componentDidMount() {
    /* This is usually a get method */
    /* This fetch method is a promise so it must have a dot then*/
    /* You can add any number of dot thens to handle datas */

    fetch('https://api.github.com/users/mirriam-akongo/repos').then((res) =>
      res.json().then(
        (data) => {
          this.setState({
            isLoaded: true,
            repos: data,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error: error,
          });
        }
      )
    );
  }
  /** Last lifecycle method */
  render() {
    const { error, isLoaded, repos } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Is Loading....</div>;
    } else {
      return (
        <React.Fragment>
          <div>
            <h1>Mirriam's current Github Repos</h1>
            <ul>
              {repos.map((repo) => (
                <li key={repo.id}>{repo.name}</li>
              ))}
            </ul>
            {/** The above map function means that From our repos, go into them and pick each repo and show it in it's own list*/}
            <Hooked />
            <Crud />
            {/* <Token /> */}
          </div>
        </React.Fragment>
      );
    }
  }
}
