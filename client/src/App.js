import React from 'react';
import './App.css';
// import Projects from './components/Projects';
// import ProjectDetails from './components/ProjectDetails';
// import Signup from './components/Signup';
// import Login from './components/Login';
import Navbar from './components/Navbar';
import AddBlock from './components/AddBlock';
import { Route, Redirect } from 'react-router-dom';



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Route
        exact
        path='/addblock'
        render={props => <AddBlock />}
        />
        {/* <AddBlock /> */}
        {/* </Route> */}
      </div>
    )
  }
}



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
