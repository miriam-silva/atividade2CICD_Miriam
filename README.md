# Galeria de Gatinhos 🐱

## Descrição
Projeto simples de galeria de imagens de gatinhos, onde é possível visualizar fotos, navegar entre elas e testar funcionalidades básicas de front-end.  
Este projeto também serve como exemplo para configurar um **pipeline de CI/CD** usando GitHub Actions.

---

## Estrutura do Projeto
- `src/` → código-fonte do projeto (HTML, CSS, JS)  
- `tests/` → testes automatizados  
- `.github/workflows/ci.yml` → workflow de CI/CD  

---

## Como o Pipeline Funciona

O workflow do GitHub Actions executa os seguintes passos sempre que há **push** ou **pull request**:

1. **Checkout do código**
   - Baixa o código do repositório para o runner do GitHub Actions.

2. **Instalação de dependências**
   - Se houver dependências (Node.js, pacotes npm, etc.), elas são instaladas.

3. **Execução de testes**
   - Executa testes automatizados para garantir que mudanças no código não quebrem funcionalidades.

4. **Build do projeto**
   - Prepara os arquivos para produção (minificação, empacotamento, etc.).

5. **Entrega contínua (opcional)**
   - Caso configurado, envia o projeto para uma hospedagem, como **Vercel** ou **Netlify**.

6. **Notificações**
   - Alerta em caso de falha ou sucesso do pipeline.

---

## Como Contribuir

1. **Fork e clone**
   - Faça um fork deste repositório e clone na sua máquina local.

2. **Crie uma branch**
   ```bash
   git checkout -b minha-nova-funcionalidade
   ```

3. **Faça alterações**
  - Adicione novas funcionalidades ou corrija bugs.
  - Escreva testes sempre que possível.

4. **Commit e push**
  ```bash
  git add .
  git commit -m "Descrição das alterações"
  git push origin minha-nova-funcionalidade
  ```

5. **Abra um Pull Request**
  - No GitHub, abra um PR para a branch main.
  - O pipeline será executado automaticamente para verificar se tudo funciona.

---

## Links Úteis ##
* [Exemplo de workflow CI/CD](https://github.com/paulatoledop/exemplo_pipeline)
* [Guia do GitHub Actions](https://docs.github.com/en/actions)
* [Vercel - Deploy automático](https://vercel.com/docs)
