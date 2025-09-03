

import { useState, useEffect } from "react";

function Timer() {

    const [duration, setDuration] = useState(5)
    const [secondLeft, setSecondLeft] = useState(duration)

    useEffect(() => {
        setSecondLeft(duration)
        /*setInterval : Execute une fonction de manière répétée, avec un délai fixe entre chaque exécution.*/
        const timer = setInterval(() => {
            setSecondLeft(v => {
                if (v ===0){
                    clearInterval(timer)
                    return 0
                }
                return v - 1
            })
        }, 500)

        return () => {
            clearInterval(timer)
        }
    }, [duration])
    

    return <div className="vstack gap-2">
        <Input value={duration} onChange={setDuration} placeholder="Timer..." />
        <p>Decompte : {secondLeft}</p>
    </div>
}



/*-------------------------------------------------------------------------*/
function Input ({placeholder, value, onChange}) {
    return <div>
        <input type="text" className="form-control" value={value} placeholder={placeholder} onChange={(e) => {onChange(e.target.value)}} />
    </div>
}

function Checkbox({checked, onChange, label, id}) {
    return <div className="form-check">
        <input id={id} type="checkbox" className="form-check-input" checked={checked} onChange={(e) => {onChange(e.target.checked)}}/>
        <label htmlFor={id} className="form-check-label">{label}</label>
    </div>
}

export default Timer