import React from 'react';
import { Route } from "react-router-dom";

import { connect } from 'react-redux';
import { Home } from './home/Home.jsx';
import { ROUTES } from '../../root/App.js';

import { listTest } from './home/homeActions';
import MangaList from '../../shared/components/mangaList/MangaList.jsx';

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
 * tags: [list of selected ids]
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
    list: listTest
}

const Landing = (props) => {
    let { mangas, selectedTags, list, mangaList } = props;
    

    return (
        <div><MangaList mangaList={mangaList} list={list}></MangaList></div>
    ) 
}
// <Home mangas={mangas} selectedTags={selectedTags}/>

export default connect(mapStateToProps, mapDispatchToProps)(Landing);

