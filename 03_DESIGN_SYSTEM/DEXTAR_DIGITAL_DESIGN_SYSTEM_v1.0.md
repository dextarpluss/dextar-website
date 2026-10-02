# DEXTAR++ Digital Design System v1.0

**Base oficial para:** sistemas web, portais, dashboards, WMS, aplicações administrativas, interfaces operacionais e experiências com IA.

**Princípio:** Tecnologia para operações mais inteligentes.

## 1. Prioridades
1. Clareza operacional.
2. Consistência.
3. Acessibilidade.
4. Densidade adequada ao contexto.
5. Velocidade de execução.
6. Expressão da marca.
7. Ornamentação.

A interface deve transmitir **Segurança, Profissionalismo, Inovação e Parceria**. Evitar estética cyberpunk, neon excessivo, glassmorphism indiscriminado e aparência genérica de template administrativo.

## 2. Linguagem visual
- Deep Navy `#07090E`: estrutura e alto contraste.
- Navy `#0A1830`: sidebar e superfícies dark.
- Cyan `#06B6D4`: ação, IA e foco.
- Blue `#3B82F6`: informação e seleção.
- Emerald `#10B981`: sucesso.
- Purple `#8B5CF6`: análise, estratégia e Insight++.
- Amber `#F59E0B`: atenção.
- Rose `#F43F5E`: erro, bloqueio e destrutivo.
- Cool Gray `#CBD5E1`: elementos neutros.
- White `#FFFFFF`: superfície principal.
- Texto principal `#172033`; secundário `#64748B`; superfície suave `#F7F9FC`.

Gradiente principal: Cyan → Blue. Secundário: Blue → Purple. Gradientes não são fundos padrão de formulários/tabelas.

## 3. Temas
**Clean Theme:** padrão para trabalho intenso, formulários, cadastros, tabelas e relatórios.
**Dark Theme:** dashboards de monitoramento, command centers e baixa luminosidade. Usar camadas de Navy; evitar preto absoluto.

## 4. Tipografia
**Inter Display:** títulos, headings e números de destaque.
**Inter:** corpo, labels, tabelas, inputs e navegação.
Fallback: `system-ui, -apple-system, "Segoe UI", sans-serif`.

Escala: Display 40–48/700; H1 32/700; H2 24/700; H3 18/600; Body 14–16/400; Small 12–13/400–500; Label 12–14/500–600.

## 5. Espaçamento, radius e grid
Base 4 px. Escala: `4, 8, 12, 16, 20, 24, 32, 40, 48, 64`.
Radius: `sm 6`, `md 10`, `lg 14`, `xl 20` px.
Grid desktop: 12 colunas. Breakpoints: `640, 768, 1024, 1280, 1536`.
WMS/backoffice: desktop first. Coletores: arquitetura mobile própria, não simples redução do desktop.

## 6. Application Shell
```text
┌──────────────────────────────────────────────────────────┐
│ Topbar: contexto | busca | notificações | ajuda | perfil │
├───────────────┬──────────────────────────────────────────┤
│ Sidebar       │ Breadcrumb / Page Header                 │
│ módulos       │ KPIs / filtros / ações                   │
│               │ Conteúdo / tabela / formulário/dashboard │
└───────────────┴──────────────────────────────────────────┘
```
Sidebar Deep Navy; logo negativo; ativo com Cyan; menus agrupados por domínio. Topbar só para funções globais. Page Header: breadcrumb → título → descrição → ações; preferir uma única ação primária.

## 7. Componentes
### Botões
Primary Cyan/Blue; Secondary neutro+borda; Ghost baixa ênfase; Danger Rose. Estados obrigatórios: default, hover, focus-visible, active, disabled e loading. Evitar primários concorrentes.

### Inputs
40–44 px. Label sempre visível. Placeholder não substitui label. Erro próximo ao campo. Focus ring Cyan/Blue.

### Select/autocomplete
Listas grandes devem ser pesquisáveis. Em produto/fornecedor/endereço/cliente, suportar código + descrição.

### Cards
Usar para agrupamento semântico, não para encapsular tudo. Tipos: Information, KPI, Operational, Alert e **Insight++**.

### Status
Sucesso=Emerald; andamento/informação=Blue/Cyan; atenção=Amber; erro=Rose; IA/insight=Purple. Cor nunca é o único indicador.

### Modal
Somente decisões/tarefas curtas. Fluxos longos usam página, drawer ou stepper.

## 8. Tabelas
Tabelas são componentes de primeira classe.
- cabeçalho persistente em rolagem longa;
- números à direita;
- ações previsíveis;
- colunas configuráveis quando necessário;
- filtros ativos visíveis;
- paginação/virtualização conforme volume;
- seleção em massa com ações contextuais;
- nada importante depende apenas de hover.
Densidades: comfortable, compact e, quando justificado, dense.

## 9. Formulários
Seguir o fluxo mental do processo; agrupar por negócio; campos importantes primeiro; preservar valores após erro; confirmar saída com alterações não salvas; usar stepper apenas para etapas reais.

## 10. Dashboards e dados
Hierarquia: **situação atual → exceções/riscos → tendência → diagnóstico → ação**.
Todo KPI informa nome, valor, unidade, período e comparação/contexto quando relevante.
Barras=comparação; linha=tendência; donut=poucas categorias; tabela=precisão; heatmap=densidade. Evitar 3D.

