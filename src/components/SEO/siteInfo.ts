export interface SiteConfig {
  title: string;
  description: string;
  url: string;
  author: string;
}

export const SITE_DEFAULT_CONFIG: SiteConfig = {
  title: "LaVidaModerna Es...",
  description:
    "Un homenaje a las frases y momentos de #Moderdonia, el programa que me marcó con humor, irreverencia y mucha cutrez.",
  url: "https://lavidamodernaes.com",
  author: "Chema | c12z",
};
export const SITE_DISCLAIMER_CONFIG: SiteConfig = {
  title: "LVM - Disclaimer",
  description:
    "Disclaimer legales que considero esenciales para entender cómo y por qué está construido así el sitio.",
  url: "https://lavidamodernaes.com",
  author: "Chema | c12z",
};
export const SITE_ERROR_INFO: SiteConfig = {
  title: "Error en LaVidaModerna es...",
  description:
    "Has caído en la página del Calvario. Esta página de lavidamodernaes.com no existe. Chorry.",
  url: "https://lavidamodernaes.com",
  author: "Chema | c12z",
};
