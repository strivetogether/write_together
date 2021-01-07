import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Route, Redirect } from 'react-router-dom';
// import Projects from './components/Projects';
// import ProjectDetails from './components/ProjectDetails';
import Signup from './components/Signup';
// import Login from './components/Login';
import Navbar from './components/Navbar';
import AddBlock from './components/AddBlock';
import Login from './components/Login';
import Explore from './components/Explore';
import BlockDetails from './components/BlockDetails';
import EditBlock from './components/EditBlock';
import IdeaDetails from './components/IdeaDetails';
import Dashboard from './components/Dashboard';
import OtherUserDashboard from './components/OtherUserDashboard';
import Home from './components/Home';





class App extends React.Component {

  state = {
    user: this.props.user,
    blocks: [],
    // ideas: [],
  }

  setUser = user => {
    this.setState({
      user: user
    })
  }

  getData = () => {
    // get the current list of projects from the server
    axios.get('/api/blocks')
      .then(response => {
        // put them into the state
        this.setState({
          blocks: response.data
        })
      })
      .catch(err => console.log(err))

    // axios.get('/api/ideas/allideas')
    //   .then(response => {
    //     // put them into the state
    //     this.setState({
    //       ideas: response.data
    //     })
    //   })
    //   .catch(err => console.log(err))

  }

  componentDidMount() {
    this.getData();
  }

  render() {
    // console.log('GET IDEAS DATA', this.state)
    return (
      <div className="App">


        <Navbar user={this.state.user} setUser={this.setUser} />

        <Route
        exact
        path='/addblock'
        render={props => {
        if (this.state.user) return <AddBlock getData={this.getData} blocks={this.state.blocks} {...props}/>
        else return <Redirect to='/signup' />
        }}
        />
        

        {/* <Route
          exact
          path='/addblock'
          render={props => {
            if (this.state.user) return <AddBlock getData={this.getData} {...props} />
            else return <Redirect to='/signup' />
          }}
        /> */}
{/* We're not using this one, right?
        <Route
          exact
          path='/blockdetails'
          render={props => {
            return <BlockDetails {...props} />
          }}
        /> */}

        <Route
          exact
          path='/'
          render={props => <Home setUser={this.setUser} blocks={this.state.blocks} {...props} />}
        />

        <Route
          exact
          path='/signup'
          // to the Signup we have to pass a reference to the setUser method
          // this we cannot do via component={<some component>}
          // For this we use the render prop - The term “render prop” refers to a technique for sharing 
          // code between React components using a prop whose value is a function.
          // A component with a render prop takes a function that returns a React element and calls it 
          // instead of implementing its own render logic.
          render={props => <Signup setUser={this.setUser} {...props} />}
        />

        <Route
          exact
          path='/login'
          render={props => <Login setUser={this.setUser} {...props} />}
        />

        <Route
          exact
          path='/explore'
          render={props => <Explore setUser={this.setUser} blocks={this.state.blocks} {...props} />}
        />

        <Route
          exact
          path='/blocks/:id'
          render={props => <BlockDetails setUser={this.setUser} blocks={this.state.blocks} ideas={this.state.ideas} user={this.state.user} getData={this.getData} {...props} />}
        />


        <Route
          exact
          path='/blocks/:id/editblock'
          render={props => { 
            if (this.state.user) return <EditBlock setUser={this.setUser} blocks={this.state.blocks} ideas={this.state.ideas} getData={this.getData} {...props} />
            else return <Redirect to='/signup' />
            }}
        />

        <Route
          exact
          path='/ideas/:id'
          render={props => <IdeaDetails user={this.state.user} setUser={this.setUser} getData={this.getData} {...props} />}
        />

        <Route
          exact
          path='/dashboard'
          render={props => <Dashboard user={this.state.user} setUser={this.setUser} {...props} />}
        />

        <Route
          exact
          path='/dashboard/:id'
          render={props => <OtherUserDashboard user={this.state.user} setUser={this.setUser} {...props} />}
        />

        {/* <AddBlock /> */}
        {/* </Route> */}
      </div>
    )
  }
}


export default App;
