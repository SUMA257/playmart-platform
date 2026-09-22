declare var process: {
    env: {
        [key: string]: string | undefined;
        CI?: string;
        TEST_ENV?: string;
        HEALER_ENABLED?: string;
    };
};

