export type AppSettingsConfiguration={
    Production:{
        Port:number;
        DatabaseConnection:{
            Server: string,
            Driver: string,
            Database: string,
            Options: {
                TrustedConnection: boolean
            }
        }
    },
    Development:{
        Port:number;
        DatabaseConnection:{
            Server: string,
            Driver: string,
            Database: string,
            Options: {
                TrustedConnection: boolean
            }
        }
    }
}