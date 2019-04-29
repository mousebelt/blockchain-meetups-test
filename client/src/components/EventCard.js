import React from 'react';
import { withRouter } from 'react-router-dom'
import { Row, CardText, Button } from 'reactstrap';
import EllipsisText from "react-ellipsis-text";

const defaultEvent = 'https://www.artconnect.com/assets/default/default_event_list-af5a65d1bb7f64798e5dd5b6e3e3d091.png'
const EventCard = (props) => {
    const { elem, history } = props;
    return (

        <Row
            style={{ border: '1px solid #000', width: '100%', justifyContent: 'space-between' }} onClick={() => history.push(`/event/${elem.id}`)} >
            <img
                src={elem.group.photoUrl || defaultEvent}
                alt=""
                style={{ width: 80, height: 80 }}

            />
            <CardText style={{ width: 300, textAlign: 'start' }}>
                <EllipsisText text={elem.name.trim()} length={20} />
            </CardText>
            <CardText>{elem.group.name}</CardText>
            <Button style={{ padding: 25 }} color="success" href={elem.url} tag='a' > View on meetup </Button>
        </Row>

    );
};

export default withRouter(EventCard);