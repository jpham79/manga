import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Button, Icon } from 'react-materialize';

import './page-list.scss';

/**
 * Displays the pages of the selected chapter
 */
const PageList = (props) => {
    const { chapterInfo, source, chapterNumber, useDualPage } = props;
    const { chapters } = source[0];
    const { pages, name, num } = chapterInfo;

    let previousChapterIndex;
    let nextChapterIndex;
    
    if (num != chapterNumber) { // Make sure that the current chapter matches the url
        props.getChapter(chapterNumber);
    }

    const dropdownTrigger = (
        <Button node='button' className='override-overlay'> 
            {name}
        </Button>
    );

    /**
     * Create the dropdown menu populated with the manga chapters, 
     * and create the link element for the previous and next chapter.
     * id param is use to create unique id for the element.
     */
    const dropdownMenu = (id) => {
        const chapterList = chapters.map((chapter, index) => {
            let isCurrent = chapter.num == num;

            if (isCurrent) {
                previousChapterIndex = index - 1;
                nextChapterIndex = index + 1;
            }

            return (
                <span key={chapter.chapterId} className={`${ isCurrent ? 'current-chapter' : '' }`}>
                    <Link to={`${chapter.num}`} >
                        {chapter.name}
                    </Link>
                </span>
            );
        });

        let menuComponents = [];
        let chapterNum;

        /**
         * Generate an icon element that links to the specified chapter
         */
        const chapterPointer = (chapterNum, iconName) => (
            <Link to={`${chapterNum}`} key={`chapter-${chapterNum}-link`} className='override-overlay'>
                <Icon>{iconName}</Icon>
            </Link>
        );

        if (previousChapterIndex >= 0) {
            chapterNum = chapters[previousChapterIndex].num;
            menuComponents.push(chapterPointer(chapterNum, 'arrow_back'));
        }
        
        menuComponents.push(
            <Dropdown key={`chapterlist-${id}`} trigger={dropdownTrigger}>
                {chapterList}
            </Dropdown>
        );
        
        if (nextChapterIndex < chapterList.length) {
            chapterNum = chapters[nextChapterIndex].num;
            menuComponents.push(chapterPointer(chapterNum, 'arrow_forward'));
        }

        return menuComponents;
    };

    /**
     * Create an overlay that will let user click on
     * one half of the screen to direct them to the next 
     * or previous chapter
     * 
     * This is dependent on dropdownMenu() geting ran at least once
     * cause it rely on the values for previousChapterIndex and nextChapterIndex
     * being defined.
     */
    function generateOverlayLink() {
        let overlays = []
        if (previousChapterIndex >= 0) {
            overlays.push(<Link to={`${chapters[previousChapterIndex].num}`} className='overlay-left'></Link>);
        }

        if (nextChapterIndex < chapters.length) {
            overlays.push(<Link to={`${chapters[nextChapterIndex].num}`} className='overlay-right'></Link>);
        }

        return overlays;
    };
    
    return (
        <div>
            { dropdownMenu('top') }
            { generateOverlayLink() }
            <div>
                {
                    pages.map(page =>
                        useDualPage ?
                        <span key={page.num /* <img src={page.link} /> */}>
                            <img className='page' style={getRandomColor()} />
                        </span>:
                        <div key={page.num /* <img src={page.link} /> */}>
                            <img className='page' style={getRandomColor()} />
                        </div>
                    )
                }
            </div>
            { dropdownMenu('bottom') }
        </div>
    )
}

/**
 * Create random background color style
 */
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return { backgroundColor: color };
  }

export default PageList;