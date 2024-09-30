import React, { useState } from 'react';
import './MortgageCalculator.css';

const MortgageCalculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculateMortgage = () => {
    if (loanAmount && interestRate && loanTerm) {
      const principal = loanAmount - downPayment;
      const monthlyInterestRate = interestRate / 100 / 12;
      const numberOfPayments = loanTerm * 12;

      const payment = (
        (principal * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments))
      ).toFixed(2);

      setMonthlyPayment(payment);
    }
  };

  return (
    <div className="mortgage-container">
      <h1 className="title">Mortgage Calculator</h1>
      <div className="calculator-form">
        <div className="input-group">
          <label htmlFor="loanAmount">Loan Amount</label>
          <input
            type="number"
            id="loanAmount"
            placeholder="Enter loan amount"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="interestRate">Interest Rate (%)</label>
          <input
            type="number"
            id="interestRate"
            placeholder="Enter interest rate"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="loanTerm">Loan Term (Years)</label>
          <input
            type="number"
            id="loanTerm"
            placeholder="Enter loan term"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="downPayment">Down Payment</label>
          <input
            type="number"
            id="downPayment"
            placeholder="Enter down payment"
            value={downPayment}
            onChange={(e) => setDownPayment(e.target.value)}
          />
        </div>

        <button className="calculate-button" onClick={calculateMortgage}>
          Calculate
        </button>

        {monthlyPayment && (
          <div className="result">
            <h2>Estimated Monthly Payment:</h2>
            <p>${monthlyPayment}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MortgageCalculator;
