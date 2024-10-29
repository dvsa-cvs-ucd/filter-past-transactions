module.exports = {
  sections: [
    {
      name: "Facility management",
      description: "Access your on-the-day completed test results and search your past transactions.",
      tabs: [
        {
          name: "Today's completed tests",
          content: 'todays-tests'
        },
        {
          name: "Search past transactions",
          content: 'past-transactions',
          deepContent: [
            {
              name: 'Search results',
              content: 'transactions-table'
            }
          ]
        }
      ]
    }
  ],
  activeFilters: ['credit memo', 'invoice'],
  pastTransactions: [
    {
      "date": "24 October 2024",
      "item": "Payment - CVS0-01-20241024-083319-62CDB835",
      "amount": 9900,
      "balance": 10000,
      "type": "payment"
    },
    {
      "date": "23 October 2024",
      "item": "Invoice - INV-000000647",
      "amount": -120,
      "balance": 9880,
      "type": "invoice"
    },
    {
      "date": "22 October 2024",
      "item": "Credit Memo - CRE-100000068",
      "amount": 150,
      "balance": 10030,
      "type": "credit memo"
    },
    {
      "date": "20 October 2024",
      "item": "Payment - CVS0-01-20241020-083319-62CDB836",
      "amount": 3000,
      "balance": 7030,
      "type": "payment"
    },
    {
      "date": "19 October 2024",
      "item": "Credit Memo - CRE-100000065",
      "amount": 100,
      "balance": 4030,
      "type": "credit memo"
    },
    {
      "date": "15 October 2024",
      "item": "Invoice - INV-000000648",
      "amount": -500,
      "balance": 3930,
      "type": "invoice"
    },
    {
      "date": "12 October 2024",
      "item": "Credit Memo - CRE-100000064",
      "amount": 120,
      "balance": 4430,
      "type": "credit memo"
    },
    {
      "date": "08 October 2024",
      "item": "Invoice - INV-000000646",
      "amount": -250,
      "balance": 4310,
      "type": "invoice"
    },
    {
      "date": "06 October 2024",
      "item": "Payment - CVS0-01-20241006-083319-62CDB837",
      "amount": 2000,
      "balance": 4560,
      "type": "payment"
    },
    {
      "date": "03 October 2024",
      "item": "Credit Memo - CRE-100000063",
      "amount": 120,
      "balance": 2560,
      "type": "credit memo"
    }
  ]
}
