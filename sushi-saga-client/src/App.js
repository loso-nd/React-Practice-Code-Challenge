import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    index: 0,
    sushi: [],
    currentSushi: [],
    emptyPlates:  [],
    wallet: 100
  }

  componentDidMount(){
    this.fetchSushi()
  }

  getNextSushi =() => {
    this.setState(prevState => {
      return {
        sushi: prevState.sushi.slice(4),//allSushi existing sushi but omitting the 1st four
        currentSushi: prevState.sushi.slice(0,4)

      }
    })
  }
  
  isSushiEaten = (sushi) => {
    return this.state.emptyPlates.includes(sushi)
  }

  fetchSushi = () => {
    fetch(API)
    .then(resp => resp.json())
    .then(allSushi => {
        this.setState({ //when we get all the sushi out to fetch, we can setState to get that obj into sushi.
          sushi: allSushi
        }, this.getNextSushi)
    })
  }

//logics for eating a sushi
//updated the empty plats arr to contan all of the eatenSushi
  eatSushi = (eatenSushi) => {
    if (eatenSushi.price <= this.state.wallet && !this.isSushiEaten(eatenSushi)) 
    //check to see if they can afford it
    this.setState(prev =>{
      return {emptyPlates: [...prev.emptyPlates, eatenSushi], wallet: [prev.wallet-eatenSushi.price]}
    })
  }

  render() {
    console.log(this.state.sushi.length)
    return (
      <div className="app">
        <SushiContainer 
        onEatSushi={this.eatSushi}
        currentSushi={this.state.currentSushi} 
        onGetNextSushi={this.getNextSushi}
        isSushiEaten={this.isSushiEaten}/>
        <Table emptyPlate={this.state.emptyPlates}
          wallet={this.state.wallet}/>
      </div>
    );
  }
}

export default App;  