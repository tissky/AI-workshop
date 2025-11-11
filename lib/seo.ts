/**
 * Site-wide configuration for structured data
 */
const SITE_CONFIG = {
  name: 'AI创意工坊',
  url: 'https://ai-creative-workshop.com',
  description: '集成30+专业AI工具，涵盖图片处理、视频编辑、文案创作等多个领域',
  logo: 'https://ai-creative-workshop.com/logo.png',
  contactEmail: 'contact@ai-creative-workshop.com',
  contactPhone: '+86-10-12345678',
};

/**
 * Generate Organization JSON-LD with ContactPoint
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: SITE_CONFIG.logo,
    description: SITE_CONFIG.description,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: '客户服务',
      telephone: SITE_CONFIG.contactPhone,
      email: SITE_CONFIG.contactEmail,
      areaServed: 'CN',
      availableLanguage: ['zh-CN'],
    },
    sameAs: [
      // Add social media profiles if available
    ],
  };
}

/**
 * Generate WebSite JSON-LD
 */
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_CONFIG.url}/tools?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * Generate Product JSON-LD
 */
export function generateProductSchema(product: {
  name: string;
  description: string;
  image?: string;
  category?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image || SITE_CONFIG.logo,
    brand: {
      '@type': 'Brand',
      name: SITE_CONFIG.name,
    },
    ...(product.category && {
      category: product.category,
    }),
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      price: '0',
      priceCurrency: 'CNY',
    },
  };
}

/**
 * Generate ItemList JSON-LD for product listings
 */
export function generateProductListSchema(products: Array<{
  name: string;
  description: string;
  url: string;
  image?: string;
}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: products.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: product.name,
        description: product.description,
        url: product.url,
        image: product.image || SITE_CONFIG.logo,
      },
    })),
  };
}

/**
 * Generate SoftwareApplication JSON-LD for AI tools
 */
export function generateSoftwareApplicationSchema(tool: {
  name: string;
  description: string;
  category: string;
  features?: string[];
  url?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: tool.name,
    description: tool.description,
    applicationCategory: tool.category,
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'CNY',
    },
    ...(tool.url && { url: tool.url }),
    ...(tool.features && tool.features.length > 0 && {
      featureList: tool.features.join(', '),
    }),
    provider: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
    },
  };
}

/**
 * Generate ItemList JSON-LD for tool listings
 */
export function generateToolListSchema(tools: Array<{
  name: string;
  description: string;
  url: string;
  category: string;
}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: tools.map((tool, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'SoftwareApplication',
        name: tool.name,
        description: tool.description,
        url: tool.url,
        applicationCategory: tool.category,
      },
    })),
  };
}

/**
 * Generate Dataset JSON-LD for AI model catalog
 */
export function generateDatasetSchema(dataset: {
  name: string;
  description: string;
  models?: Array<{
    name: string;
    description: string;
    accuracy?: string;
  }>;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Dataset',
    name: dataset.name,
    description: dataset.description,
    creator: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
    },
    license: 'https://ai-creative-workshop.com/license',
  };

  return schema;
}

/**
 * Generate ItemList JSON-LD for model catalog
 */
export function generateModelListSchema(models: Array<{
  name: string;
  description: string;
  category: string;
  accuracy?: string;
}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: models.map((model, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'SoftwareApplication',
        name: model.name,
        description: model.description,
        applicationCategory: model.category,
        ...(model.accuracy && {
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: model.accuracy,
            bestRating: '100%',
          },
        }),
      },
    })),
  };
}

/**
 * Generate OfferCatalog JSON-LD for pricing plans
 */
export function generatePricingSchema(plans: Array<{
  name: string;
  description: string;
  price: number;
  duration: string;
}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: `${SITE_CONFIG.name} - 定价方案`,
    description: '提供多种灵活的会员套餐，满足不同用户需求',
    itemListElement: plans.map((plan, index) => ({
      '@type': 'Offer',
      position: index + 1,
      name: plan.name,
      description: plan.description,
      price: plan.price.toString(),
      priceCurrency: 'CNY',
      availability: 'https://schema.org/InStock',
      validFrom: new Date().toISOString(),
      priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
      itemOffered: {
        '@type': 'Service',
        name: `${SITE_CONFIG.name} ${plan.name}`,
        description: plan.description,
        provider: {
          '@type': 'Organization',
          name: SITE_CONFIG.name,
        },
      },
    })),
  };
}

/**
 * Helper to convert structured data to JSON-LD script props
 */
export function structuredDataToScriptProps(data: unknown) {
  return {
    type: 'application/ld+json',
    dangerouslySetInnerHTML: {
      __html: JSON.stringify(data),
    },
  };
}
