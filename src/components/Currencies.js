import React, {useEffect, useState} from 'react';
import Currency from './Currency'; 
import {Table} from 'react-bootstrap';
import Search from './Search';

function Currencies() {
    const [currencies, setCurrencies] = useState([]);
    const [filteredCurrencies, setFilteredCurrencies] = useState([]);
    const [searchValue, setsearchValue] = useState([]);    

    useEffect(() => {
        fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20200302&json')
        .then(res => res.json())
        .then(data => setCurrencies(data.map(currency => ({
            name: currency.txt,
            rate: currency.rate.toFixed(2),
            code: currency.cc
        }))));
    }, [])

    function searchByCountryName(value) {
        setsearchValue(value);
        const result = currencies.filter(currency => currency.name.toLowerCase().includes(value));
        setFilteredCurrencies(result);
    }

    return <div>   
        <Search searchByCountryName={searchByCountryName} />     
        <Table striped bordered hover>
                <thead>
                    <tr><th>Name</th><th>Rate</th><th>Code</th></tr>
                </thead>
                <tbody>
                    {(searchValue.length ? filteredCurrencies : currencies).map(currency => <Currency 
                    currency={currency} key={currency.code} />)}                
                </tbody>
        </Table>
    </div>
} 

export default Currencies;
