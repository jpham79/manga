import React from 'react';

import { connect } from 'react-redux';
import MangaInfo from './MangaInfo/MangaInfo.jsx';


const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {
    // nothing so far
    // list: listTest,
    // list: listTest
}

const MangaOverview = () => {

    console.log('hi');
    return (
        <div>
            hihih
            {/* <MangaInfo></MangaInfo> */}
        </div>
    )
}
//  {/* <MangaInfo /> */}
// <Home mangas={mangas} selectedTags={selectedTags}/>

export default connect(mapStateToProps, mapDispatchToProps)(MangaOverview);
// export default MangaOverview;