import React from 'react';
import Header from './components/Header';
import axios from 'axios';

export default class App extends React.Component {
    componentDidMount() {
    axios
        .get('https://randomuser.me/api/?page=0&results=10')
        .then((response) => {
        console.log(response.data);
        })
        .catch((error) => console.log('error', error));
    }
 
  render() {
    return (
      <div className="main-section">
        <Header />
        <h2>App Component</h2>
      </div>
    );
  }
}