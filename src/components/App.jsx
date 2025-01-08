import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItems] = useState([]);

  function addNote(propsTitle, propsContent){
    setItems((prev)=>{
      return [...prev, {'title': propsTitle, 'content': propsContent}]
    })
  }

  function deleteNote(id){
    setItems((prev) =>{
      return prev.filter((item, index) =>{
        return index != id
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea add={addNote} />
      <ul>
      {items.map((item, index) =>{
        return(
          <Note key={index} 
          id={index} 
          title={item.title} content={item.content} delete={deleteNote}/>
        )
      })}
      </ul>
      <Footer />
    </div>
  );
}

export default App;
