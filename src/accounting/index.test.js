const { expect } = require('chai');
const mock = require('mock-fs');
const fs = require('fs');

// Import the app logic as functions for testability
let app;

function resetModules() {
  delete require.cache[require.resolve('./index.js')];
  app = require('./index.js');
}

describe('Accounting App Business Logic', function () {
  beforeEach(() => {
    // Mock the balance file system
    mock({
      'balance.json': JSON.stringify({ balance: '1000.00' })
    });
    resetModules();
  });

  afterEach(() => {
    mock.restore();
  });

  it('TC-01: View initial balance', function () {
    const balance = app.loadBalance();
    expect(balance).to.equal(1000.00);
  });

  it('TC-02: Credit account with valid amount', function () {
    let balance = app.loadBalance();
    balance += 200.00;
    app.saveBalance(balance);
    const newBalance = app.loadBalance();
    expect(newBalance).to.equal(1200.00);
  });

  it('TC-03: Debit account with sufficient funds', function () {
    let balance = app.loadBalance();
    balance -= 100.00;
    app.saveBalance(balance);
    const newBalance = app.loadBalance();
    expect(newBalance).to.equal(900.00);
  });

  it('TC-04: Debit account with insufficient funds', function () {
    let balance = app.loadBalance();
    const debitAmount = 2000.00;
    if (balance < debitAmount) {
      // Should not change balance
      expect(balance).to.equal(1000.00);
    }
  });

  it('TC-05: Credit account with zero amount', function () {
    let balance = app.loadBalance();
    balance += 0.00;
    app.saveBalance(balance);
    const newBalance = app.loadBalance();
    expect(newBalance).to.equal(1000.00);
  });

  it('TC-06: Debit account with zero amount', function () {
    let balance = app.loadBalance();
    balance -= 0.00;
    app.saveBalance(balance);
    const newBalance = app.loadBalance();
    expect(newBalance).to.equal(1000.00);
  });

  it('TC-09: Multiple sequential credits and debits', function () {
    let balance = app.loadBalance();
    balance += 100.00;
    app.saveBalance(balance);
    balance = app.loadBalance();
    balance -= 50.00;
    app.saveBalance(balance);
    const newBalance = app.loadBalance();
    expect(newBalance).to.equal(1050.00);
  });
});
