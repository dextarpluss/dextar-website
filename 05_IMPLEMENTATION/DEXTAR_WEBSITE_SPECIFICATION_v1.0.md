# DEXTAR++ — WEBSITE SPECIFICATION v1.0

## 1. Objetivo
Construir o website institucional/comercial oficial da Dextar++, posicionando a empresa em **Logística + Automação + Integrações + Inteligência Artificial**, com linguagem visual coerente com a identidade Dextar++ e foco em geração de oportunidades comerciais.

## 2. Princípio de marca
**Tecnologia para operações mais inteligentes.**

Mensagem de abertura recomendada:
**Logística que pensa à frente.**
Tecnologia, automação e inteligência para operações mais ágeis, seguras e eficientes.

## 3. Sitemap
- `/` Home
- `/solucoes`
- `/wms`
- `/intelligence`
- `/integracoes`
- `/cases`
- `/cases/[slug]`
- `/conteudos`
- `/conteudos/[slug]`
- `/sobre`
- `/contato`
- `/privacidade`

## 4. Header
Desktop: logo à esquerda; Soluções, WMS, Intelligence++, Integrações, Cases, Conteúdos e Sobre; CTA **Fale com um especialista**.
Mobile: logo + menu hamburger; CTA deve permanecer fácil de encontrar.
Header sticky após início da rolagem, sem ocupar altura excessiva.

## 5. Home — ordem oficial
1. Header
2. Hero
3. Diferenciais rápidos
4. Problema/contexto
5. Soluções
6. Destaque WMS
7. Intelligence++
8. Integrações
9. Como trabalhamos
10. Segmentos
11. Cases/resultados
12. Conteúdos
13. CTA final
14. Footer

### Hero
Desktop: composição assimétrica com texto à esquerda e imagem logística realista à direita.
Mobile: texto primeiro; imagem depois dos CTAs.
Não usar vídeo automático como requisito inicial.
CTAs: **Conheça nossas soluções** e **Fale com um especialista**.

### Diferenciais
4 itens curtos: experiência em operação/ERP; implantação próxima; integração; inteligência aplicada.

### Soluções
Cards para WMS, Integrações, Intelligence++, Agendamento, Gestão de Entregas e Projetos Especiais. No desktop, evitar uma “parede de cards”; dar maior destaque aos três pilares principais.

### WMS
Bloco dark de alto contraste com imagem operacional e fluxo: Recebimento → Armazenagem → Reposição → Separação → Conferência → Carregamento.

### Intelligence++
Bloco clean com exemplo de Insight++ e acesso às capacidades: Insight++, Análise++, Recomendação++, Assistente++ e Automação++.

### Integrações
Diagrama simples com Dextar++ no centro e categorias de sistemas ao redor. TOTVS/Winthor só deve ser publicado após validação final de texto/marca.

### Método
Entender → Desenhar → Executar → Evoluir.

### Cases
Nunca publicar métricas fictícias. Cada card deve usar dado comprovado ou ficar oculto até existir conteúdo aprovado.

## 6. Páginas internas

### /wms
Hero → proposta → processos → operação móvel/coletor → integração ERP → rastreabilidade → implantação → CTA.

### /intelligence
Hero → princípio “IA com contexto” → capacidades → exemplo de Insight++ → governança → segurança/privacidade → aplicações → CTA.

### /integracoes
Hero → ecossistema → arquitetura conceitual → APIs/Web Services → rastreabilidade/reprocessamento → Winthor (se aprovado) → CTA.

### /solucoes
Visão geral das seis linhas de solução, com links para páginas dedicadas quando existirem.

### /cases
Filtro por segmento/solução; cards; página individual seguindo Cenário → Desafio → Solução → Implantação → Resultado → Evidências.

### /sobre
Origem da Dextar → evolução → posicionamento atual → valores → forma de trabalhar. Manter marcações de fatos ainda não validados fora da publicação.

