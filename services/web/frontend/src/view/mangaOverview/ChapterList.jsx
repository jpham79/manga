import React from 'react';

const ChapterList = props => {
    const chapters = props.chapters;
    console.log(chapters)
    return (
        <div>
            {chapters.map(chapter =>
                <li>
                    {chapter.name}
                </li>
            )}
        </div>
    )
}

export default ChapterList;