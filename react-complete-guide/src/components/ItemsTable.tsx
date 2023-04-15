import React from 'react';
import ExpenseItem from './ExpenseItem';
import { expenses, ItemDetails } from '../database';

export default function ItemsTable() {
    const itemsArray = expenses.map((item: ItemDetails) => (
        <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
    ));
    return <div>{itemsArray}</div>;
} 
    
