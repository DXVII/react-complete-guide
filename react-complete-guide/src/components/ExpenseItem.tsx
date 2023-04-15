import React from 'react';
import moment from 'moment';
import './ExpenseItem.css';
interface ExpenseItemProps {
	date?: Date;
	title: string;
	amount: number;
}

const ExpenseItem: React.FC<ExpenseItemProps> = (props: ExpenseItemProps) => {
	const { date, title, amount } = props;
	const fillDate = date ? date : moment();
	const formattedDate = <p>{moment(fillDate).format('MMMM Do YYYY')}</p>
	const expItem = (
		<div className='expense-item'>
			<div className='expense-item__description'>{title}</div>
			<div className='expense-item__price'> ${amount.toFixed(2)} </div>
			<div className='expense-item__date'>{formattedDate}</div>
		</div>
	);
	return expItem;
};

export default ExpenseItem;
