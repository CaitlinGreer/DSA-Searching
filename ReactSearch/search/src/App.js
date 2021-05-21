import React from 'react';
import DATA from './data'
import './App.css';

class App extends React.Component {
  state = {
    value: null,
    found: false,
    count: 0
  }

  handleSubmit(e){
    e.preventDefault()

    const value = parseInt(e.target.num.value)
    const searchType = e.target.searchType.value

    if (searchType === 'linear') {
      this.setState(this.linearSearch(DATA, value))
    }
    if (searchType === 'binary') {
      const data = DATA.sort((a, b) => a - b)
      this.setState(this.binarySearch(data, value))
    }
  }

  linearSearch(array, value) {
    let count = 0
    for (let i = 0; i < array.length; i++){
      count++
      if (array[i] === value) {
        return {
          value,
          found: true,
          count,
        }
      }
    }
    return {
      value,
      found: false,
      count,
    }
  }

  binarySearch(array, value, start, end, count = 0) {
    var starter = start === undefined ? 0 : start
    var ender = end === undefined ? array.length : end
    count++

    if (starter > ender) {
      return {
        item,
        found: false,
        count,
      }
    }

    const index = Math.floor((starter + ender) / 2)
    const item = array[index]

    console.log(starter, ender)
    if (item === value) {
      return {
        item,
        found: true,
        count,
      }
    }
    else if (item < value) {
      return this.binarySearch(array, value, index + 1, ender, count)
    }
    else if (item > value) {
      return this.binarySearch(array, value, index -1, count)
    }
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={e => this.handleSubmit(e)}>
        <label htmlFor="num">Number:</label>
          <input type="number" id="num" name="num" required></input>
          <label htmlFor="linear">Linear Search</label>
          <input type="radio" name="searchType" id="linear" value="linear"required></input>
          <label htmlFor="binary">Binary Search</label>
          <input type="radio" name="searchType" id="binary" value="binary"></input>
          <button type="submit">Submit</button>
        </form>

        <p>Searching for {this.state.value}</p>
        <p>Was item in dataset? {this.state.found ? "true" : "false"} </p>
        <p>Item found in {this.state.count} searches</p>          
        
      </div>
    )
  }

}

export default App;
