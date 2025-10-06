

/**
 * @param {{product: {name: string, price: number, stocked: boolean}}} product 
 */

import { useEffect } from "react"

export function ProductRow({product}) {

    const style = product.stocked ? undefined : {color: 'red'}

    throw new Error('azea')

    return <tr>
        <td style={style}>{product.name}</td>
        <td style={style}>{product.price}</td>
    </tr>
}