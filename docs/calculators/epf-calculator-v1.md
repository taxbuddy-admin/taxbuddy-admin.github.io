---
sidebar_position: 5
title: EPF Calculator V1
---

# EPF Calculator V1

An enhanced EPF calculator that accepts inputs like present EPF balance, monthly contributions, salary growth, ages, and interest rate — projecting:

- Month-by-month contributions and balance changes
- Monthly interest accrual with year-end credit
- Year-by-year EPF corpus chart
- Final corpus at retirement
- Lumpsum withdrawal and annuity amounts
- Monthly pension from annuity

**Base URL (UAT)**
```
POST https://uat-api.taxbuddy.com/itr/external/calculator/epf/v1
```

---

## Request headers

| Header | Value |
|--------|-------|
| `x-api-key` | Your API key |
| `Content-Type` | `application/json` |

---

## Payload fields

| Field | Required | Description |
|-------|----------|-------------|
| `presentCorpus` | YES | Current EPF balance |
| `currentAge` | YES | Current age of user |
| `employeesContribution` | YES | Employee PF contribution amount (monthly) |
| `employersContribution` | YES | Employer PF contribution amount (monthly) |
| `rateOfIncreaseOfBasicPay` | YES | Annual increment rate for basic salary (e.g. `0.10` for 10%) |
| `interestRate` | YES | PF interest rate (e.g. `0.0825` for 8.25%) |
| `retirementAge` | YES | Expected retirement age |
| `lumpsumWithdrawalPercentage` | YES | Maximum 40% allowed |

---

## Sample request

```bash
curl --location 'https://uat-api.taxbuddy.com/itr/external/calculator/epf/v1' \
--header 'x-api-key: YOUR_API_KEY' \
--header 'Content-Type: application/json' \
--data '{
  "presentCorpus": 350000,
  "employeesContribution": 3000,
  "employersContribution": 2000,
  "rateOfIncreaseOfBasicPay": 0.10,
  "interestRate": 0.0825,
  "currentAge": 25,
  "retirementAge": 60,
  "lumpsumWithdrawalPercentage": 40
}'
```

:::note
`lumpsumWithdrawalPercentage` cannot exceed **40%** for EPF withdrawals.
:::
