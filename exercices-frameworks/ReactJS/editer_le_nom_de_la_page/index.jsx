import { useState } from "react"
import { useDocumentTitle } from "../../../../Cours-prog/Frameworks_cours/reactjs-bibliotehque-js-cours/src/cours/hooks/useDocumentTitle"
import { Input } from "../liste_de_produit/components/forms/input"



function EditTitle(){

    const [name, setName] = useState('')

    useDocumentTitle(name ? `Editer ${name}` : null)

    return <div>
        <Input placeholder="Modifier le titre"  value={name} onChange={setName}/>
    </div>

}

export default EditTitle