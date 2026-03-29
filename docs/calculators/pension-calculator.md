---
sidebar_position: 1
title: Pension Calculator
---

# Pension Calculator

Calculate taxable and exempt pension amounts for commuted or uncommuted pension payments — enabling accurate tax compliance and retirement income optimization for government and private sector retirees.

**Base URL (UAT)**
```
POST https://uat-api.taxbuddy.com/itr/external/calculator/pension
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
| `assessmentYear` | YES | Assessment year e.g. `2025-2026` |
| `isGovtemployee` | YES | `Y` if government employee, `N` otherwise |
| `isReceivedGratuity` | YES | Not required for govt employee |
| `pensionType` | YES | `COMMUTED` for commuted pension, `UNCOMMUTED` for monthly pension |
| `pensionReceived` | YES | Total amount received as pension |
| `percentageOfcp` | NO | Percentage of commutation. Required if pension type is `COMMUTED` and employer is private sector |

---

## Sample request

```bash
curl --location 'https://uat-api.taxbuddy.com/itr/external/calculator/pension' \
--header 'x-api-key;' \
--header 'Content-Type: application/json' \
--data '{
  "assessmentYear": "2025-2026",
  "isGovtemployee": "Y",
  "isReceivedGratuity": "Y",
  "pensionReceived": "100000",
  "pensionType": "COMMUTED",
  "percentageOfcp": ""
}'
```

---

## Sample response

```json
{
  "totalRebateAmount": 0,
  "diffOfTaxOfCurrentYearOf89_1": 0,
  "totalTaxableAmount": 0,
  "totalExemptAmount": 100000,
  "reliefAmountOf89_1": 0
}
```

---

## Response fields

| Field | Description |
|-------|-------------|
| `totalExemptAmount` | Portion of pension that is tax-exempt |
| `totalTaxableAmount` | Portion of pension that is taxable |
| `totalRebateAmount` | Rebate applicable on pension |
| `reliefAmountOf89_1` | Relief amount under Section 89(1) |
| `diffOfTaxOfCurrentYearOf89_1` | Tax difference for Section 89(1) relief computation |

:::info Test cases
Reference test cases: [Pension/EPF test cases](https://docs.google.com/spreadsheets/d/1lYdreAYMv0OZA83S5tE23ANno0ASWazQ/edit?gid=1053156680)
:::
