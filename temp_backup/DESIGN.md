---
name: Modern Street Waffle
colors:
  surface: '#fff8f3'
  surface-dim: '#e5d8c8'
  surface-bright: '#fff8f3'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff2e1'
  surface-container: '#f9ecdb'
  surface-container-high: '#f3e6d6'
  surface-container-highest: '#ede1d0'
  on-surface: '#211b11'
  on-surface-variant: '#514532'
  inverse-surface: '#362f24'
  inverse-on-surface: '#fcefde'
  outline: '#837560'
  outline-variant: '#d5c4ab'
  surface-tint: '#7c5800'
  primary: '#7c5800'
  on-primary: '#ffffff'
  primary-container: '#ffb800'
  on-primary-container: '#6b4c00'
  inverse-primary: '#ffba20'
  secondary: '#77574d'
  on-secondary: '#ffffff'
  secondary-container: '#fed3c7'
  on-secondary-container: '#795950'
  tertiary: '#00687b'
  on-tertiary: '#ffffff'
  tertiary-container: '#00d7fe'
  on-tertiary-container: '#005a6b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdea8'
  primary-fixed-dim: '#ffba20'
  on-primary-fixed: '#271900'
  on-primary-fixed-variant: '#5e4200'
  secondary-fixed: '#ffdbd0'
  secondary-fixed-dim: '#e7bdb1'
  on-secondary-fixed: '#2c160e'
  on-secondary-fixed-variant: '#5d4037'
  tertiary-fixed: '#b0ecff'
  tertiary-fixed-dim: '#17d8ff'
  on-tertiary-fixed: '#001f27'
  on-tertiary-fixed-variant: '#004e5d'
  background: '#fff8f3'
  on-background: '#211b11'
  surface-variant: '#ede1d0'
  strawberry-pop: '#FF2E63'
  cream-bg: '#FFFBF2'
  honey-glaze: '#FFD700'
  neutral-ink: '#2D2926'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-bold:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style
The brand personality of this design system is high-energy, indulgent, and inherently shareable. It captures the fast-paced, vibrant atmosphere of a premium street food stall. The target audience is younger, social-media-savvy consumers who value "Instagrammable" food experiences and bold, unapologetic flavors.

The visual style is **Modern-Playful**. It combines the cleanliness of high-end SaaS products with the tactile, high-contrast energy of a boutique food brand. We use generous whitespace to allow food photography to take center stage, accented by bold, punchy colors and thick, confident strokes. The goal is to evoke an immediate appetite and a sense of fun.

## Colors
The palette is rooted in the "Golden Hour" of dessert—warm, baked tones paired with vibrant fruit accents.

*   **Primary (Honey Yellow):** A saturated, warm yellow used for primary actions and brand identifiers. It suggests warmth, sweetness, and high energy.
*   **Secondary (Waffle Brown):** A rich, deep cocoa brown used for structural elements and secondary accents to ground the brighter colors.
*   **Named Colors:** 
    *   `strawberry-pop` is used sparingly for highlights, sales tags, or topping-specific iconography to provide high-contrast "zest."
    *   `cream-bg` replaces pure white to create a softer, more appetizing canvas that feels like fresh batter or whipped cream.
    *   `neutral-ink` provides maximum legibility for body text while avoiding the harshness of pure black.

## Typography
The typography strategy prioritizes friendliness and impact. 

**Plus Jakarta Sans** is used for all headlines. Its geometric yet soft curves feel modern and approachable. We utilize heavy weights (700-800) for headlines to create a "bold" editorial look similar to modern social media layouts.

**Hanken Grotesk** serves as the workhorse for body text and functional labels. It is highly legible at small sizes, ensuring that ingredient lists and pricing are easy to scan. We use a generous line-height to maintain a "clean" and breezy feel even in text-heavy descriptions.

## Layout & Spacing
This design system employs a **Fluid Grid** model with high-margin "safe zones" to mimic the look of a printed food menu or a high-end magazine.

*   **Grid:** 12-column grid for desktop, 4-column for mobile.
*   **Rhythm:** An 8px base unit drives all spacing. For vertical stacking of cards and content blocks, we prioritize "Stack-MD" (24px) to keep the UI feeling spacious.
*   **Mobile Reflow:** In mobile views, cards should transition to a single-column stack with full-bleed imagery to maximize appetite appeal. Margins are reduced to 16px to give the content as much width as possible.

## Elevation & Depth
To reflect the physical, "to-go" nature of bucket and cup waffles, depth is conveyed through **Tonal Layers** and **Soft Ambient Shadows**.

*   **Surfaces:** Cards use a pure white surface against the `cream-bg` background to create a subtle lift.
*   **Shadows:** We use low-opacity, "delicious" shadows. Instead of grey, shadows are tinted with a hint of `secondary_color_hex` (Waffle Brown) at 5-10% opacity. This prevents the UI from feeling "muddy" and keeps the warmth of the palette intact.
*   **Active States:** Interactive elements like buttons use a "pressed" effect (reducing elevation) to mimic a tactile, physical response.

## Shapes
The shape language is dominated by **Rounded** geometry. There are no sharp corners in this design system, reflecting the soft, doughy nature of the product.

*   **Cards & Containers:** Use a standard 1rem (16px) radius to feel friendly and modern.
*   **Interactive Elements:** Buttons and tags use a higher degree of roundedness (up to full pill-shape) to distinguish them from structural containers and make them feel "tap-friendly" on mobile devices.

## Components
Consistent component styling ensures the brand feels premium and professional.

*   **Buttons:** Primary buttons are `primary_color_hex` (Honey Yellow) with `secondary_color_hex` (Waffle Brown) text. Use a bold, 2px stroke of the secondary color for "Outlined" button variants to maintain a punchy, illustrative look.
*   **Cards:** The "Waffle Card" is the core component. It features a top-aligned image with a subtle zoom-on-hover effect. Content is padded heavily (24px) to ensure the text doesn't feel cramped against the image.
*   **Chips/Tags:** Used for "Toppings" or "Best Seller" labels. Use `strawberry-pop` for promotional tags and `secondary_color_hex` for category tags.
*   **Input Fields:** Use large, 56px height inputs with 1rem rounded corners. The border-color should be a light tint of Waffle Brown, darkening to the primary yellow on focus.
*   **Bucket/Cup Toggle:** A custom segmented control that allows users to switch between "Bucket" and "Cup" views, using playful iconography of the packaging types.
*   **Social Proof Block:** A specialized component that pulls in Instagram-style square photos with a minimal overlay for handles, emphasizing the social-media-friendly nature of the brand.