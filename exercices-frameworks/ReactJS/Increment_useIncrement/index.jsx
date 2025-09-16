
import { useIncrement } from "../../../../Cours-prog/Frameworks_cours/reactjs-bibliotehque-js-cours/src/cours/hooks/useIncrement"


function Increment() {

    const [count, increment, decrement] = useIncrement(0)

    return <div>
        Compteur {count}
        <br /> <br />
        <button onClick={increment}>Incrémenter</button>
        <br />
        <button onClick={count === 0 ? null : decrement}>Décrémenter</button>
    </div>

}

export default Increment