import React from 'react';
import { Link } from "react-router-dom";
import { Collection, CollectionItem } from 'react-materialize';

const ChapterList = props => {
    const { name, chapters, getChapterId  } = props;
    return (
        <Collection>
            {chapters.map(chapter =>
                <CollectionItem key={chapter.chapterId} className="blue-grey darken-3">
                    <Link to={`${name}/chapter/${chapter.num}`} >
                        <div onClick={() => getChapterId(chapter.chapterId)} className="white-text">
                            {chapter.name}
                        </div>
                    </Link>
                </CollectionItem>
            )}
        </Collection>
    )
}

export default ChapterList;