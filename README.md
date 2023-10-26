<h1>Aplicação de Relatório de Processos Jurídicos</h1>
<p>Esta aplicação permite visualizar os processos pelos quais um advogado é responsável, a partir de uma base de dados fornecida.</p>
<h2>Funcionalidades</h2>
    <ul>
        <li>A aplicação permite a inserção do ID do advogado em um formulário.</li>
        <li>Ao clicar em "Gerar relatório", a aplicação exibe todos os processos atribuídos ao advogado no banco de dados.</li>
        <li>A saída é exibida em uma página web amigável.</li>
    </ul>

<h2>Descrição e Tecnologias Usadas</h2>
    <ul>
        <li>Uso de Arquitetura MSC para o backend com NodeJs, Express e Docker</li>
        <li>Frontend construído com React e uso o axios para conectar com a API</li>
        <li>MySQL instalado na máquina local. Workbench para executar o script do banco de dadose uma pasta .env que igonora o arquivo no github para ocultar minha senha e usuario dando mais segurança
         </li>
    </ul>
    <div>
      
#### Banco de Dados: escritorio

#### Tabela: Advogados

| Coluna       | Tipo de Dado | Descrição                  |
|--------------|--------------|----------------------------|
| ID_Advogado  | Inteiro      | Identificador do Advogado   |
| Nome         | Varchar(100) | Nome do Advogado           |
| Especialidade| Varchar(100) | Especialidade do Advogado   |

#### Tabela: Processos

| Coluna       | Tipo de Dado | Descrição                       |
|--------------|--------------|---------------------------------|
| ID_Processo  | Inteiro      | Identificador do Processo        |
| ID_Advogado  | Inteiro      | ID do Advogado Responsável       |
| Nome_Cliente | Varchar(100) | Nome do Cliente do Processo     |
| Tipo_Processo| Varchar(100) | Tipo de Processo Jurídico        |
| Status       | Varchar(50)  | Status Atual do Processo         |
| Descrição    | Texto        | Descrição Detalhada do Processo  |
</div>

<h2>Instalação</h2>
    <ol>
        <li>Clone este repositório.</li>
        <li>Execute o script fornecido Workbench para criar o banco de dados.</li>
        <li>Configure as credenciais de conexão com o banco de dados no código.</li>
        <li>Intale o projeto entrando na pasta Backend e Front com <code>npm install</code> </li>
    </ol>

  <h2>Uso</h2>
    <ol>
        <li>Abra o terminal e navegue até o diretório do projeto.</li>
        <li>Execute o programa com o comando: <code>npm run dev e npm start</code>.</li>
        <li>Acesse a aplicação em um navegador da web.</li>
        <li>Insira o ID do advogado no formulário e clique em "Gerar relatório".</li>
    </ol>

  <h2>Contribuição</h2>
    <p>Contribuições são bem-vindas! Para mudanças importantes, abra um problema primeiro para discutir o que você gostaria de mudar.</p>

