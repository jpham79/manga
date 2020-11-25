import React, { useState } from 'react';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import '../styles/page-manager.scss';

const PageManager = (props) => {
    const [pages, updatePages] = useState([]);
    
    function processFiles(files) {
        const imgObjectList = [];
        if (files.length > 0) {
            for (let x = 0; x < files.length; x++)
                imgObjectList.push(
                    <Draggable draggableId={files[x].name} key={files[x].name} index={x}>
                        {
                            (provided, snapshot) => (
                                <img ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} src={URL.createObjectURL(files[x])} width='300px' index={x}/>
                            )
                        }
                    </Draggable>
                );

            updatePages(imgObjectList);
        }
    }

    function onDragEnd(result) {
        if (result.destination) {
            const updatedPages = Array.from(pages);
            const [displacedPage] = updatedPages.splice(result.destination.index, 1);

            updatedPages.splice(result.source.index, 0, displacedPage);

            updatePages(updatedPages);
        }
    }


    return (
        <div>
            <div>
                <input type="file" onChange={(event) => processFiles(event.target.files)} multiple/> 
            </div>
            {
                pages.length > 0 ?
                    <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId="drop-container" direction="horizontal">
                            {
                               (provided, snapshot) => (
                                <div ref={provided.innerRef}>
                                    {pages.map((page) => page)}
                                    {provided.placeholder}
                                </div>
                               )
                            }
                        </Droppable>
                    </DragDropContext> :
                    <div></div>
            }
        </div>
    )
}

export default PageManager;