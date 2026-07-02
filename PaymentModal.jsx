import React, { useState } from 'react';
import { X } from 'lucide-react';
import '../styles/PaymentModal.css';
export default function PaymentModal({ banks, onClose }) {
    const [selectedBank, setSelectedBank] = useState(null);
    const handlePayment = async () => {
        if (!selectedBank) {
            alert('Please select a bank');
            return;
        }
        try {
            const response = await fetch('/api/payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    bank: selectedBank.bank_code,
                    amount: 1000,
                }),
            });
            if (response.ok) {
                alert('Payment initiated successfully!');
                onClose();
            }
            else {
                alert('Payment failed');
            }
        }
        catch (error) {
            console.error('Error:', error);
            alert('Error processing payment');
        }
    };
    return (<div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Select Payment Method</h2>
          <button className="close-btn" onClick={onClose}>
            <X size={24}/>
          </button>
        </div>

        <div className="modal-body">
          <p className="modal-subtitle">Choose a bank to process your payment</p>

          {banks && banks.length > 0 ? (<div className="banks-list">
              {banks.map((bank) => (<button key={bank.bank_code} className={`bank-option ${selectedBank?.bank_code === bank.bank_code ? 'selected' : ''}`} onClick={() => setSelectedBank(bank)}>
                  <div className="bank-info">
                    <h4>{bank.bank_name}</h4>
                    <p>Code: {bank.bank_code}</p>
                  </div>
                  <div className="radio-button">
                    {selectedBank?.bank_code === bank.bank_code && (<div className="radio-inner"></div>)}
                  </div>
                </button>))}
            </div>) : (<div className="loading-message">Loading banks...</div>)}
        </div>

        <div className="modal-footer">
          <button className="btn-cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="btn-pay" onClick={handlePayment} disabled={!selectedBank}>
            Continue Payment
          </button>
        </div>
      </div>
    </div>);
}
