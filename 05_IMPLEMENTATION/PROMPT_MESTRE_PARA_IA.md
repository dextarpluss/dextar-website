# PROMPT MESTRE — IMPLEMENTAÇÃO DO SITE DEXTAR++

Você é responsável por projetar e implementar o website institucional/comercial da **Dextar Soluções em Tecnologia — Dextar++**.

## FONTES OBRIGATÓRIAS
Leia integralmente, antes de implementar:
1. `DEXTAR_WEBSITE_SPECIFICATION_v1.0.md`
2. `DEXTAR_WEBSITE_CONTENT_v1.0.md`
3. `DEXTAR_DIGITAL_DESIGN_SYSTEM_v1.0.md`
4. `DEXTAR_System_Design_Guide_v1.0.md`
5. identidade visual e logos em `01_BRAND`
6. wireframes em `04_WIREFRAMES`

Não trate os mockups como screenshots a serem copiados pixel a pixel; use-os como direção de composição. O Design System e a identidade oficial controlam cores, tipografia e linguagem.

## OBJETIVO
Criar um site moderno, profissional, rápido e responsivo que posicione a Dextar++ como empresa especializada em tecnologia aplicada à operação, com três pilares centrais:
- WMS Dextar++;
- Integrações;
- Dextar Intelligence++.

Agendamento, Gestão de Entregas e Projetos Especiais são ofertas complementares.

## REGRAS INEGOCIÁVEIS
- Não invente fatos, métricas, clientes, depoimentos, contatos, endereços, certificações ou parcerias.
- Onde o conteúdo estiver marcado `[VALIDAR]`, não publique como fato. Use placeholder claramente identificado ou oculte a seção.
- Não transforme percentuais presentes em imagens conceituais em resultados reais.
- Não use logos de clientes/terceiros sem ativo e autorização fornecidos.
- Não faça a Dextar parecer uma software house genérica.
- Não use estética cyberpunk, excesso de neon, glassmorphism generalizado, robôs humanoides ou clichês de IA.
- Preserve o conceito `++` como inteligência/produtividade aumentada.
- Use português do Brasil.
- Implemente acessibilidade WCAG 2.2 AA como requisito.
- Mobile deve ser projetado, não apenas encolhido.

## DIREÇÃO VISUAL
Deep Navy + Cyan + Blue como núcleo. Emerald, Purple, Amber e Rose somente de forma semântica.
Inter Display para títulos e Inter para interface/texto.
Espaço negativo, hierarquia editorial forte, cards com parcimônia, bordas e sombras discretas.
Use o logo correto para cada fundo.

## ARQUITETURA
Implemente Home, Soluções, WMS, Intelligence++, Integrações, Cases, Case individual, Conteúdos, Conteúdo individual, Sobre, Contato e Privacidade.
Cases e Conteúdos devem ser preparados para CMS.

## STACK
Se nenhuma stack for imposta pelo ambiente, prefira uma stack moderna com SSR/SSG, TypeScript, componentes reutilizáveis e excelente suporte a SEO. Não introduza bibliotecas grandes sem necessidade. Separe conteúdo, componentes, tokens e integrações.

## QUALIDADE
Antes de concluir:
- execute build;
- corrija erros;
- verifique responsividade em 375, 768, 1024 e 1440 px;
- verifique navegação por teclado;
- valide formulários e estados;
- valide metadata/SEO;
- confira que nenhum placeholder foi silenciosamente convertido em fato;
- documente decisões e pendências.

## RESULTADO ESPERADO
Entregue o site completo e um `README.md` contendo:
- arquitetura;
- instalação;
- variáveis de ambiente;
- build/deploy;
- CMS;
- onde alterar contatos;
- onde substituir imagens;
- lista de itens ainda `[VALIDAR]`;
- decisões técnicas importantes.

Comece fazendo um inventário dos arquivos recebidos e uma lista curta das pendências factuais. Depois implemente a fundação visual e a Home; em seguida as páginas internas; por fim execute QA e entregue o relatório de conclusão.
