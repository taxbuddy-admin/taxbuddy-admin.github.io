---
sidebar_position: 4
title: EPF Calculator
---

# EPF Calculator

Calculate retirement savings from EPF by inputting current age, basic salary, contribution percentages, and expected retirement age — delivering precise corpus projections that empower informed decisions on voluntary contributions and financial security planning.

**Base URL (UAT)**
```
POST https://uat-api.taxbuddy.com/itr/external/calculator/epf
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
| `basicPayPlusDA` | YES | Basic salary including Dearness Allowance (DA) |
| `currentAge` | YES | Current age of user |
| `employeesContribution` | YES | Employee PF contribution percentage |
| `rateOfIncreaseOfBasicPay` | YES | Annual increment rate for basic salary |
| `retirementAge` | YES | Expected retirement age |
| `interestRate` | NO | PF interest rate (defaults to current EPFO rate if not provided) |
| `employersContribution` | NO | Employer PF contribution percentage |

---

## Sample request

```bash
curl --location 'https://uat-api.taxbuddy.com/itr/external/calculator/epf' \
--header 'x-api-key;' \
--header 'Content-Type: application/json' \
--data '{
  "basicPayPlusDA": 500000,
  "currentAge": 30,
  "employeesContribution": 12,
  "employersContribution": null,
  "interestRate": null,
  "rateOfIncreaseOfBasicPay": 8,
  "retirementAge": 60
}'
```

:::info Test cases
Reference test cases: [Pension/EPF test cases](https://docs.google.com/spreadsheets/d/1lYdreAYMv0OZA83S5tE23ANno0ASWazQ/edit?gid=1053156680)
:::
