import React from 'react';
import '../styles/TransactionTable.css';
export default function TransactionTable({ transactions }) {
    return (<div className="transaction-table-wrapper">
      <table className="transaction-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (<tr key={tx.id}>
              <td>{tx.id}</td>
              <td>{tx.date}</td>
              <td>{tx.description}</td>
              <td>{tx.amount}</td>
              <td>
                <span className={`status-badge ${tx.status.toLowerCase()}`}>
                  {tx.status}
                </span>
              </td>
            </tr>))}
        </tbody>
      </table>
    </div>);
}
