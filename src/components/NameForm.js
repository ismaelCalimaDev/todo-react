import {useEffect, useRef, useState} from "react";
import useSaveLocalStorage from "../hooks/useSaveLocalStorage";

function NameForm() {
    const [nameInput, setNameInput] = useSaveLocalStorage('name', '')
    const refInput = useRef(null)

    useEffect(() => {
        refInput.current.focus()
    }, [])
    function updateName(e) {
        setNameInput(e.target.value)
    }
    return (
        <div className="mb-6">
            <form action="#">
                <input
                    ref={refInput}
                    type="text"
                    className="todo-input"
                    placeholder="Your name..."
                    value={nameInput}
                    onChange={updateName}
                />
            </form>
            {nameInput && <p className="my-2">Hello, {nameInput}</p>}
        </div>
    );
}

export default NameForm;
