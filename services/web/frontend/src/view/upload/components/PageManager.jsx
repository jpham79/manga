import React, { useState } from 'react';

import '../styles/page-manager.scss';

const PageManager = (props) => {
    const [pages, updatePages] = useState([]);
    
    function processFiles(files) {
        const imgObjectList = [];
        if (files.length > 0) {
            for (let x = 0; x < files.length; x++)
                imgObjectList.push(<img key={files[x].name} src={URL.createObjectURL(files[x])} width='300px'/>);

            updatePages(imgObjectList);
        }
    }


    return (
        <div>
            <div>
                <input type="file" onChange={(event) => processFiles(event.target.files)} multiple/> 
            </div>
            {
                pages.map((img) => img)
            }
        </div>
    )
}

export default PageManager;