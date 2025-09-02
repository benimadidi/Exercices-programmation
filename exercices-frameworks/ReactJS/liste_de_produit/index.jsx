
import { Checkbox } from './components/forms/checkbox.jsx'
import { Input } from './components/forms/input.jsx'
import { ProductCategoryRow } from './products/productcategoryrow.jsx'
import { ProductRow } from './products/productrow.jsx'
import { useState } from 'react'

const PRODUCTS = [
    {category: 'Fruits', price: '$1', stocked: true, name: 'Apple'},
    {category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit'}, 
    {category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit'},
    {category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach'},
    {category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin'},
    {category: 'Vegetables', price: '$1', stocked: true, name: 'Peas'}
]

function ListeDeProduit () {

    const [showStockedOnly, setShowStockedOnly] = useState(false)
    const [search, setSearch] = useState('')

    const visibleProducts = PRODUCTS.filter(product => {
        if (showStockedOnly && !product.stocked){
            return false
        }

        if (search && !product.name.toLowerCase().includes(search)){
            return false
        }

        return true
    })

    return <div>
       <SearchBar
        search={search}
        onSearchChange={setSearch} 
        showStockedOnly={showStockedOnly} 
        onStockedOnlyChange={setShowStockedOnly} /> 

       <ProductTable products={visibleProducts} />
    </div>
}

function SearchBar({showStockedOnly, onStockedOnlyChange, search, onSearchChange}) {

    return <div className='container my-3'>

        <div className="mb-3">

            <Input 
                value={search} 
                onChange={onSearchChange} 
                placeholder="Rechercher..."/>

            <Checkbox 
                checked={showStockedOnly} 
                onChange={onStockedOnlyChange} 
                label="N'afficher que les produits en stock" 
                id="stocked"/>

        </div>

    </div>
}

function ProductTable({products}) {

    const rows = []
    let lastCategory = null
    
    for (let product of products) {
        if (product.category !== lastCategory) {
            rows.push(<ProductCategoryRow key={product.category} name={product.category} />)
        }
        lastCategory = product.category
        rows.push(<ProductRow key={product.name} product={product} />)
    }

    return <table className='table'>
        <thead>
            <tr>
                <th>Nom</th>
                <th>Prix</th>
            </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
    </table>
}

export default ListeDeProduit