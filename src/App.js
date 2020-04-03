import React, { Component } from 'react';
import List from './List';
import './App.css';
import STORE from './store';

class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  };

  state = {store: STORE};

  deleteCard = (listId, id) => {
      const newLists = this.state.store.lists.map(list => {
        if(listId === list.id){
          const leftCards = list.cardIds.filter(card => {
            if(card === id){
               
            }else{
              return card
            }
          })
          return {
            ...list,
            cardIds : leftCards
          }
        } else {
          return list;
        }
      }
      )
      const newCardDeck = this.state.store.allCards
      this.setState({store:{
        lists: newLists,
        allCards: newCardDeck
      }})
  }

  addRandom = () => {
    const id = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4);
    return {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    }
  
  }

  handleRandom = (listId) => {
    const newCard = this.addRandom()
    const newLists =  this.state.store.lists.map(list => {
      if (listId === list.id){
        return {
          ...list,
          cardIds : [...list.cardIds, newCard.id]
        };
      } else {
        return list;
      }
    })
    const newCardDeck = this.state.store.allCards
    newCardDeck[newCard.id] = newCard
    this.setState({
      store: {
        lists: newLists,
        allCards: newCardDeck
      }
    })
  
  }

  render() {
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {this.state.store.lists.map(list => (
            <List
              key={list.id}
              id={list.id}
              header={list.header}
              cards={list.cardIds.map(id => this.state.store.allCards[id])}
              deleteCard={this.deleteCard}
              addRandom={this.handleRandom}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
