interface JsonLDProps {
    data: Record<string, unknown>;
  }
  
  export default function JsonLD({ data }: JsonLDProps) {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    );
  }