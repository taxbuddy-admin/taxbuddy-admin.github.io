---
sidebar_position: 3
title: NPS Calculator V1
---

# NPS Calculator V1

An enhanced NPS calculator that projects month-by-month contributions, monthly interest accrual, monthly corpus updates, and yearly summaries. Supports all NPS investment classes:

| Class | Assumed Return |
|-------|---------------|
| LC75 | 10% |
| LC50 | 9% |
| LC25 | 8% |
| Active Choice (100% Equity) | 12% |

**Base URL (UAT)**
```
POST https://uat-api.taxbuddy.com/itr/external/calculator/nps/v1
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
| `presentCorpus` | YES | Existing accumulated NPS amount |
| `currentAge` | YES | Current age of user |
| `monthlyContribution` | YES | Monthly invested amount |
| `annualStepUpPercentage` | YES | Annual increase in SIP percentage |
| `annualReturnPercentage` | YES | Per investment class (LC75/LC50/LC25/Active) |
| `retirementAge` | YES | Expected age of retirement |
| `lumpsumWithdrawalPercentage` | YES | Maximum 60% allowed |

---

## Sample request

```bash
curl --location 'https://uat-api.taxbuddy.com/itr/external/calculator/nps/v1' \
--header 'x-api-key: YOUR_API_KEY' \
--header 'Content-Type: application/json' \
--data '{
  "presentCorpus": 450000,
  "monthlyContribution": 5000,
  "annualStepUpPercentage": 8,
  "annualReturnPercentage": 12,
  "currentAge": 25,
  "retirementAge": 60,
  "lumpsumWithdrawalPercentage": 60
}'
```

:::note
`lumpsumWithdrawalPercentage` cannot exceed **60%** as per NPS regulations. The remaining minimum 40% must be used for annuity purchase.
:::
