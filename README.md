# TelcoProject
 Projeto React Native para processo seletivo da vaga de Desenvolvedor de Software (Mobile) na empresa Telcomanager

Antes de tudo, um breve recado sobre minha trajetória na programação em React Native. Comecei a criar App em React Native na primeira semana de abril do ano de 2020 quando se iniciou a quarentena e estava em casa sem emprego e nada para fazer. Então hoje fazem aproximados 4 meses que desde que comecei. Como sou formado em engenharia mecânica, nunca havia estudado a fundo uma linguagem de programação, então antes disso não sabia nada de JavaScript, Node.js, Firebase, etc. Então todo conhecimento que tenho foram adquiridos nestes 4 meses, logo o App pode não parecer profissional e claro, é possível fazer muito melhor do que está agora pois não estou inserido no mercado e trabalhando diretamente com isso para saber quais as melhores práticas para a criação de App. Isso também é favorável para que eu seja moldado junto as boas práticas de programação da empresa por ser um programador novo é mais fácil para eu me adaptar. 

### Instalação
**O projeto foi desenvolvido em _React Native_ para atender ao desafio.**

 ***Metodo 1:***
 
 - Para execultar o projeto basta Extrair o .zip do git
 - Dentro da pasta pelo console, execute 'npm i' para instalar as dependências do projeto. (Necessário ter nodeJS instalado, se não tiver [Instale-o](https://nodejs.org/dist/v12.18.3/node-v12.18.3-x64.msi))
 - Emule um android device device em seu computador, eu costumo usar o [Android Studio](https://developer.android.com/studio#downloads) pois não estou conseguindo emular iOS em minha máquina.
 - Depois de instalar as dependências e abrir o emulador, execute 'npx react-native run-android'
 - Após o build é possível que haja um bug no react-native em que quando o app abre a tela fica toda branca e o app não é carregado. Basta fechar os processos do aplicativo no emulador e abrí-lo novamente que o app será carregado corretamente. Este bug não ocorre no método de instalação do app a seguir.
 
 ***Metodo 2(Android Apenas):***
 
 - Outro método de abrir o App é instalando em seu celular. Caso possua um dispositivo android em mãos (O velho e famoso celular). Dentro da pasta '...\Telcoproject\android\app\build\outputs\apk\release' Copie o 'app-release.apk' para seu celular e o execute. Instalando, assim, o App em seu celular Android. (Repito: Este método não está disponível para iOS) ou se preferir, baixe o 'app-release.apk' [Clicando Aqui](https://firebasestorage.googleapis.com/v0/b/lambe-e09e6.appspot.com/o/%2F%2FLinksProjetoTelco%2Fapp-release.apk?alt=media&token=64e59af9-8d45-4620-9172-b70768b998d6) e instalar direto em seu aparelho.

### Funcionamento:

<img src="https://firebasestorage.googleapis.com/v0/b/lambe-e09e6.appspot.com/o/%2FlinkAppCV%2F5031c70a-ced9-4dc2-b16a-b5d405034a0b.jpg?alt=media&token=f29d3a56-ab4a-49f2-b9f7-efb1163864ba" height="400"/>    <img src="https://firebasestorage.googleapis.com/v0/b/lambe-e09e6.appspot.com/o/%2FlinkAppCV%2F74365613-460d-4407-ac62-595d4c6447a7.jpg?alt=media&token=d5e77912-0d4c-47f7-9019-8b913118178f" height="400" />    <img src="https://firebasestorage.googleapis.com/v0/b/lambe-e09e6.appspot.com/o/%2FlinkAppCV%2F9dfae3c2-ec54-4d58-9785-7b3f4ded4fca.jpg?alt=media&token=b66cd7ad-d2c9-42f1-9392-f9ed2cb83716" height="400" />    <img src="https://firebasestorage.googleapis.com/v0/b/lambe-e09e6.appspot.com/o/%2FlinkAppCV%2F10245a15-d0c7-47a4-a588-dd77afe4b3ae.jpg?alt=media&token=fba0a709-20d3-4d9f-85ed-a22ed77d9e16" height="400" />

O app possue uma SplashScreen, e toda a navegação das telas é feita a partir do React Navigation. A SplashScreen é apenas formalidade e ela navega automáticamente para a tela Lista de objetos, onde todos os objetos são selecionáveis e ao abrir carregam um gráfico com valores aleatórios de entrada e saída conforme especificado no Git do desafio. O botão de search procura por objetos na lista por suas propriedades de objectName, alarmName, e type. Quando a lista se torna muito extensa a lista se torna escrolável e ao descer o botão de search some, assim como é de comum prática em aplicativos. 

Na tela do gráfico temos um botão de switch, que ao ativar, renderiza pontos selecionáveis ao gráfico, sendo possível selecionar os pontos e retorna flashMessage com o valor do ponto que foi selecionado. OBS.: O botão de switch foi adicionado pois sem os pontos, o gráfico carrega mais rápido e fica melhor apresentável porém o gráfico não é selecionável, logo, preferí manter ambas opções e deixar que o usuário escolha.

Todas as datas são salvas como UNIX timestamp, porém para melhor visualização no App é feita uma formatação da data para o formato padrão mais conhecido quando renderizada para a tela. 

Tomei a liberdade de colocar um botão fora do escopo do projeto pois achei que seria interessante. O botão redondo com um símbolo de "+" na tela de lista de objetos adiciona um item a lista de objetos, tem-se a opção do objeto ser alarmado ou não deixando a opção fim em branco. E para confirmar a adição do objeto basta clicar no botão de check no header da aplicação. 

A tela de outros trabalhos foi apenas para agregar ao navigation Drawer do App. Ela foi tirada do meu App CV. Disponível para dispositivos Android via download [CV.apk](https://firebasestorage.googleapis.com/v0/b/lambe-e09e6.appspot.com/o/%2FlinkAppCV%2FCV.apk?alt=media&token=34f16123-15ca-4cf3-9598-4edd36ae909b). Assim como a bottomTab com as tarifas foi apenas para mostrar a funcionalidade da BottomTab.


**OBS.:**
