import React from 'react';
import { Link } from 'react-router-dom';
import TaggedContentCard from 'react-ui-cards';

var CardItem = React.createClass({
    render() {
        return (
        <>
           <TaggedContentCard title="Duraj-com" />
        </>
    );
    }
})

export default CardItem;
