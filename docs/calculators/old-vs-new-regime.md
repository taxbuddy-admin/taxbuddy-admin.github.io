---
sidebar_position: 7
title: Old vs New Tax Regime
---

# Old vs New Tax Regime Calculator

Calculate and benchmark tax obligations under both regimes with real-time slab rate application and deduction analysis — empowering strategic tax planning decisions that maximize take-home income based on individual financial profiles.

**Base URL (UAT)**
```
POST https://uat-api.taxbuddy.com/itr/external/calculate/old-vs-new
```

---

## Request headers

| Header | Value |
|--------|-------|
| `X-API-Key` | Your API key |
| `Content-Type` | `application/json` |

---

## Payload fields

### Basic details

| Field | Required | Description |
|-------|----------|-------------|
| `assessmentYear` | YES | Assessment year. Current value: `2026-2027` |
| `dob` | YES | Date of birth in `YYYY-MM-DD` format |
| `grossSalary` | YES | Total gross salary before deductions |
| `name` | NO | Name of the taxpayer |
| `pan` | NO | PAN of the taxpayer |

### Income heads

| Field | Required | Description |
|-------|----------|-------------|
| `otherSourceIncome` | YES | Income from other sources |
| `rentalIncome` | YES | Income from renting out property |
| `businessIncome` | YES | Income from non-speculative business/profession |
| `speculativeBusinessIncome` | YES | Income from speculative activities (e.g. intraday trading) |

### Deductions

| Field | Required | Description |
|-------|----------|-------------|
| `anyOtherDeductionAsPerOldRegime` | YES | Salary exemptions under old regime (HRA, LTA etc.) excluding standard deduction |
| `anyOtherDeductionAsPerNewRegime` | YES | Deductions allowed in new regime excluding standard deduction |
| `us80c` | YES | Section 80C investments (max ₹1.5L) |
| `us80dSelf` | YES | Health insurance premium for self and family |
| `us80dParent` | YES | Health insurance premium for parents |
| `us80ccd1b` | YES | Additional NPS contribution under 80CCD(1B) |
| `us80ccd2` | YES | Employer NPS contribution under 80CCD(2) |
| `us80ttattb` | YES | Interest income deduction (80TTA for below 60, 80TTB for senior citizens) |
| `us80g80ggc80gga` | YES | Donations under Sec 80G, 80GGC, 80GGA |
| `anyOther` | YES | Any other Chapter VI-A deductions |
| `homeLoanInterest` | YES | Home loan interest for let-out property |
| `sopHomeLoanInterest` | YES | Home loan interest for self-occupied property (max ₹2L) |
| `hasParentAboveSixty` | YES | `true` if dependent parents are 60 years or above |

### HRA details

| Field | Required | Description |
|-------|----------|-------------|
| `houseRentAllowance.basicSalary` | YES | Basic salary component |
| `houseRentAllowance.rentPaid` | YES | Total rent paid during the year |
| `houseRentAllowance.actualHRAReceived` | YES | Actual HRA received from employer |
| `houseRentAllowance.cityOfResidence` | YES | `Metro` or `Non-Metro` |

### Allowances

| Field | Required | Description |
|-------|----------|-------------|
| `leaveTravelAllowanceAmount` | NO | LTA claimed under Section 10(5). Only travel fare eligible — no accommodation or food. |
| `professionalTax` | NO | Professional tax paid — deductible under Section 16(iii) in old regime |

### Capital gains

Capital gains are split by quarter (Q1–Q5) for advance tax computation:

| Field | Description |
|-------|-------------|
| `ltcg112AQ1`–`ltcg112AQ5` | Long-term capital gains on listed equity/MFs under Section 112A |
| `ltcg112OtherQ1`–`ltcg112OtherQ5` | Other long-term capital gains |
| `stcg111AQ1`–`stcg111AQ5` | Short-term capital gains under Section 111A |
| `stcgAppRateQ1`–`stcgAppRateQ5` | Short-term capital gains at applicable slab rates |

### Prior year losses

| Field | Description |
|-------|-------------|
| `pylLtcgl12A` | Prior year LTCG 112A losses |
| `pylStcg111A` | Prior year STCG 111A losses |
| `pylLtcgOtherThan112A` | Prior year other LTCG losses |
| `pylStcgOtherThan111A` | Prior year other STCG losses |
| `pylNonSpeculativeIncome` | Prior year non-speculative business losses |
| `pylSpeculativeIncome` | Prior year speculative business losses |
| `pylHp` | Prior year house property losses |

