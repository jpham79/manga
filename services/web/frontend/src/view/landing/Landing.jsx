import React from 'react';
import { connect } from 'react-redux';

import { listTest } from './home/homeActions';
import { selectManga } from '../../actions/mangaActions';
import MangaList from '../../components/mangaList/MangaList.jsx';
import { Home } from './home/Home.jsx';

/**
 * Assumed schema
 * 
 * posts {
 *      text,
 *      authorObject,
 *      upvoteCount,
 *      downvoteCount,
 *      isArchived,
 *      isAnnouncement
 * }
 * 
 * mangas: [list of objects,
 *      {
 *          name: string, 
 *          image: string,
 *          author: string,
 *          ongoing: boolean,
 *          genres:  array,
 *          otherNames: string,
 *          chapters: array,
 *          summary: string,
 *          tags: string array
 *      }]
 * }
 * 
 * tags: [list of selected tags]
 */
const mapStateToProps = (state) => ({
    posts: state.requests.posts,
    mangas: state.requests.mangas,
    mangaList: state.requests.ListTest ? state.requests.ListTest : null,
    selectedTags: state.requests.selectedTags
});
  
const mapDispatchToProps = {
    // nothing so far
    // list: listTest,
    selectManga: manga => selectManga(manga),
    list: listTest
}

const Landing = (props) => {
    let { selectedTags, list, mangaList, isLoggedIn, selectManga } = props;
    let mangas = [];

    if (!mangaList) list();
    if (mangaList && mangaList.data) mangas = mangaList.data;

    return <Home mangas={mangas} selectManga={selectManga} isLoggedIn={isLoggedIn} />;
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);