## 11. Padrões WMS
**Recebimento:** documento/fornecedor → status → volumes/itens → divergências → ação.
**Armazenagem:** origem, destino, produto, lote/validade, quantidade e confirmação.
**Reposição:** diferenciar preventiva/corretiva; urgência, origem, picking, saldo e sugestão.
**Separação:** minimizar digitação; priorizar código de barras e feedback inequívoco.
**Conferência:** esperado × conferido × divergência. Corte parcial, corte total de item e corte completo do pedido são estados distintos.
**Carregamento:** carga/rota, sequência, pedidos, volumes, pendências e liberação.
**Endereços:** entidade operacional; mostrar código legível e contexto físico.

## 12. Dextar Intelligence++
IA é uma **capacidade contextual**, não um chatbot genérico.

Vocabulário:
- **Insight++** — interpretação relevante a partir de dados.
- **Recomendação++** — ação sugerida.
- **Análise++** — síntese estruturada.
- **Assistente++** — interação conversacional contextual.
- **Automação++** — ação executável ou fluxo assistido.

### Insight++ Card
```text
INSIGHT++
[Título objetivo]
O que foi observado
Por que importa
Base/período analisado
[Ver evidências] [Gerar ação]
```
Purple sinaliza inteligência estratégica; Cyan sinaliza ação.

### Recomendação++
Informar ação, motivo, impacto esperado quando disponível, evidências, limitações/incerteza e possibilidade de revisão.

### Assistente++
Deve usar contexto da tela quando tecnicamente permitido: pedido, produto, período ou divergência. Diferenciar informação do sistema, conteúdo gerado por IA e ação executável. Alterações irreversíveis exigem confirmação explícita.

## 13. Estados obrigatórios
Loading; skeleton quando útil; vazio inicial; vazio após filtro; erro recuperável; erro bloqueante; sem permissão; offline quando aplicável; sucesso; dados desatualizados.

## 14. Acessibilidade
Meta mínima **WCAG 2.2 AA**: teclado completo, focus-visible, contraste, labels associados, erros relacionados aos campos, aria-live para atualizações importantes, alvos de toque adequados, estado não comunicado só por cor e respeito a `prefers-reduced-motion`.

## 15. Microcopy
Linguagem curta e operacional. Preferir “Salvar alterações”, “Liberar carregamento”, “Reprocessar integração”, “3 itens com divergência”. Evitar “OK”, “Clique aqui” e “Algo deu errado” sem contexto. Erros explicam o que aconteceu + impacto + resolução quando conhecida.

## 16. CSS Tokens
```css
:root {
  --dx-navy-950:#07090E; --dx-navy-900:#0A1830;
  --dx-cyan-500:#06B6D4; --dx-blue-500:#3B82F6;
  --dx-emerald-500:#10B981; --dx-purple-500:#8B5CF6;
  --dx-amber-500:#F59E0B; --dx-rose-500:#F43F5E;
  --dx-surface:#FFFFFF; --dx-surface-soft:#F7F9FC;
  --dx-text:#172033; --dx-text-muted:#64748B; --dx-border:#E2E8F0;
  --dx-radius-sm:6px; --dx-radius-md:10px; --dx-radius-lg:14px; --dx-radius-xl:20px;
  --dx-space-1:4px; --dx-space-2:8px; --dx-space-3:12px; --dx-space-4:16px;
  --dx-space-5:20px; --dx-space-6:24px; --dx-space-8:32px; --dx-space-10:40px;
  --dx-space-12:48px; --dx-space-16:64px;
}
```

## 17. Prompt-base para IA generativa
```text
Implemente esta aplicação seguindo obrigatoriamente o DEXTAR++ Digital Design System.

Priorize clareza operacional, acessibilidade, fidelidade aos tokens, componentização e consistência.
Use Inter/Inter Display e Deep Navy + Cyan + Blue como núcleo visual.
Reserve cores semânticas aos significados definidos.
Não crie nova linguagem visual.
Não use cyberpunk, neon excessivo, glassmorphism generalizado ou gradientes aleatórios.
Em telas executivas preserve espaço negativo; em telas operacionais densas priorize leitura, filtros e velocidade.
Implemente loading, empty, error, success e disabled states.
Garanta teclado e contraste WCAG AA.
Para IA, use Insight++, Recomendação++, Análise++, Assistente++ e Automação++.
Diferencie visualmente conteúdo gerado por IA de fatos do sistema.
Ações irreversíveis sugeridas por IA exigem confirmação.
Use ++ para comunicar evolução/inteligência, não como ornamento repetitivo.
```

## 18. Checklist
- [ ] A ação principal é evidente?
- [ ] O usuário entende onde está?
- [ ] Hierarquia visual clara?
- [ ] Tokens oficiais usados?
- [ ] Cores têm função?
- [ ] Funciona sem depender de hover?
- [ ] Loading/empty/error/success previstos?
- [ ] Tabela/formulário reflete o fluxo real?
- [ ] Teclado e contraste AA?
- [ ] IA claramente identificada?
- [ ] Recomendação de IA mostra contexto/evidência?
- [ ] Parece Dextar++ sem sacrificar usabilidade?

## 19. Anti-patterns
Não usar: sidebar sem agrupamento; cards dentro de cards sem necessidade; KPI multicolorido sem semântica; gradiente em todos os botões; primários concorrentes; ícones sem labels em ações críticas; placeholder como label; tabela sem filtros; gráficos decorativos; chat flutuante como única manifestação de IA; ação irreversível automática; interface “futurista” que prejudica legibilidade.

---
**DEXTAR++ — Inteligência aumentada. Produtividade aumentada.**
