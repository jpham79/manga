import './top-menu.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Icon } from 'react-materialize';

import { ROUTES } from '../../../root/App.js';

export class TopMenu extends React.Component {

    constructor(props) {
        super(props);

        this.search = this.props.searchManga;
        this.handleSearchInput = this.handleSearchInput.bind(this);
    }

    handleSearchInput(event) {
        this.search(event.target.value);
    }

    render() {
        const { searchInput } = this.props;

        return <Row className={'blue-grey darken-3 top-menu'}>
                    <Col className="sidenav-trigger" data-target="slide-out">
                        <div className={'open-navagation'}> Show Navagation</div>
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
                        <input type="text" onChange={this.handleSearchInput} value={searchInput}/>
                    </Col>
                </Row>;
    }
}
