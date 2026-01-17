// Base44 removed: use local offline API (no auth redirects).
// LocalStorage-backed API replacement for Base44 Transaction API

const STORAGE_KEY = 'bbwallet:transactions:v1';

/**
 * Get all transactions from localStorage
 */
const getTransactions = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    return JSON.parse(stored);
  } catch (error) {
    console.error('Failed to read transactions from localStorage:', error);
    return [];
  }
};

/**
 * Save transactions to localStorage
 */
const saveTransactions = (transactions) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
  } catch (error) {
    console.error('Failed to save transactions to localStorage:', error);
    // Handle storage failures gracefully (e.g., private browsing mode)
    throw new Error('Failed to save transaction. Storage may be unavailable.');
  }
};

/**
 * Transaction API - offline localStorage implementation
 */
export const Transaction = {
  /**
   * List all transactions
   * @returns {Promise<Array>} Array of transactions
   */
  async list() {
    return getTransactions();
  },

  /**
   * Create a new transaction
   * @param {Object} data - Transaction data
   * @returns {Promise<Object>} Created transaction with id and timestamp
   */
  async create(data) {
    const transactions = getTransactions();
    const newTransaction = {
      id: `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      ...data,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    transactions.push(newTransaction);
    saveTransactions(transactions);
    return newTransaction;
  },
};
