import React from 'react';
import { Link } from "react-router-dom";

const ChapterList = props => {
    const { name, chapters, getChapterId  } = props;
    return (
        <div>
            {chapters.map(chapter =>
                <li key={chapter.chapterId}>
                    <Link to={`${name}/chapter/${chapter.num}`} >
                        <div onClick={() => getChapterId(chapter.chapterId)}>
                            {chapter.name}
                        </div>
                    </Link>

                </li>
            )}
        </div>
    )
}

export default ChapterList;