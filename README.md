# LedgerFlow: Web-Based Accounting System

LedgerFlow is a functional, browser-based accounting platform built to streamline financial tracking and reporting. Designed with a focus on accuracy and ease of use, it automates the double-entry bookkeeping process, from initial data entry to the final generation of financial statements.

## 🚀 Key Features

* **Comprehensive Chart of Accounts:** Includes a pre-configured library of nearly 500 accounts.
* **Automated Financial Statements:** Real-time generation of Trial Balance, Income Statement, and Balance Sheet.
* **Balanced Journaling:** Built-in logic to ensure every transaction maintains the fundamental accounting equation ($Assets = Liabilities + Equity$).
* **Equity Bridge:** Integrated logic that automatically carries over Net Profit/Loss into the Balance Sheet.
* **Excel Integration:** Support for importing financial data from Excel spreadsheets using the **SheetJS** library.
* **Data Persistence:** Uses `localStorage` to keep your financial data accessible across sessions.

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
* **Libraries:** [SheetJS (XLSX)](https://sheetjs.com/) for Excel processing.
* **Storage:** Browser `localStorage`.

## 📂 Project Structure

```text
├── index.html          # Dashboard & Main Overview
├── entry.html          # Transaction Entry Screen
├── trial-balance.html  # Trial Balance Report
├── income-statement.html # Profit and Loss Report
├── balance-sheet.html  # Financial Position Report
├── assets/
│   ├── css/            # Custom styling
│   └── js/             # Accounting logic and Excel handling
└── data/               # Chart of Accounts and local data scripts'
```
