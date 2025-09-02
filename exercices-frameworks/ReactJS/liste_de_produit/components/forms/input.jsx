
/*
export function :  permet d'exporter une fonction pour qu'elle puisse être importée dans un autre fichier.
*/

/* Js doc */
/**
 * @param {string} placeholder 
 * @param {string} value 
 * @param {(s: string) => void} onChange 
*/

export function Input ({placeholder, value, onChange}) {
    return <div>
        <input type="text" className="form-control" value={value} placeholder={placeholder} onChange={(e) => {onChange(e.target.value)}} />
    </div>
}