### /conteudos
CMS com categorias Operação & WMS, ERP & Integrações, IA Aplicada, Gestão & Dados.

### /contato
Formulário curto + áreas de interesse. Exibir canais oficiais somente após fornecimento/validação.

## 7. Design responsivo
Breakpoints de referência: 640 / 768 / 1024 / 1280 / 1536.
Mobile não é desktop comprimido. Hero, cards, navegação e diagramas devem reorganizar hierarquia.
Alvo mínimo: 375 px de largura.

## 8. Componentes
Header, Footer, Button, Link, SectionHeader, SolutionCard, KPI/Metric, CaseCard, ArticleCard, InsightCard, IntegrationDiagram, ProcessFlow, Testimonial, CTASection, ContactForm, Breadcrumb, Badge, Accordion e CookieConsent.

## 9. Estados
Todo componente interativo deve prever hover, focus-visible, active, disabled e loading. Formulários: idle, validating, success e error. Conteúdo dinâmico: loading, empty e failure.

## 10. Acessibilidade
Meta WCAG 2.2 AA. HTML semântico; navegação por teclado; skip link; contraste; alt text; labels reais; erros associados aos campos; focus-visible; reduced motion; headings em ordem lógica.

## 11. Performance
Priorizar Core Web Vitals. Imagens responsivas, formatos modernos, lazy-loading fora da dobra, fontes otimizadas, JS mínimo, evitar dependências pesadas para efeitos cosméticos.

## 12. SEO
SSR/SSG quando adequado; title/description únicos; canonical; sitemap.xml; robots.txt; Open Graph; Twitter cards; JSON-LD Organization/Article/Breadcrumb quando aplicável; URLs legíveis.

## 13. CMS
Cases e Conteúdos devem ser editáveis sem alteração de código. Campos de Case: título, slug, segmento, solução, cenário, desafio, solução aplicada, integrações, resultados, evidências, imagens, depoimento/autorização, SEO.

## 14. Analytics e conversão
Eventos recomendados: CTA principal, envio de contato, clique WhatsApp/telefone (se houver), acesso a solução, leitura de case e profundidade de conteúdo. Implementação deve respeitar consentimento e política de privacidade.

## 15. Segurança e privacidade
HTTPS; validação server-side; proteção antispam/rate limit no contato; não expor secrets no frontend; sanitização de conteúdo CMS; consentimento quando necessário; coleta mínima de dados.

## 16. Direção fotográfica
Preferir fotografias reais ou realistas de operações logísticas, armazéns, coletores e equipes. Evitar robôs humanoides, circuitos neon, cérebros holográficos e clichês visuais de IA.

## 17. Conteúdo não aprovado
Não inventar: clientes, depoimentos, números, endereço, telefone, e-mail, certificações, parceiros, resultados, anos de mercado além do que estiver validado, logos de terceiros ou alegações sobre integração não documentadas.
Use placeholders explícitos ou oculte a seção.

## 18. Critérios de aceite
- identidade Dextar++ reconhecível;
- responsivo 375 px → desktop;
- navegação e CTAs consistentes;
- Lighthouse/auditoria sem problemas críticos de acessibilidade;
- nenhum conteúdo factual inventado;
- formulários funcionais;
- SEO técnico básico;
- CMS funcional para Cases/Conteúdos;
- páginas de erro 404 e 500;
- estados de loading/error/empty;
- build reproduzível e README técnico.

## 19. Entrega técnica esperada
Código-fonte completo; `.env.example`; README; instruções de instalação/build/deploy; estrutura de CMS; documentação dos componentes; testes essenciais; assets otimizados; sitemap; metadata; política de privacidade placeholder para revisão jurídica.

## 20. Regra de precedência
Em conflito:
1. fatos validados pelo cliente;
2. identidade visual oficial;
3. DEXTAR Digital Design System;
4. esta Website Specification;
5. Website Content;
6. wireframes/referências visuais.
