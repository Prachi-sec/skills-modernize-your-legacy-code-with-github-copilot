# Test Plan for COBOL School Accounting System

This test plan covers all business logic implemented in the current COBOL application for student account management. Use this plan to validate the system with business stakeholders and as a basis for future automated tests.

| Test Case ID | Test Case Description | Pre-conditions | Test Steps | Expected Result | Actual Result | Status (Pass/Fail) | Comments |
|--------------|----------------------|----------------|------------|-----------------|---------------|--------------------|----------|
| TC-01 | View initial balance | Application started, no prior transactions | 1. Start app<br>2. Select 'View Balance' | Balance displayed as 1000.00 |  |  |  |
| TC-02 | Credit account with valid amount | Application started | 1. Start app<br>2. Select 'Credit Account'<br>3. Enter 200.00 | Balance increases by 200.00 (1200.00 shown) |  |  |  |
| TC-03 | Debit account with sufficient funds | Application started, balance >= debit amount | 1. Start app<br>2. Select 'Debit Account'<br>3. Enter 100.00 | Balance decreases by 100.00 (900.00 shown) |  |  |  |
| TC-04 | Debit account with insufficient funds | Application started, balance < debit amount | 1. Start app<br>2. Select 'Debit Account'<br>3. Enter 2000.00 | Error message: 'Insufficient funds for this debit.'<br>Balance unchanged |  |  |  |
| TC-05 | Credit account with zero amount | Application started | 1. Start app<br>2. Select 'Credit Account'<br>3. Enter 0.00 | Balance unchanged (1000.00 shown) |  |  |  |
| TC-06 | Debit account with zero amount | Application started | 1. Start app<br>2. Select 'Debit Account'<br>3. Enter 0.00 | Balance unchanged (1000.00 shown) |  |  |  |
| TC-07 | Invalid menu selection | Application started | 1. Start app<br>2. Enter invalid menu option (e.g., 5) | Error message: 'Invalid choice, please select 1-4.' |  |  |  |
| TC-08 | Exit application | Application started | 1. Start app<br>2. Select 'Exit' | Application terminates with 'Goodbye!' message |  |  |  |
| TC-09 | Multiple sequential credits and debits | Application started | 1. Start app<br>2. Credit 100.00<br>3. Debit 50.00<br>4. View Balance | Balance reflects all transactions (e.g., 1050.00) |  |  |  |

> **Note:** Fill in the 'Actual Result', 'Status', and 'Comments' columns during test execution.
