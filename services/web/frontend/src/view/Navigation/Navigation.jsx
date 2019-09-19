import React from 'react';

import { connect } from 'react-redux';
import { toggleSidenav, selectTags } from '../../store/actions.js';
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
    isSidebarVisible: state.requests.isSidebarVisible,
    selectedTags: state.requests.selectedTags
});

const mapDispatchToProps = (dispatch) => ({
    showSidebar: () => dispatch(toggleSidenav(true)),
    hideSidebar: () => dispatch(toggleSidenav(false)),
    selectTags: (tags) => dispatch(selectTags(tags))
});

const Navigation = (props) => {
    return [
            <TopMenu key='topMenu' showSidebar={props.showSidebar} selectedTags={props.selectedTags} selectTags={props.selectTags} />,
            <SideNav key='sideNav' isSidebarVisible={props.isSidebarVisible} hideSidebar={props.hideSidebar} />
        ];
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);