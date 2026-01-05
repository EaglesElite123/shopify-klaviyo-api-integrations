# Abandoned Cart Flow Logic (Shopify → Klaviyo)

## Objective
Recover lost revenue by re-engaging customers who added products
to cart but did not complete checkout.

## Trigger
- Shopify checkout started
- No purchase event within 2 hours

## Flow Steps
1. Detect abandoned checkout event
2. Verify customer is not suppressed
3. Send reminder email (Email #1)
4. Wait 24 hours
5. Send follow-up email or SMS
6. Exit flow upon purchase

## Safeguards
- Exclude refunded customers
- Exclude high-risk profiles
- Frequency limits enforced

## Business Impact
- Increased recovery rate
- Reduced spam complaints
- Cleaner customer segmentation
