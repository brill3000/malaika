import React from "react";
///import Dashboard from './dashboard/Dashboard';
//import ApolloClient from 'apollo-boost';
//import { ApolloProvider } from "react-apollo";
//import Courses from './Courses';
//import Appbar from '@material-ui/core/Appbar'
//import axios from 'axios';
//import BottomAppBar from './Messaging app/index';
/*const client = new ApolloClient({
  uri: "https://localhost:9000/graphql"
});*/
import Dashboard from "./dashboard/Dashboard";
import  BottomAppBar from './Messaging app/index';

function App() {
  return (
    <>
      <BottomAppBar/>
    </>
  );
}

export default App;
