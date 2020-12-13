import React, { useState } from 'react';

import { Button } from 'react-materialize';
import { Link } from "react-router-dom";

import '../styles/page-manager.scss';

const MangaManager = (props) => {
    const [thumbnail, updateThumbnail] = useState(null);
    let [mangaName, updateMangaName] = useState('');
    
    function processFiles(files) {
        updateThumbnail(URL.createObjectURL(files[0]));
    }

    return (
        <div>
            <form className="manga-input">
                <div class="row">
                    <div class="col s12">
                        {
                            thumbnail ?
                            <div key="thumbnail">
                                <img src={thumbnail}
                                    height="600px" 
                                    width="450px"/>
                            </div>:
                            <div>
                                <img height="600px" 
                                    width="450px"/>
                            </div>
                        }
                        <input type="file" onChange={(event) => processFiles(event.target.files)}/> 
                    </div>
                    <div class="col s12">
                        <input placeholder="Name" onChange={(event) => updateMangaName(event.target.value)} type="text"/>
                    </div>
                    <div class="col s12">
                        <textarea rows="25" placeholder="Description"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col s12">
                        <Link to={'/upload/' + mangaName.replace(/\s+/g, '_')} className={mangaName.trim().length > 0 ? '' : 'no-click'}>
                            <Button variant="contained" disabled={mangaName.trim().length == 0}>Create Manga</Button>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default MangaManager;