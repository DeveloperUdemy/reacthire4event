import {useState, useEffect} from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
const [currentUser, setCurrentUser] = useState(null);
    useEffect(() => { 
    setCurrentUser(JSON.parse(localStorage.getItem('loginAuth')));
    //console.log(StoreDataUser);
     },[]);
    return (
        <NoteContext.Provider  value={currentUser}>
         {props.children}
        </NoteContext.Provider>

    )

}

export default NoteState;