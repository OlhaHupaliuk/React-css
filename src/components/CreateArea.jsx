import React, { useState } from "react";

function CreateArea(props) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  function handleChange(event){
    const value = event.target.value;
    if(event.target.name === 'title'){
      setTitle(value)
    }else{
      setContent(value)
    }
  }

  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={title}/>
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={content}/>
        <button onClick={(event) => {event.preventDefault(); props.add(title, content); setContent(''); setTitle('')}}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
