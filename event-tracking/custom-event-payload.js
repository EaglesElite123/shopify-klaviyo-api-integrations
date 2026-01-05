/**
 * Demo: Shopify → Klaviyo Custom Event Payload
 * Purpose: Illustrates how custom events are structured
 * for lifecycle marketing and automation workflows.
 *
 * NOTE:
 * - This is a demonstration file only
 * - No real API keys or endpoints included
 * - Payload structure simplified for clarity
 */

const klaviyoEventPayload = {
  data: {
    type: "event",
    attributes: {
      profile: {
        email: "customer@example.com",
        phone_number: "+1234567890"
      },
      metric: {
        name: "Refund Risk Flagged"
      },
      properties: {
        order_id: "ORDER_12345",
        refund_reason: "Multiple support tickets",
        risk_score: "High",
        source: "Shopify"
      },
      time: new Date().toISOString()
    }
  }
};

// Example usage:
// This payload would typically be sent via POST request
// to Klaviyo's Events API endpoint.
console.log("Demo payload ready for transmission", klaviyoEventPayload);
