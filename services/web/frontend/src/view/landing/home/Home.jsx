import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Link } from "react-router-dom"

import { Grid, Image, Segment, Label } from 'semantic-ui-react';
import MangaList from '../../../components/mangaList/MangaList.jsx';
import '../landing.scss';
import { ROUTES } from '../../../root/App.js'
import '../../../root/App.scss'

export class Home extends React.Component {
    
    render() {
        let { mangas, selectManga, isLoggedIn } = this.props;
        
        return (
            <div className="home">
                <div className="heading-content">
                    <span className="sub-heading">Hot Updates:</span>
                    <span className="right-end"><Link to={ROUTES.favorites}>View All</Link></span>
                </div>
                <MangaList mangas={mangas} selectManga={selectManga} />

                <div className="heading-content">
                    <span className="sub-heading">{ isLoggedIn ? 'Recommended Mangas:' : 'Recently Updated:' }</span>
                    <span className="right-end"><Link to={ROUTES.favorites}>View All</Link></span>
                </div>
                <MangaList mangas={mangas} selectManga={selectManga} />
            </div>
        )
    }
}