declare module 'countries-list' {
  interface Country {
    capital: string;
    continent: string;
    currency: string;
    emoji: string;
    emojiU: string;
    languages: string[];
    name: string;
    native: string;
    phone: string;
  }

  interface Countries {
    [countryCode: string]: Country;
  }

  export var countries: Countries;
}
