import React from 'react';

import { connect } from 'react-redux';
import { toggleSidenav, selectTags } from '../../store/actions.js';

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
 *      popluar: [list of objects],
 *      trending: [list of objects]
 * }
 * 
 * isSidebarVisible: boolean
 * 
 * tags: [list of selected ids]
 */
const mapStateToProps = (state) => ({
    isSidebarVisible: state.requests.isSidebarVisible,
    posts: state.requests.posts,
    mangas: state.requests.mangas,
    selectedTags: state.requests.selectedTags
});
  
const mapDispatchToProps = (dispatch) => ({
    showSidebar: () => dispatch(toggleSidenav(true)),
    hideSidebar: () => dispatch(toggleSidenav(false)),
    selectTags: (tags) => dispatch(selectTags(tags))
});

export default function wrapLandingPage(WrappedComponent) {
    return connect(mapStateToProps, mapDispatchToProps) (
            class extends React.Component {

                render() {
                    let {...rest} = this.props;
                    
                    return <WrappedComponent {...rest}/>
                }
            }
        );
}

