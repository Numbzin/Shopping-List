
# Lista de Compras - Vue.js

Este é um projeto simples de **Lista de Compras** desenvolvido com **Vue.js** e **Vuex**, que permite aos usuários adicionar, editar, remover itens, marcar como comprados, filtrar e persistir os dados no **localStorage**.

## Funcionalidades

- **Adicionar Itens**: O usuário pode adicionar itens à lista de compras, especificando o nome e a categoria.
- **Editar Itens**: Os itens podem ser editados para alterar o nome ou a categoria.
- **Remover Itens**: O usuário pode remover itens da lista de compras.
- **Marcar como Comprado**: Os itens podem ser marcados como comprados, o que é refletido visualmente com uma marcação de **checkbox**.
- **Filtrar Itens**: O usuário pode filtrar a lista de itens por:
  - **Todos**: Exibe todos os itens.
  - **Comprados**: Exibe apenas os itens comprados.
  - **Não Comprados**: Exibe apenas os itens não comprados.
- **Persistência de Dados**: A lista de compras e o filtro selecionado são armazenados no **localStorage**, garantindo que os dados sejam mantidos entre recargas de página.

## Tecnologias Utilizadas

- **Vue.js**: Framework JavaScript para criar interfaces de usuário reativas.
- **Vuex**: Biblioteca para gerenciamento de estado em aplicações Vue.js.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **localStorage**: Armazenamento local do navegador para persistência de dados.

## Como Rodar o Projeto

1. **Clonar o Repositório**:

   ```bash
   git clone https://github.com/Numbzin/Shopping-list.git
   ```

2. **Instalar Dependências**:

   Navegue até a pasta do projeto e instale as dependências:

   ```bash
   cd Shopping-list
   npm install
   ```

3. **Rodar o Projeto**:

   Para rodar o servidor de desenvolvimento:

   ```bash
   npm run serve
   ```

   O projeto estará disponível em `http://localhost:8080`.

## Estrutura do Projeto

- **src/**: Contém os arquivos do código fonte do projeto.
  - **components/**: Componentes Vue.js reutilizáveis.
  - **store/**: Armazena o estado global da aplicação utilizando Vuex.
  - **views/**: Páginas principais da aplicação.
  - **types/**: Tipos TypeScript utilizados no projeto.

## Exemplo de Uso

### Adicionar um item:
1. Preencha o nome do item e selecione uma categoria.
2. Clique no botão "Adicionar".

### Editar um item:
1. Clique no botão "Editar" ao lado de um item.
2. Altere o nome ou categoria e clique em "Salvar".

### Marcar como Comprado:
1. Marque a caixa de seleção ao lado de um item para marcar como comprado.

### Filtrar Itens:
1. Selecione um filtro ("Todos", "Comprados", "Não Comprados") no menu para ver apenas os itens que correspondem ao filtro.

## Melhorias Futuras

- Adicionar suporte para múltiplos usuários.
- Implementar categorias personalizadas.
- Melhorar a interface com componentes interativos, como modais e animações.
- Implementar um sistema de prioridades para os itens.
- Adicionar a funcionalidade de sincronização de dados entre dispositivos.

## Contribuições

Contribuições são bem-vindas! Se você deseja melhorar este projeto, sinta-se à vontade para fazer um **fork** e enviar um **pull request**.

1. Faça um **fork** deste repositório.
2. Crie uma branch para sua funcionalidade (`git checkout -b minha-funcionalidade`).
3. Faça o commit das suas mudanças (`git commit -am 'Adiciona minha funcionalidade'`).
4. Envie para o seu repositório remoto (`git push origin minha-funcionalidade`).
5. Abra um **pull request**.

## Licença

Este projeto é licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

