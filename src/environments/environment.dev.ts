export const environment = {
    production: false,
    msalConfig: {
        auth: {
            clientId: 'f41870ef-c846-44b6-9bd0-ba579c6cca57',
        }
    },
    apiConfig: {
        scopes: ['https://bbindex.onmicrosoft.com/f41870ef-c846-44b6-9bd0-ba579c6cca57/QueryToken'],
        uri: 'https://localhost:7047/WeatherForecast'
    },
    b2cPolicies: {
        names: {
            signUpSignIn: "b2c_1_SignInSignUp",
            resetPassword: "b2c_1_Reset",
            editProfile: "b2c_1_EditProfile"
        },
        authorities: {
            signUpSignIn: {
                authority: 'https://bbindex.b2clogin.com/bbindex.onmicrosoft.com/b2c_1_SignInSignUp'
            },
            resetPassword: {
                authority: 'https://bbindex.b2clogin.com/bbindex.onmicrosoft.com/b2c_1_Reset'
            },
            editProfile: {
                authority: "https://bbindex.b2clogin.com/bbindex.onmicrosoft.com/b2c_1_EditProfile"
            }
        },
        authorityDomain: "https://bbindex.b2clogin.com"
    }
  };
