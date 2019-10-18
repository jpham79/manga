import React from 'react';
import { connect } from 'react-redux';
import PageList from '../../components/pageList/PageList.jsx';



const mapStateToProps = state => ({
    selectedChapter: state.manga.selectedChapter
});

const mapDispatchToProps = {

}

const Reader = props => {
    const { selectedChapter } = props;
    if (selectedChapter) {
        const { pages } = selectedChapter;
        return (
            <div>
                <PageList pages={pages} />
            </div>
        )
    }  else  {
        return <div> Loading... </div>
    }

}
//  {/* <MangaInfo /> */}
// <Home mangas={mangas} selectedTags={selectedTags}/>

export default connect(mapStateToProps, mapDispatchToProps)(Reader);
// export default MangaOverview;