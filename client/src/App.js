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
import EditBlock from './components/EditBlock'



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

  // //tinymce's own method
  // handleEditorChange = (content, editor) => {
  //   console.log('Content was updated:', content);
  // }

  render() {
    console.log('GET IDEAS DATA', this.state)
    return (
      <div className="App">
      
        <Navbar user={this.state.user} setUser={this.setUser}/>

        <Route
        exact
        path='/addblock'
        render={props => {
        if (this.state.user) return <AddBlock getData={this.getData} {...props}/>
        else return <Redirect to='/signup' />
        }}
        />

        <Route
        exact
        path='/blockdetails'
        render={props => {  
        return <BlockDetails {...props}/>
        }}
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
          render={props => <BlockDetails setUser={this.setUser} blocks={this.state.blocks} ideas={this.state.ideas} getData={this.getData} {...props} />}
        />

<Route
          exact
          path='/blocks/:id/editblock'
          render={props => <EditBlock setUser={this.setUser} blocks={this.state.blocks} ideas={this.state.ideas} getData={this.getData} {...props} />}
        />

        {/* <AddBlock /> */}
        {/* </Route> */}
      </div>
    )
  }
}


export default App;
