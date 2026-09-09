// Renders one JSON-LD block. Kept deliberately dumb: the schema objects
// themselves are built in lib/schema.ts so they can be unit-read in one
// place instead of being scattered through the pages.
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // The payload is built from our own typed data, never from user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
