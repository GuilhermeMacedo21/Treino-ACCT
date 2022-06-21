# Treino-ACCT

## Tópicos Estudados
* GIT 
* MarkDown
* CSS
* JavaScript

### Git



Durante o desenvolvimento de um projeto utilizando o versionamento do git, é necessário termos o controle da divisão de trabalho, onde as branchs são necessárias para dividir o que cada desenvolvedor está fazendo. 

Git branch -a  Verifica todas as branchs  

Git fetch  Baixa as alterações de um repositório remoto para o repositório local de forma segura, ou seja, sem alterar o que está no repositório local.

Exemplo de criação de uma branch de develop:
git fetch origin && git checkout -b develop && git push origin develop

Exemplos de branchs para dividir o que será feito:
 
Criação dessa branch: git checkout -b feature/novo-componente

Dessa forma o repositório estará local para ser utilizado, para enviar ao remoto e outra pessoa poder trabalhar deve utilizar: git push origin feature/novo-componente

Para passar essa funcionalidade que foi criada ao ambiente de desenvolvimento, basta utilizar o seguinte merge e atualização do remoto: git checkout develop && git merge feature/novo-componente && git push origin develop

Após isso já será o momento de criar o release da implementação e enviar o repositório remoto.
git checkout -b release/v1.0.1 && git push origin release/v1.0.1

Depois basta utilizar a tag nessa versão: git tag -a v1.0.1 -m “Release do novo componente”

Depois disso basta verificar e enviar ao repositório remoto: git show v1.0.1 && git push origin v1.0.1
Se tudo ocorreu certo, basta fazer o merge na master do projeto: git checkout master && git merge release/v1.0.1



### Git Flow



Proposta de fluxo que auxilio o desenvolvimento de software.

Branchs:
-	Master (Principal) – Main

-	Develop – Permanente, ambiente de desenvolvimento

-	Feature – Desenvolvimento de funcionalidades

-	Release – Ambiente de homologação, versão “Beta” do sistema, pré deploy

-	Hotfix – Correção de algum problema que ocorreu na master

-	Bugfix – Correções a partir de uma release

-	Support – Suporte a versões anteriores

Comandos
Git flow init

Git flow feature start “Nome da feature”

Git commit -am “[feature/nome]: ação realizada”

Git branch

Git flow feature start “Nome de outra feature”

Git commit -am “[feature/nome]: ação realizada”

Git flow feature publish “Nome da feature”

Git flow feature finish “Nome da feature”

Git checkout “Nome da feature”

Git flow feature publish

Git flow feature finish “Nome da feature”

Git flow release start “Número da versão”

Git flow release publish “Especificar release”

Git flow release finish “Especificar release”

Git flow hotfix start “Número da versão”

Git commit -am “[hotfix/nome]: ação realizada”

Git flow hotfix publish

Git flow hotfix finish
 
 
### Markdown



De forma simplifica markdown seria apenas um outro formato de texto definido em programação como .md, muito utilizado em arquivos readme e para escrever mensagens de forma simplificada.

### CSS



Seria a folha de estilo de uma página HTML, sendo assim serve como toda a formatação que será realizada em imagens, textos, títulos, entre outras questões dentro de uma página.

#### Seletores no CSS



Seletor universal: *

Para selecionar um elemento por ID no CSS, basta utilizar: #

Para selecionar elementos por classe no CSS, basta utilizar: .

#### Cores



Adicionar cor com transparência: rgba(255, 99, 71, 0.5)

### BootStrap



Pode ser definido como um framework(Conjunto de códigos) de css que pode ser utilizado para facilitar a utilização no HTML de classes e para estilização, assim torna mais fácil o processo de definir o estilo do site, utilizando os modelos já definidos.

### Tachyons



A melhor definição seria um facilitador no momento de escrever os códigos em CSS.

### Saas



Serve como um pré formatador de CSS, definindo novas características a folha de estilo e permitindo a utilização de ferramentas que não seriam possíveis como variáveis, importações e herança, além disso é importante lembrar que o navegador irá ler apenas o código em CSS, então após utilizar o Saas é necessário realizar o processo de conversão para funcionar corretamente no site.
