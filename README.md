# HemoConnect - Front-end Mobile

Aplicativo móvel desenvolvido com **React Native** e **Expo (Expo Router)** para conectar doadores de sangue a quem precisa.

---

## 🚀 Tecnologias Utilizadas

- **React Native** (Expo Router)
- **@react-native-google-signin/google-signin** (Autenticação nativa com Google)
- **Axios** (Integração com API Backend)

---

## 📋 Pré-requisitos

Antes de iniciar, você precisará ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (v18 ou superior)
- [Android Studio](https://developer.android.com/studio) com um emulador Android configurado OU um dispositivo Android físico com **Depuração USB** ativada.
- JDK (Java Development Kit) 17 ou superior.

---

## 📦 Instalação

1. Clone o repositório ou navegue até a pasta do projeto:
   ```bash
   cd front-end
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

---

## 🔑 Guia Completo de Configuração do Google Sign-In

> **⚠️ IMPORTANTE (Expo Go vs Development Build):**  
> A biblioteca `@react-native-google-signin/google-signin` contém código nativo em Java/Kotlin. Por esse motivo, ela **NÃO funciona dentro do aplicativo Expo Go padrão**. Para testar o login com Google, é necessário utilizar uma **Development Build** (compilação nativa no emulador ou dispositivo físico).

### Passo 1: Gerar a chave SHA-1 da aplicação

Para que o Google permita a autenticação no Android, é necessário registrar o certificado SHA-1 da sua chave de depuração (`debug.keystore`).

Execute no terminal:
```bash
cd android
./gradlew signingReport
```
*(No Windows PowerShell, use `.\gradlew.bat signingReport`)*

No relatório gerado, procure pelo bloco `:app:signingReport` na variante `debug` e copie o valor da **SHA1**:
```text
Variant: debug
Config: debug
Store: .../android/app/debug.keystore
Alias: androiddebugkey
SHA1: 5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25
```

---

### Passo 2: Configuração no Google Cloud Console

Acesse o [Google Cloud Console -> Credenciais](https://console.cloud.google.com/apis/credentials):

1. **Criar Credencial Android:**
   - Clique em **+ Criar Credenciais** -> **ID do cliente OAuth**.
   - Tipo de aplicativo: **Android**.
   - **Nome do pacote:** `com.hemoconnect.app` *(definido no app.json)*.
   - **Impressão digital SHA-1:** Cole o valor obtido no Passo 1.
   - Clique em **Criar**.

2. **Criar Credencial Web (para obter o `webClientId`):**
   - Clique em **+ Criar Credenciais** -> **ID do cliente OAuth**.
   - Tipo de aplicativo: **Aplicativo da Web** (*Web Application*).
   - Clique em **Criar** e copie o **ID do cliente** gerado (ex: `883597232344-xxxxxxxx.apps.googleusercontent.com`).

---

### Passo 3: Configurar o código da aplicação

No arquivo [`app/login.jsx`](app/login.jsx), configure a biblioteca informando o `webClientId`:

```javascript
import { GoogleSignin } from "@react-native-google-signin/google-signin";

GoogleSignin.configure({
  webClientId: "SEU_WEB_CLIENT_ID_AQUI.apps.googleusercontent.com",
  iosClientId: "SEU_IOS_CLIENT_ID_AQUI.apps.googleusercontent.com",
});
```

> **🚨 Nota de Atenção:** Nunca inclua a propriedade `androidClientId` na função `GoogleSignin.configure()`. No React Native, essa propriedade não é aceita e causará o erro:  
> `ERROR RNGoogleSignIn: androidClientId is not a valid configuration parameter`.

---

## 📂 Estrutura de Pastas do Expo Router

O projeto utiliza a estrutura do **Expo Router** para navegação baseada em arquivos:

```text
front-end/
├── services/            # Serviços de integração (Axios, API Backend)
│   └── api.js
├── app/                 # Rotas navegáveis do aplicativo
│   ├── _layout.jsx      # Layout raiz da aplicação
│   ├── index.jsx        # Tela inicial (Home / Rota '/')
│   ├── login.jsx        # Tela de Login com Google (Rota '/login')
│   └── registro.jsx     # Tela de Registro (Rota '/registro')
├── app.json             # Configuração do Expo e ID do pacote Android
└── package.json
```

---

## 📱 Executando o Projeto

### Rodar no Emulador Android:
```bash
npm run android
```

### Rodar em um Celular Físico via USB:
1. Conecte o celular com a **Depuração USB** ativada.
2. Execute:
   ```bash
   npx expo run:android --device
   ```

---

## 🛠️ Resolução de Problemas Comuns

| Erro | Causa | Solução |
| --- | --- | --- |
| `DEVELOPER_ERROR` | A chave SHA-1 não está cadastrada no Google Cloud Console. | Execute `./gradlew signingReport`, copie o SHA-1 e registre a credencial Android no Google Cloud Console. |
| `androidClientId is not a valid parameter` | A propriedade `androidClientId` foi passada no `GoogleSignin.configure()`. | Remova `androidClientId` e utilize apenas `webClientId`. |
| `RNGoogleSignin could not be found` | O aplicativo foi aberto pelo aplicativo **Expo Go** em vez da **Development Build**. | Rode o app via `npm run android` para compilar o binário nativo. |