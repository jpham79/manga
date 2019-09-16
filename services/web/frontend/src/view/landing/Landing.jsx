import React from 'react';

import { connect } from 'react-redux';
import { toggleSidenav } from '../../store/actions.js';

/**
 * Assumed schema
 * 
 * posts {
 *      text,
 *      author,
 *      upvoteCount,
 *      downvoteCount,
 *      isArchived
 * }
 * 
 * mangas: {
 *      popluar: [list of objects],
 *      trending: [list of objects]
 * }
 * 
 * isSidebarVisible: boolean
 * 
 * tags: [list of selected strings]
 */
const mapStateToProps = (state) => ({
    isSidebarVisible: state.requests.isSidebarVisible,
    posts: state.requests.posts,
    mangas: state.requests.mangas,
    tags: state.requests.tags
});
  
const mapDispatchToProps = (dispatch) => ({
    showSidebar: () => dispatch(toggleSidenav(true)),
    hideSidebar: () => dispatch(toggleSidenav(false))
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

