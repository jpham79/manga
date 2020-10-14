import React from 'react';

import { connect } from 'react-redux';

import { searchManga } from '../../store/actions.js';
import { SideNav } from './SideNav/SideNav.jsx';
import { TopMenu } from './TopMenu/TopMenu.jsx';

/**
 * Assumed schema
 * 
 * isSidebarVisible: boolean
 * 
 * tags: [list of selected ids]
 */
const mapStateToProps = (state) => ({
    searchInput: state.requests.searchInput
});

const mapDispatchToProps = (dispatch) => ({
    searchManga: (tags) => dispatch(searchManga(tags))
});

const Navigation = (props) => {
    return [
            <TopMenu key='topMenu' searchInput={props.searchInput} searchManga={props.searchManga} />,
            <SideNav key='sideNav' />
        ];
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);