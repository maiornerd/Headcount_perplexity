# Controle de Efetivo Demillus

## Descrição

Este projeto é um sistema corporativo web para controle de efetivo (headcount) de funcionários, com diferentes níveis hierárquicos de acesso, upload automático de dados via arquivos Excel, relatórios e gráficos dinâmicos. O sistema é seguro, responsivo, e adapta-se tanto a desktop quanto a dispositivos móveis.

## Funcionalidades Principais

- Autenticação segura com login via matrícula e senha
- Perfis de acesso hierárquicos: Administrador, Gerente, Coordenador, Analista e Visualizador
- Upload automático de arquivos Excel contendo dados de funcionários e vagas orçadas
- Visualização e gerenciamento de funcionários, vagas e relatórios personalizados
- Controle avançado de permissões para acesso baseado na área e perfil
- Gráficos dinâmicos e exportação de dados para CSV, Excel e PDF
- Timeout de sessão para segurança adicional

## Estrutura do Projeto

- `index.html`: página principal da aplicação
- `assets/`: arquivos de estilos, scripts, imagens e bibliotecas externas
- `examples/`: arquivos Excel de exemplo para upload (funcionários e vagas)
- `README.md`: este arquivo de documentação
- `LICENSE`: licença MIT do projeto

## Instalação e Uso

1. Clone ou faça download deste repositório
2. Abra o arquivo `index.html` em seu navegador para iniciar o sistema
3. Utilize as credenciais padrão para login (ex: matrícula `0001`, senha `1234`)
4. Para administradores: faça upload dos arquivos Excel para atualizar os dados
5. Navegue pelas seções do sistema conforme seu perfil

## Tecnologias Utilizadas

- HTML5, CSS3 e JavaScript ES6+
- Biblioteca Chart.js para gráficos dinâmicos
- Biblioteca XLSX.js para processamento de arquivos Excel
- Design responsivo com TailwindCSS (ou CSS customizado)

## Contribuição

Contribuições e melhorias são bem-vindas! Por favor, abra uma issue para sugestões ou envie pull requests.

## Licença

Este projeto está licenciado sob a licença MIT.
