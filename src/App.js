import React,{Fragment} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
 import './App.css';
import { Navbar } from './components/NavBar/Navbar'
import Search from './components/Search/Search'

function App() {
  return (
    <MuiThemeProvider>
      <Fragment>
      <Navbar />
        <Search />
        </Fragment>
    </MuiThemeProvider>
  );
}

export default App;
