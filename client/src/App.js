import React from 'react';
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
import { Editor } from '@tinymce/tinymce-react';



class App extends React.Component {

  state = {
    user: this.props.user
  }

  setUser = user => {
    this.setState({
      user: user
    })
  }

//tinymce's own method
  handleEditorChange = (content, editor) => {
    console.log('Content was updated:', content);
  }

  render() {
    return (
      <div className="App">
      
        <Navbar user={this.state.user} setUser={this.setUser}/>
        <Editor
        apiKey={process.env.REACT_APP_TINY_ID}
         initialValue="<p>This is the initial content of the editor</p>"
         init={{
           height: 500,
           menubar: false,
           plugins: [
             'advlist autolink lists link image charmap print preview anchor',
             'searchreplace visualblocks code fullscreen',
             'insertdatetime media table paste code help wordcount'
           ],
           toolbar:
             'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help'
         }}
         onEditorChange={this.handleEditorChange}
       />
        <Route
        exact
        path='/addblock'
        render={props => {
        if (this.state.user) return <AddBlock {...props}/>
        else return <Redirect to='/signup' />
        }}
        />

        <Route
        exact
        path='/blockdetails'
        render={props => {
        <AddBlock {...props}/>
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
