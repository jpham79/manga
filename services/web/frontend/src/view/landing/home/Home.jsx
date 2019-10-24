import React from 'react';
import 'semantic-ui-css/semantic.min.css';

import { Grid, Image, Segment, Label } from 'semantic-ui-react';
import MangaList from '../../../components/mangaList/MangaList.jsx';
import '../landing.scss';

export class Home extends React.Component {
    
    render() {
        let { mangas, selectManga, isLoggedIn } = this.props;
        
        return (
            <div className="home">
                List 1:
                <MangaList mangas={mangas} selectManga={selectManga} />

                List 2:
                <MangaList mangas={mangas} selectManga={selectManga} />
            </div>
        )
    }
}