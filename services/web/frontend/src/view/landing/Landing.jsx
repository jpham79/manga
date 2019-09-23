import React from 'react';
import { Route } from "react-router-dom";

import { connect } from 'react-redux';
import { Home } from './home/Home.jsx';
import { ROUTES } from '../../root/App.js';

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
 * mangas: {
 *      popluar: [list of objects,
 *      {
 *          name: string, 
 *          image: string,
 *          author: string,
 *          ongoing: boolean,
 *          genres:  array,
 *          otherNames: string,
 *          chapters: array,
 *          summary: string
 *      }],
 *      trending: [list of objects]
 * }
 * 
 * tags: [list of selected ids]
 */
const mapStateToProps = (state) => ({
    posts: state.requests.posts,
    mangas: state.requests.mangas,
    selectedTags: state.requests.selectedTags
});
  
const mapDispatchToProps = (dispatch) => ({
    // nothing so far
});

const Landing = (props) => {
    let { mangas, selectedTags } = props;

    return [
        <Route key='home' exact={true} path={ROUTES.landing} render={() => <Home mangas={mangas} selectedTags={selectedTags}/>} />
    ]
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);

