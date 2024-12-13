const kDebugMode = true;


export const EnvFlavor = { development: 'development', production: 'production' };

export const Environment = kDebugMode ?
    {
        flavor: EnvFlavor.development,
        baseUrl: '',
        stripeKey: "",
        showConsoleOutput: true,
    } :
    {
        flavor: EnvFlavor.production,
        baseUrl: '',
        stripeKey: "",
        showConsoleOutput: false,
    }