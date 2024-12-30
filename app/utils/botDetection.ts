interface GeoJSResponse {
    asn: number;
    organization: string;
    organization_name: string;
    ip: string;
    country: string;
    country_code: string;
    city: string;
}
const BLOCKED_ASN_LIST = [15169, 32934, 396982, 8075, 16509, 14618, 36459, 13335, 14061, 45102, 55967, 54994, 63949, 16276, 24940, 20473, 51167, 174, 3223, 9009, 53667, 51852, 47583, 29802, 40676, 40156, 398324, 398705, 397423, 213373, 398101, 397702, 19318, 14618, 16625, 20940, 35994, 12876, 42831, 58061, 18450];
const BLOCKED_UA_PATTERNS = [
    'headless',
    'phantom',
    'selenium',
    'webdriver',
    'puppeteer',
    'playwright',
    'cypress',
    'nightmare',
    'chrome-lighthouse',
    'googlebot',
    'bingbot',
    'yandex',
    'baidu',
    'bot',
    'crawler',
    'spider',
    'scraper',
];
const checkBrowserFingerprint = (): boolean => {
    const isAutomated = !!((window as any).webdriver || (window as any)._phantom || (window as any).__nightmare || (window as any).callPhantom || (window as any)._selenium || (window as any).domAutomation || (window as any).domAutomationController);

    const isHeadless = !!(navigator.webdriver || navigator.languages === undefined || navigator.languages.length === 0);

    const hasWebGL = (() => {
        try {
            const canvas = document.createElement('canvas');
            return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
        } catch (e) {
            return false;
        }
    })();

    const hasInconsistentDimensions = window.outerWidth === 0 || window.outerHeight === 0 || window.screen.width === 0 || window.screen.height === 0;

    return isAutomated || isHeadless || !hasWebGL || hasInconsistentDimensions;
};

const checkUserAgent = (): boolean => {
    const userAgent = navigator.userAgent.toLowerCase();
    return BLOCKED_UA_PATTERNS.some((pattern) => userAgent.includes(pattern.toLowerCase()));
};

const checkIP = async (): Promise<boolean> => {
    try {
        const response = await fetch('https://get.geojs.io/v1/ip/geo.json');
        const data: GeoJSResponse = await response.json();

        const asnRegex = /AS(\d+)/;
        const asnMatch = asnRegex.exec(data.organization ?? '');
        const asn = asnMatch ? parseInt(asnMatch[1]) : null;

        if (asn && BLOCKED_ASN_LIST.includes(asn)) {
            console.log(`Blocked ASN detected: ${asn} (${data.organization_name})`);
            return true;
        }

        const isSuspiciousLocation = ['A1', 'A2', 'O1'].includes(data.country_code);

        return isSuspiciousLocation;
    } catch (error) {
        console.error('IP/ASN check failed:', error);
        return true;
    }
};

export const isBlocked = async (): Promise<boolean> => {
    const [userAgentBlocked, ipBlocked, fingerprintBlocked] = await Promise.all([Promise.resolve(checkUserAgent()), checkIP(), Promise.resolve(checkBrowserFingerprint())]);

    return userAgentBlocked || ipBlocked || fingerprintBlocked;
};

export const handleBlockRedirect = async (): Promise<void> => {
    if (await isBlocked()) {
        const randomSites = ['about:blank', 'https://www.google.com', 'https://www.bing.com', 'https://www.youtube.com'];

        try {
            localStorage.clear();
            sessionStorage.clear();
            const cookies = document.cookie.split(';');
            cookies.forEach((cookie) => {
                document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`);
            });
        } catch (e) {}

        window.location.href = randomSites[Math.floor(Math.random() * randomSites.length)];
    }
};
