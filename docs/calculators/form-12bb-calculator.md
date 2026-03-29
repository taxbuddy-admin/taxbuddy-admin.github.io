---
sidebar_position: 6
title: Form 12BB Calculator
---

# Form 12BB Calculator

Generate comprehensive Form 12BB declarations by consolidating tax-saving investments across 80C, 80D, HRA, and LTA — delivering precise deduction amounts that optimize take-home salary and eliminate tax calculation errors.

**Base URL (UAT)**
```
POST https://uat-api.taxbuddy.com/itr/external/calculate/form-12bb
```

---

## Request headers

| Header | Value |
|--------|-------|
| `x-api-key` | Your API key |
| `Content-Type` | `application/json` |

---

## Payload fields

### Employee details

| Field | Required | Description |
|-------|----------|-------------|
| `name` | YES | Employee name |
| `panNumber` | YES | Employee PAN |
| `fatherName` | YES | Father's name |
| `mobileNo` | YES | Mobile number |
| `emailId` | YES | Email address |
| `address` | YES | Residential address |
| `grossSalary` | YES | Gross salary |
| `basicSalary` | YES | Basic salary component |
| `actualHraReceived` | YES | Actual HRA received from employer |
| `leaveTravelAllowanceAmount` | YES | LTA received from employer |

### House Rent Allowance (HRA)

| Field | Required | Description |
|-------|----------|-------------|
| `rentPaidDuringYear` | NO | Total rent paid during the year |
| `ownerName` | NO | Name of the landlord |
| `ownerPan` | NO | PAN of landlord (mandatory if rent > ₹1L/year) |
| `ownerAddress` | NO | Landlord's address |
| `propertyAddress` | NO | Rented property address |
| `cityOfResidence` | NO | `Metro` or `Non-Metro` — affects HRA exemption formula |
| `proof` | NO | Proof document reference |

### Interest on home loan

| Field | Required | Description |
|-------|----------|-------------|
| `interestPayable` | NO | Annual interest on home loan |
| `bankName` | NO | Lender name |
| `bankAddress` | NO | Lender address |
| `proof` | NO | Loan certificate or statement reference |

### Leave Travel Allowance (LTA)

| Field | Required | Description |
|-------|----------|-------------|
| `totalExp` | NO | Total travel expenses claimed |
| `proof` | NO | Proof document reference |

### Deductions under Chapter VI-A

#### Section 80C

Valid `planName` values:

- `Life Insurance Premium`
- `Investment in Tax Saving Fixed Deposit`
- `Investment in Tax Saving Mutual Fund`
- `Investment in PPF (Public Provident Fund)`
- `Childrens Tuition Fees`
- `Principal repayment of Home Loan`
- `Others`

#### Section 80D

| Field | Description |
|-------|-------------|
| `selfAndFamilyAge` | Age bracket: `Below 60` or `Above 60` |
| `selfAndFamilyPremiumPaid` | Health insurance premium for self and family |
| `parentsAge` | Age bracket: `Below 60` or `Above 60` |
| `parentsPremiumPaid` | Health insurance premium for parents |

#### Other deductions

Valid `planName` values for `otherDeductions`:

- `Sec 80CCC - Deduction for to Certain Pension Funds`
- `Sec 80CCD - Contribution to NPS`
- `Sec 80CCD(1B) - NPS contribution by employer`
- `Sec 80D - Deduction for Health Insurance Premium`
- `Sec 80DD - Deduction for Dependent Disabled`
- `Sec 80E - Deduction for Interest on Education`
- `Sec 80G - Deduction for Donations`

---

## Sample request

```bash
curl --location 'https://uat-api.taxbuddy.com/itr/external/calculate/form-12bb' \
--header 'x-api-key: YOUR_API_KEY' \
--header 'Content-Type: application/json' \
--data-raw '{
  "employeeDetails": {
    "name": "Jay",
    "panNumber": "HCHPS0640N",
    "fatherName": "Jayesh",
    "mobileNo": "9876543212",
    "emailId": "jayesh@example.com",
    "address": "Baner, Pune",
    "grossSalary": 500000,
    "basicSalary": 850000,
    "actualHraReceived": 1800000,
    "leaveTravelAllowanceAmount": 30000
  },
  "houseRentAllowance": {
    "rentPaidDuringYear": "320000",
    "ownerName": "Landlord Name",
    "proof": "Rent receipts",
    "ownerAddress": "Sus, Pune",
    "ownerPan": "HCHPS0640N",
    "propertyAddress": "Sus, Pune",
    "cityOfResidence": "Metro"
  },
  "deductionUnderChapterVI": {
    "sec80C": [
      { "planName": "Life Insurance Premium", "amount": "5000", "evidence": "Policy document" },
      { "planName": "Investment in PPF (Public Provident Fund)", "amount": "40000", "evidence": "" }
    ],
    "sec80D": {
      "selfAndFamilyAge": "Below 60",
      "selfAndFamilyPremiumPaid": "50000",
      "parentsAge": "Above 60",
      "parentsPremiumPaid": "25000"
    }
  }
}'
```
