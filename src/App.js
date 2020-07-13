import React from 'react';
import Row from './Row.js'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, makeStyles } from '@material-ui/core/';
import './App.css';
import axios from 'axios'


class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      books: [],
    }
  }

  async componentDidMount(){
    await axios.get('http://localhost:5000/books/')
    .then(res => {
      const books = res.data
      let allBooks = []

      books.forEach(book => {
        console.log(book)
        const current = <Row info={book} />
        allBooks.push(current)
      })

      this.setState({ books: allBooks})
    })
  }
  
  render(){
    return (
      <div className="page">
        {this.state.books}
        asdads
      </div>
    );

  }
}

export default App