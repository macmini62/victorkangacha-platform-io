export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Victor Kang'acha",
    url: "https://victorkangacha.com",
    jobTitle: "Data Scientist",
    description:
      "Senior Data Scientist specializing in deep learning, AWS Machine Learning Engineer, AI engineering, and modern development practices.",
    sameAs: [
      "https://github.com/macmini62",
      "https://linkedin.com/in/victorkangacha",
    ],
    knowsAbout: [
      "Deep Learning",
      "Reinforcement Learning",
      "Machine Learning Engineering",
      "AWS Cloud Architecture",
      "Data Science",
      "Full Stack Development",
      "Python Development",
      "TensorFlow & PyTorch",
      "Kubernetes & Docker",
      "Next.js & React Development",
      "Node.js Development",
      "Statistical Modeling",
      "Clustering & Dimensionality Reduction",
    ],
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Victor Kang'acha - Portfolio",
    url: "https://victorkangacha.com",
    description:
      "Senior Data Scientist specializing in deep learning, AWS Machine Learning Engineer, AI engineering, and modern development practices.",
    author: {
      "@type": "Person",
      name: "Victor Kang'acha",
    },
  };
}

interface StructuredDataProps {
  type: "person" | "website" | "both";
}

export default function StructuredData({ type }: StructuredDataProps) {
  const schemas = [];

  if (type === "person" || type === "both") {
    schemas.push(generatePersonSchema());
  }

  if (type === "website" || type === "both") {
    schemas.push(generateWebsiteSchema());
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
