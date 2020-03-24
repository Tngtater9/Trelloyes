import React from 'react';
import './List.css';
import Card from './Card';

function List (props) {
    const cardList = props.cards.map(card => {
        return (
            <Card 
                key={card.id}
                title={card.title}
                content={card.content}>
            </Card>
        )
    })
    return (
        <section>
          <header class="List-header">
          <h2>{props.header}</h2>
          </header>
          <div className="List-cards">
            {cardList} 
            <button type="button" class="List-add-button">
              + Add Random Card
            </button>   
          </div>
        </section>
    )
}

export default List;