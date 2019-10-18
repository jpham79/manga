import React from 'react';

const PageList = props => {
    const { pages }  = props;
    return (
        pages.map(page => 
            <div key={page.num}>
                <img src={page.link} />
            </div>
        )
    )
}

export default PageList;