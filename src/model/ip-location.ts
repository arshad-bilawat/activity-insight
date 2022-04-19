export class IpLocation{
    accuracyRadius?: number;
    latitude?: number;
    longitude?: number;
    postalCode?: string;
    timezone?: string;
    city?: {
        name: string;
    };
    country?: {
        code: string;
        name: string;
    };
    /**
     * Continent, when available. Will be missing for Tor/anonymous proxies.
     */
    continent?: {
        code: string;
        name: string;
    };
    subdivisions?: [
        {
            isoCode: string;
            name: string;
        }
    ];
}