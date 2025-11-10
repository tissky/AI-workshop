"use client";

import { useEffect } from "react";

interface StructuredDataProps {
  data: unknown | unknown[];
}

export default function StructuredData({ data }: StructuredDataProps) {
  useEffect(() => {
    const schemas = Array.isArray(data) ? data : [data];
    const scripts: HTMLScriptElement[] = [];
    
    schemas.forEach((schema) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
      scripts.push(script);
    });
    
    return () => {
      scripts.forEach((script) => {
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      });
    };
  }, [data]);
  
  return null;
}
