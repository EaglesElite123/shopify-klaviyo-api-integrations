# Refund Risk Suppression Logic

## Purpose
Automatically suppress customers who show high refund or dispute risk
from marketing flows to protect deliverability and revenue metrics.

## Risk Indicators
- Multiple refund requests
- Repeated support tickets
- Chargeback history

## Automation Logic
1. Detect refund-risk signal from CRM or helpdesk
2. Tag customer as "Refund Risk"
3. Sync tag to Klaviyo profile
4. Suppress from promotional flows
5. Allow transactional emails only

## Result
- Reduced spam complaints
- Improved email deliverability
- Cleaner customer lifecycle data
