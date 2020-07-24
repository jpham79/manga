import React from 'react';

const PageList = props => {
    const { pages } = props;
    console.log(pages);
    return (
        pages.map(page =>
            <div key={page.num}>
                <img src={page.link} />
            </div>
        )
    )
}

export default PageList;