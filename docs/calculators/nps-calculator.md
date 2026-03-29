---
sidebar_position: 2
title: NPS Calculator
---

# NPS Calculator

Calculate your NPS retirement corpus, monthly pension income, and tax benefits by inputting age, contributions, and return expectations — delivering actionable insights to future-proof your retirement strategy.

**Base URL (UAT)**
```
POST https://uat-api.taxbuddy.com/itr/external/calculator/nps
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
| `annuity` | YES | Withdrawal ratio of annuity vs lumpsum |
| `currentAge` | YES | Current age of user |
| `monthlyInvestment` | YES | Monthly invested amount |
| `rateOfAnnuity` | YES | Expected rate of annuity |
| `rateOfInterestPA` | YES | Expected rate of return per annum |
| `retirementAge` | YES | Expected age of retirement |
| `lumpsum` | YES | Ratio between annuity and lumpsum withdrawal |
| `type` | YES | `I_WANT_TO_INVEST` for investment-focused calculations |
| `expectedMonthlyPension` | NO | Used for goal-focused pension calculations |

---

## Sample request

```bash
curl --location 'https://uat-api.taxbuddy.com/itr/external/calculator/nps' \
--header 'x-api-key;' \
--header 'Content-Type: application/json' \
--data '{
  "annuity": "4",
  "currentAge": "66",
  "expectedMonthlyPension": 0,
  "lumpsum": 96,
  "monthlyInvestment": "4566",
  "rateOfAnnuity": "4",
  "rateOfInterestPA": "12",
  "retirementAge": "76",
  "type": "I_WANT_TO_INVEST"
}'
```

---

## Sample response

```json
{
  "data": {
    "maturityAmount": 7365286.5,
    "lumpsumWithdrawal": 2946114.6,
    "monthlyPension": 14730.57,
    "taxesSaved": 430560.0,
    "totalInvestment": 1380000.0,
    "profitEarned": 5985286.5
  },
  "success": true,
  "httpStatusCode": 200
}
```

---

## Response fields

| Field | Description |
|-------|-------------|
| `maturityAmount` | Total corpus at retirement |
| `lumpsumWithdrawal` | Lumpsum withdrawal amount |
| `monthlyPension` | Projected monthly pension income |
| `taxesSaved` | Total tax saved via NPS contributions |
| `totalInvestment` | Total amount invested |
| `profitEarned` | Total profit earned on investment |
