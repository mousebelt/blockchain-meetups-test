import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, CardBody, CardTitle, CardText, CardImg, Button } from 'reactstrap'

const regex = /(<([^>]+)>)/ig;
const defaultEvent = 'https://www.artconnect.com/assets/default/default_event_list-af5a65d1bb7f64798e5dd5b6e3e3d091.png'

class Event extends Component {
    componentDidMount(){
        window.scrollTo(0,0)
    }
    render() {
        const { events, match: { params: { id } } } = this.props
        const elem = events.find(elem => id == elem.id)

        return (
            <div
                style={{
                    maxWidth: '30%',
                    margin: '0 auto'
                }}
            >   
                <Card style={{ padding: '12%', margin: '1%' }}>
                    <CardImg top width="100%" src={elem.group.photoUrl || defaultEvent} alt="Card image cap" />
                    <CardBody>
                        <CardTitle> {elem.name}</CardTitle>
                        <CardText>{elem.description.replace(regex, '')}</CardText>
                        <CardText>Group: {elem.group.name}</CardText>
                        <Button color="success" href={elem.url} tag='a' > View on meetup </Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    events: state.events
})

const mapDispatchToProps = {

}


export default connect(mapStateToProps, mapDispatchToProps)(Event)