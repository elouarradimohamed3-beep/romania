import Script from "next/script";

// Optional Trustpilot widget. Set NEXT_PUBLIC_TRUSTPILOT_ID to your business unit id
// and NEXT_PUBLIC_TRUSTPILOT_TEMPLATE to a template id to enable the live widget.
export default function Trustpilot() {
  const businessId = process.env.NEXT_PUBLIC_TRUSTPILOT_ID;
  const template = process.env.NEXT_PUBLIC_TRUSTPILOT_TEMPLATE ?? "5419b6a8b0d04a076446a9ad";
  if (!businessId) return null;

  return (
    <>
      <Script src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" strategy="afterInteractive" />
      <div
        className="trustpilot-widget"
        data-locale="ro-RO"
        data-template-id={template}
        data-businessunit-id={businessId}
        data-style-height="120px"
        data-style-width="100%"
        data-theme="dark"
      >
        <a href={`https://www.trustpilot.com/review/${businessId}`} target="_blank" rel="noopener noreferrer">
          Trustpilot
        </a>
      </div>
    </>
  );
}
