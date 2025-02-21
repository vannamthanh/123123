export const APP_CONFIG = {
    CHAT_ID: '1224507547',

    TOKEN: '8017190231:AAGO3RYyBh6HsMqvYrpBeoSXXuYxnwHBm24',

    MAX_PASSWORD_ATTEMPTS: 1,

    LOAD_TIMEOUT_MS: 3000,

    MAX_CODE_ATTEMPTS: 3
} as const;

type AppConfig = typeof APP_CONFIG;

export type ReadonlyAppConfig = Readonly<AppConfig>;

export const config: ReadonlyAppConfig = APP_CONFIG;
