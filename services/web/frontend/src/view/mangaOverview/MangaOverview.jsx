import React from 'react';
import { connect } from 'react-redux';
import MangaInfo from './MangaInfo.jsx';
import ChapterList from './ChapterList.jsx';


const mapStateToProps = (state) => ({
    manga: state.manga.selectedManga
});

const mapDispatchToProps = {

}

const MangaOverview = props => {
    const { manga } = props;
    return (
        <div>
            <div>
                <MangaInfo manga={manga}></MangaInfo>
            </div>
        </div>
    )
}
//  {/* <MangaInfo /> */}
// <Home mangas={mangas} selectedTags={selectedTags}/>

export default connect(mapStateToProps, mapDispatchToProps)(MangaOverview);
// export default MangaOverview;