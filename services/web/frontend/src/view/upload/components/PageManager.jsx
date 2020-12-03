import React, { useState } from 'react';

import { Button } from 'react-materialize';

import '../styles/page-manager.scss';

const PageManager = (props) => {
    const [pages, updatePages] = useState([]);
    
    function processFiles(files) {
        const imgObjectList = [];
        if (files.length > 0) {
            for (let x = 0; x < files.length; x++)
                imgObjectList.push(
                    {
                        name: files[x].name,
                        objectUrl: URL.createObjectURL(files[x]),
                        index: x
                    }
                );

            updatePages(imgObjectList);
        }
    }

    /**
     * Update the new page number of the image without changing the currect
     * ordering of the list
     * @param {*} event 
     * @param {*} originalIndex 
     */
    function changeIndexDirty(event, originalIndex) {
        const listCopy = [...pages];
        const newIndex = event.target.value - 1;

        if (newIndex >= 0 && newIndex < pages.length) {
            listCopy[originalIndex].index = newIndex;
        }
        else if (newIndex < 0){
            listCopy[originalIndex].index = pages.length - 1;
        }
        else {
            listCopy[originalIndex].index = 0;
        }

        updatePages(listCopy);
    }

    /**
     * Update the ordering of the list to match the order as defined by the user.
     * If there's a conflict in the order (two page share the same number), then
     * the conflicting page will be shifted right to make room
     */
    function changeIndex() {
        const pendingList = [];

        pages.forEach((page) => {
            if (!pendingList[page.index]) {
                pendingList[page.index] = page;
            }
            else {
                pendingList.splice(page.index, 0, page);
            }
        });

        // Take out any empty entry caused by duplicate page number input iknowthiscanbedoneinplacebutfuckit
        let adjustedIndex = 0;
        const finalizedList = [];
        for (let x = 0; x < pendingList.length; x++) {
            if (pendingList[x]) {
                pendingList[x].index = adjustedIndex;
                finalizedList[adjustedIndex++] = pendingList[x];
            }
        }
        
        updatePages(finalizedList);
    }

    return (
        <div>
            <div>
                <input type="file" onChange={(event) => processFiles(event.target.files)} multiple/> 
            </div>
            {
                pages.length > 0 ?
                    <div className='page-container'>
                        { 
                            pages.map((page, index) => (
                                <span key={page.name}>
                                    <img src={page.objectUrl}
                                        height='600px' 
                                        width='300px'/>
                                        <div>
                                            <input className='page-index' type='number' value={page.index + 1} onChange={(event) => changeIndexDirty(event, index)} />
                                        </div>
                                </span>
                            )) 
                        }

                        <div className='input-button'>
                            { pages.length > 1 && <Button className='rearrange' variant="contained" onClick={changeIndex}>Rearrange</Button> }
                            <Button variant="contained">Upload</Button>
                        </div>
                    </div> :
                    <div></div>
            }
        </div>
    )
}

export default PageManager;