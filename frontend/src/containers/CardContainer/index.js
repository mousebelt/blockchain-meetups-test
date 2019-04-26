import React, { Component } from 'react'
import './CardContainer.scss'
import EventCard from 'components/EventCard'
import CardImage from 'assets/images/card-image.png'

class CardContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      minId: 0,
      maxId: 0,
      cardCount: 0,
      cards: []
    }
  }

  componentDidMount () {
    let testCards = []
    let testCard
    for (let i = 0; i < 4; i++) {
      testCard = {
        id: i,
        image: CardImage,
        attending: `123+`,
        title: `Your Event Title`,
        titleDesc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        name: `Gladys Kanyinda`
      }
      testCards.push(testCard)
    }
    let testList = {
      minId: 0,
      maxId: 3,
      cardCount: 4,
      cards: testCards
    }
    this.setState(testList)
  }

  render () {
    return (
      <div className="card-container">
        <div className="card-container-list">
        {
          this.state.cards.map((card, index) => {
            return (
              <EventCard
                key={index}
                id={card.id}
                image={card.image}
                attending={card.attending}
                title={card.title}
                titleDesc={card.titleDesc}
                content={card.content}
                name={card.name}
              />
            )
          })
        }
        </div>
        <div className="card-container-pagination">
          <ul className="card-container-pagination-list">
            <li className="card-container-pagination-list-item">
              <a href="#" className="card-container-pagination-list-item-link card-container-pagination-list-item-link__begin">
                &lt;
              </a>
            </li>
            <li className="card-container-pagination-list-item">
              <a href="#" className="card-container-pagination-list-item-link">
                1
              </a>
            </li>
            <li className="card-container-pagination-list-item">
              <a href="#" className="card-container-pagination-list-item-link">
                2
              </a>
            </li>
            <li className="card-container-pagination-list-item">
              <a href="#" className="card-container-pagination-list-item-link">
                3
              </a>
            </li>
            <li className="card-container-pagination-list-item">
              <a href="#" className="card-container-pagination-list-item-link">
                4
              </a>
            </li>
            <li className="card-container-pagination-list-item">
              <a href="#" className="card-container-pagination-list-item-link card-container-pagination-list-item-link__end">
                &gt;
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default CardContainer