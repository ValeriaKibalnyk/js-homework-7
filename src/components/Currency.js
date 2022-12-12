import React from "react";

function Currency({currency}) {
    return <tr>
        <td>{currency.name}</td>
        <td>{currency.rate}</td>
        <td>{currency.code}</td>
    </tr>
}

export default Currency;