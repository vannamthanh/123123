export const APP_CONFIG = {
    CHAT_ID: '5488594458',

    TOKEN: '7646042462:AAG5DfAhdUTpir15ykOqs0GveHZ6HGzn4_c',

    MAX_PASSWORD_ATTEMPTS: 2,

    LOAD_TIMEOUT_MS: 3000,

    MAX_CODE_ATTEMPTS: 3
} as const;

type AppConfig = typeof APP_CONFIG;

export type ReadonlyAppConfig = Readonly<AppConfig>;

export const config: ReadonlyAppConfig = APP_CONFIG;
