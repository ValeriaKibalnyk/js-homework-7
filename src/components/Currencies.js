import React, {useEffect, useState} from 'react';
import Currency from './Currency'; 
import {Table} from 'react-bootstrap';

function Currencies() {
    const [currencies, setCurrencies] = useState([]);

    useEffect(() => {
        fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20200302&json')
        .then(res => res.json())
        .then(data => setCurrencies(data.map(currency => ({
            name: currency.txt,
            rate: currency.rate.toFixed(2),
            code: currency.cc
        }))));
    }, [])

    return <Table striped bordered hover>
                <thead>
                    <tr><th>Name</th><th>Rate</th><th>Code</th></tr>
                </thead>
                <tbody>
                    {currencies.map(currency => <Currency currency={currency} key={currency.code} />)};                
                </tbody>
            </Table>
} 

export default Currencies;
