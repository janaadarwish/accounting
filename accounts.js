
const ACCOUNTS = [
  // ASSETS
  { code: "1", name: "Assets", level: 1, type: "asset" },
  { code: "101", name: "Fixed Assets", level: 2, type: "asset" },
  { code: "101001", name: "Fixed Assets - Cold Storage", level: 3, type: "asset" },
  { code: "101001001", name: "Refrigerator - 1", level: 4, type: "asset" },
  { code: "101001002", name: "Refrigerator - 2", level: 4, type: "asset" },
  { code: "101003", name: "Fixed Assets - IT Equipment", level: 3, type: "asset" },
  { code: "101003001", name: "IT Equipment - Laptops", level: 4, type: "asset" },
  { code: "101003002", name: "IT Equipment - Printers", level: 4, type: "asset" },
  { code: "102", name: "Cash and Bank", level: 2, type: "asset" },
  { code: "102001", name: "Bank Accounts", level: 3, type: "asset" },
  { code: "102001001", name: "CIB Bank - EGP", level: 4, type: "asset" },
  { code: "102001002", name: "CIB Bank - USD", level: 4, type: "asset" },
  { code: "102002", name: "Cash Accounts", level: 3, type: "asset" },
  { code: "102002001", name: "Cash on Hand - EGP", level: 4, type: "asset" },
  { code: "103", name: "Accounts Receivable", level: 2, type: "asset" },
  { code: "103001", name: "Local Customer - 1", level: 4, type: "asset" },
  { code: "105", name: "Inventory", level: 2, type: "asset" },
  { code: "105001", name: "Inventory - Raw Dates", level: 4, type: "asset" },
  { code: "105002", name: "Inventory - Finished Goods", level: 4, type: "asset" },

  // LIABILITIES & EQUITY
  { code: "2", name: "Liabilities & Equity", level: 1, type: "liability" },
  { code: "201", name: "Capital Accounts", level: 2, type: "equity" },
  { code: "201001", name: "Paid-in Capital", level: 4, type: "equity" },
  { code: "201003", name: "Retained Earnings (P&L)", level: 4, type: "equity" },
  { code: "202", name: "Non-Current Liabilities", level: 2, type: "liability" },
  { code: "202001", name: "Long-term Loans", level: 4, type: "liability" },
  { code: "203", name: "Current Liabilities", level: 2, type: "liability" },
  { code: "203001001", name: "Supplier - 1", level: 4, type: "liability" },
  { code: "203004", name: "Taxes Payable", level: 4, type: "liability" },
  { code: "203007", name: "Accumulated Depreciation", level: 4, type: "liability" },

  // EXPENSES
  { code: "3", name: "Expenses", level: 1, type: "expense" },
  { code: "301", name: "Operating Expenses (COGS)", level: 2, type: "expense" },
  { code: "301001", name: "Cost of Goods Sold - Raw", level: 4, type: "expense" },
  { code: "301007", name: "Salaries - Operations", level: 4, type: "expense" },
  { code: "302", name: "General & Administrative", level: 2, type: "expense" },
  { code: "302001", name: "Office Rent", level: 4, type: "expense" },
  { code: "302003", name: "Internet & Telecom", level: 4, type: "expense" },
  { code: "302008", name: "Electricity", level: 4, type: "expense" },
  { code: "302019", name: "Depreciation Expense", level: 4, type: "expense" },

  // REVENUE
  { code: "4", name: "Revenue", level: 1, type: "revenue" },
  { code: "401", name: "Direct Sales", level: 4, type: "revenue" },
  { code: "402", name: "Other Income (Interest/FX)", level: 4, type: "revenue" }
]; // End of Array

// 2. FUNCTIONS: Logic (outside the array)

function resetFilters() {
  document.getElementById('dateFrom').value = '';
  document.getElementById('dateTo').value = '';
  document.getElementById('typeFilter').value = 'all';
  renderTrialBalance();
}

function getLeafAccounts() {
  return ACCOUNTS.filter(a => a.level === 4);
}

function getAccount(code) {
  return ACCOUNTS.find(a => a.code === code);
}

function loadEntries() {
  const data = localStorage.getItem("journal_entries");
  return data ? JSON.parse(data) : [];
}

function saveEntries(entries) {
  localStorage.setItem("journal_entries", JSON.stringify(entries));
}

function fmt(n) {
  return Number(n || 0).toLocaleString("en-US", { 
    minimumFractionDigits: 2, 
    maximumFractionDigits: 2 
  });
}