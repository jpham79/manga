import React from 'react';
import { connect } from 'react-redux';

import { listTest } from './home/homeActions';
import { selectManga } from '../../actions/mangaActions';
import MangaList from '../../components/mangaList/MangaList.jsx';
import { Home } from './home/Home.jsx';
import Category from './listings/Category.jsx';

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

/**
 * Page user will see if they are logged in
 */
const getPersonalizedLanding = (mangaList) => {
    let mangas = [];
    
    if (mangaList && mangaList.data) mangas = mangaList.data;

    return <Home mangas={mangas} />;
}

/**
 * Page user will see when they are not logged in
 */
const getDefaultLanding = (mangaList, selectManga) => {
    let mangas = [];
    
    if (mangaList && mangaList.data) mangas = mangaList.data;
    return <MangaList mangas={mangas} selectManga={selectManga}></MangaList>
}

const Landing = (props) => {
    let { selectedTags, list, mangaList, isLoggedIn, selectManga } = props;
    
    if (!mangaList) list();
    
    return isLoggedIn ? getPersonalizedLanding(mangaList) : getDefaultLanding(mangaList, selectManga);
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);

