# front-end

# Desenvolvimento da aplicação mobile - HemoConnect

## Baixar dependências
npm install

## Baixar dependências extras
npx expo install expo-router react-native-safe-area-context react-native-screens

## Baixar dependências de icons, para os componentes do tab
npx expo install @expo/vector-icons

### Para aplicar uma configuração de camera
npx expo install expo-camera

### Para aplicar uma configuração de audio, (nao precisa pq ainda esta em processo) mas se quiser instalar
npx expo install expo-audio

## Para rodar o projeto
npx expo start
## Apos realizar o comando, leia o QRcode com o App do celular (Expo Go)

## Verifique qual versao do expo go do seu celular, e instale a mesma versao do expo
## Se o projeto estiver com a versão errada do expo, siga os passos abaixo para atualizar
### Se estiver com expo 54, instale a versão 57 ou vice-versa

#### Atualizar dependência
npx expo install expo@^57.0.0

#### Corrigir dependências
npx expo install --fix

## Apos isso rode o projeto, a opção (-c) limpa o cache do Expo antes de iniciar o projeto.
npx expo start -c






