# Floating UI Components
Paths:
- `src/components/FloatingBookingCTA/index.tsx`
- `src/components/home/WhatsAppButton.tsx`

## Detailed Overview
These two components exist strictly to drive conversions by providing the user with persistent access to support and booking actions, regardless of scroll depth.

### FloatingBookingCTA (`index.tsx`)
- **Responsive Logic**: Often configured to only appear on mobile devices (`hidden md:flex`).
- **Positioning**: Uses `fixed bottom-0 left-0 w-full z-50` to lock to the bottom edge of the viewport on mobile browsers, often above the `BottomNav`.
- **Purpose**: Usually points directly to `/services` or a generic "Request a Quote" form.

### WhatsAppButton (`WhatsAppButton.tsx`)
- **Positioning**: Fixed to the bottom-right corner (`fixed bottom-6 right-6 z-50`).
- **Animation**: Contains a pulsing ring animation (`animate-ping`) around the WhatsApp logo to draw the user's eye.
- **Link Logic**: Opens an `api.whatsapp.com` link dynamically pointing to the business's support number.

## Layout Integration
Both components are rendered centrally inside the `CustomerLayout.tsx` so that they do not need to be manually imported onto individual Page Views.
