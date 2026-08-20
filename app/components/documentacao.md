## Instalação
npm i @react-native-google-signin/google-signin@latest

## app.json
<!-- "expo": {
    "plugins": [
      [
        "@react-native-google-signin/google-signin",
        {
          "iosUrlScheme": "com.googleusercontent.apps._some_id_here_"
        }
      ]
    ]
  } -->

## acessar e utilizar o google signin no projeto
https://console.cloud.google.com/



preciso disso para o expo authsession
npx expo install expo-auth-session expo-crypto
ou
npm install expo-auth-session expo-crypto --legacy-peer-deps



instalar isso:
npm install --global eas-cli


eas login

eas build:configure

eas credentials


desenvolvedor
Configuration: Build Credentials gzbzH2-ulT (Default)
Keystore
Type                JKS
Key Alias           a997535f1f515b69eebd717ac0cf5e4a
MD5 Fingerprint     42:C7:C3:4F:EB:25:1D:46:B6:9B:26:F9:39:7E:8D:9C
Necessario para o google cloud
SHA1 Fingerprint    0B:4C:3A:AE:D6:4A:B9:77:6F:C1:FA:A7:B9:9B:98:D4:46:DB:84:79
SHA256 Fingerprint  7A:B5:ED:5F:3B:45:F0:AC:9B:15:0C:0B:6D:DB:EB:D5:EF:5C:79:1B:B2:AE:5B:7C:97:4F:67:01:2A:32:2A:BB
Updated             44 seconds ago



Produção

Configuration: Build Credentials gzbzH2-ulT
Keystore
Type                JKS
Key Alias           a997535f1f515b69eebd717ac0cf5e4a
MD5 Fingerprint     42:C7:C3:4F:EB:25:1D:46:B6:9B:26:F9:39:7E:8D:9C
SHA1 Fingerprint    0B:4C:3A:AE:D6:4A:B9:77:6F:C1:FA:A7:B9:9B:98:D4:46:DB:84:79
SHA256 Fingerprint  7A:B5:ED:5F:3B:45:F0:AC:9B:15:0C:0B:6D:DB:EB:D5:EF:5C:79:1B:B2:AE:5B:7C:97:4F:67:01:2A:32:2A:BB
Updated             3 minutes ago





agora com o ID do Projeto:

883597232344-d46urbesfip9m3mhdv9jch7rq1lh4m3s.apps.googleusercontent.com




caso nao consiga logar certo, e o login esta bloqueado vamos usar esse comando

npx expo prebuild --clean