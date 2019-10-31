import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Link } from "react-router-dom"

import { Header, Segment, Icon } from 'semantic-ui-react';
import MangaList from '../../../components/mangaList/MangaList.jsx';
import '../landing.scss';
import { ROUTES } from '../../../root/App.js'
import '../../../root/App.scss'

export class Home extends React.Component {
    
    getPersonizatedList({ mangas, selectManga, isLoggedIn }) {
        let elements;
        if (isLoggedIn) {
            elements = (
                <div class="content">
                    <div className="heading-content">
                        <span className="sub-heading">Recommended Mangas:</span>
                        <span className="right-end"><Link to={ROUTES.favorites}>View All</Link></span>
                    </div>
                    <MangaList mangas={mangas} selectManga={selectManga} />
                </div>
            );

        }
        else {
            elements = (
                <div className="extra-top heading-content">
                    <Segment placeholder inverted secondary>
                        <Header icon>
                        <Icon name='thumbs up outline' />
                            Login to see your recommendation
                        </Header>
                    </Segment>
                </div>
            );
        }

        return elements;
    }

    render() {
        let { mangas, selectManga, isLoggedIn } = this.props;
        
        return (
            <div className="home">

                <div class="content">
                    <div className="heading-content">
                        <span className="sub-heading">Hot Updates:</span>
                        <span className="right-end"><Link to={ROUTES.favorites}>View All</Link></span>
                    </div>
                    <MangaList mangas={mangas} selectManga={selectManga} />
                </div>

                <div class="content">
                    <div className="heading-content">
                        <span className="sub-heading">Recently Updated:</span>
                        <span className="right-end"><Link to={ROUTES.favorites}>View All</Link></span>
                    </div>
                    <MangaList mangas={mangas} selectManga={selectManga} />
                </div>

                {this.getPersonizatedList(this.props)}

            </div>
        )
    }
}