### Tax payments

| Field | Description |
|-------|-------------|
| `tdsTcs` | TDS/TCS already deducted across income sources |
| `advanceTaxPaid` | Advance tax paid via authorized channels/challans |
| `taxPayments` | Array of tax payment objects |

---

## Sample request

```bash
curl --location 'https://uat-api.taxbuddy.com/itr/external/calculate/old-vs-new' \
--header 'X-API-Key: YOUR_API_KEY' \
--header 'Content-Type: application/json' \
--data '{
  "assessmentYear": "2026-2027",
  "dob": "1985-10-23",
  "grossSalary": 1800000,
  "otherSourceIncome": 0,
  "anyOtherDeductionAsPerOldRegime": 100000,
  "anyOtherDeductionAsPerNewRegime": 400000,
  "us80c": 0,
  "us80dSelf": 0,
  "us80ccd1b": 0,
  "us80ccd2": 0,
  "rentalIncome": 0,
  "homeLoanInterest": 0,
  "sopHomeLoanInterest": 0,
  "hasParentAboveSixty": false,
  "taxPayments": [],
  "houseRentAllowance": {
    "basicSalary": 900000,
    "rentPaid": 300000,
    "actualHRAReceived": 400000,
    "cityOfResidence": "Metro"
  },
  "leaveTravelAllowanceAmount": 50000,
  "professionalTax": 2500
}'
```

---

## Sample response

```json
{
  "success": true,
  "data": {
    "beneficialRegime": "New Regime",
    "totalTaxLiabilty": 81900,
    "oldRegime": {
      "taxableIncome": 1387500,
      "tax": 228750,
      "surcharge": 0,
      "hec": 9150,
      "totalTax": 237900,
      "rebateUs87A": 0,
      "standardDeduction": 50000.00,
      "taxLiability": 237900
    },
    "newRegime": {
      "taxableIncome": 1325000,
      "tax": 78750,
      "surcharge": 0,
      "hec": 3150,
      "totalTax": 81900,
      "rebateUs87A": 0,
      "standardDeduction": 75000.00,
      "taxLiability": 81900
    },
    "advanceTaxQuarter1": {
      "installment": 1,
      "rate": 15,
      "installmentAmount": 12285,
      "cumulativeTaxLiability": 12285,
      "advanceTaxPaid": 0,
      "advanceTaxPayable": 12651,
      "interestUs234C": 366
    }
  }
}
```

---

## Response field reference

### Regime comparison fields (old and new)

| Key | Description |
|-----|-------------|
| `beneficialRegime` | Which regime results in lower tax liability |
| `salaryIncome` | Net salary income after all deductions |
| `standardDeduction` | Standard deduction (₹50,000 old / ₹75,000 new) |
| `totalSalaryDeductions` | All salary deductions including standard deduction |
| `businessIncome` | Net business income |
| `capitalGain` | Net taxable capital gain |
| `housePropertyIncome` | Net taxable house property income |
| `otherSourceIncome` | Net other source income |
| `totalIncome` | Total income across all heads before VI-A deductions |
| `deductionUnderVIA` | Total Chapter VI-A deductions |
| `taxableIncome` | Total income after VI-A deductions |
| `cyla` | Current year losses set off |
| `bfla` | Brought forward losses set off |
| `tax` | Tax on taxable income |
| `rebateUs87A` | Rebate under Section 87A (if applicable) |
| `taxAfterRebate` | Tax after 87A rebate |
| `surcharge` | Surcharge for income above ₹50L |
| `hec` | Health and Education Cess (4% on tax + surcharge) |
| `totalTax` | Total tax = tax + surcharge + HEC |
| `taxesPaid` | Tax already paid (TDS + TCS + advance tax) |
| `taxLiability` | Final tax liability = total tax − taxes paid |

### Advance tax quarters

| Key | Description |
|-----|-------------|
| `installment` | Quarter number (1–4) |
| `rate` | Cumulative % due by this quarter (15/45/75/100) |
| `installmentAmount` | Amount due in this quarter |
| `cumulativeTaxLiability` | Cumulative tax due up to this quarter |
| `advanceTaxPaid` | Amount paid by taxpayer |
| `advanceTaxPayable` | Balance payable |
| `interestUs234C` | Interest for deferment under Section 234C |
