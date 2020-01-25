import './top-menu.scss';

import React from 'react';
import { Link } from "react-router-dom"
import { Row, Col, Icon } from 'react-materialize';

import { ROUTES } from '../../../root/App.js';

export class TopMenu extends React.Component {
    
    filter = [
        this.createTag(1, 'Isekai'),
        this.createTag(2, 'Action'),
        this.createTag(3, 'Comedy'),
        this.createTag(4, 'Slice of Life'),
        this.createTag(5, 'Wholesome NTR'),
        this.createTag(6, 'Mystery'),
        this.createTag(7, 'Fantasy')
    ];

    constructor(props) {
        super(props);

        this.handleItemClick = this.handleItemClick.bind(this);
        this.createTag = this.createTag.bind(this);
    }

    createTag(id, name) {
        return {
            name,
            id
        }
    }

    handleItemClick(e, { checked }, id) { 
        const { selectTags } = this.props;
        let selections = this.props.selectedTags.slice();
        let index = -1;

        if (checked && !selections.includes(id)) selections.push(id);
        if (!checked && (index = selections.indexOf(id)) >= 0) selections.splice(index, 1);

        selectTags(selections);
    }

    render() {
        const { showSidebar, selectedTags } = this.props;

        return <Row className={'blue-grey darken-3 top-menu'}>
                    <Col>
                        <div onClick={showSidebar} className={'open-navagation'}> Show Navagation</div>
                    </Col>
                    <Col className={'right-item'}>
                        <Link to={ROUTES.landing}>Home</Link>
                    </Col>
                    <Col className={'right-item'}>
                        Download
                    </Col>
                    <Col className={'right-item'}>
                        <Link to={ROUTES.favorites}>Favorites</Link>
                    </Col>
                    <Col className={'right-item search-bar'}>
                        <Icon>
                            search
                        </Icon>
                        <input type="text" />
                    </Col>
                </Row>;
    }
}
