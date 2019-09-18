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

export default function getNavMenus() {
    return connect(mapStateToProps, mapDispatchToProps) (
        class extends React.Component  {
            render() {
                let { isSidebarVisible, hideSidebar, showSidebar, selectedTags, selectTags } = this.props;
            
                return [
                    <TopMenu key='topMenu' showSidebar={showSidebar} selectedTags={selectedTags} selectTags={selectTags}/>,
                    <SideNav key='sideNav' isSidebarVisible={isSidebarVisible} hideSidebar={hideSidebar}/>
                ];
            }
        }
    );
}

