import { useState } from "react"

export function HeaderWithButton(){
    const [title, setTitle] = useState('my name is amit');
    function updater(){
        setTitle(`my name is ${Math.random()}`);
    }
    return(
        <>  
            <button onClick={updater}> update title</button>
            <div>{title}</div>
        </>
    )
}