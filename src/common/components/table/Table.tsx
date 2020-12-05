import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap';

export const TableComponent = React.memo((props: any) => {
    return <Table style={{ cursor: "pointer" }} >
        <thead>
        <tr>
            <th>#</th>
            <th>Coin</th>
            <th>Price</th>
            <th>1h</th>
            <th>24h</th>
            <th>7d</th>
            <th>24h Volume</th>
            <th>Mkt Cap</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>1</td>
            <td>Dragon</td>
            <td>$3,24</td>
            <td>-1,3%</td>
            <td>-3,2%</td>
            <td>-0,3%</td>
            <td>$20,994,873</td>
            <td>$112,060,765</td>
        </tr>
        </tbody>
    </Table>
})