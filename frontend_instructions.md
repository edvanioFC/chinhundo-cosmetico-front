# Instruções para o agente de desenvolvimento do frontend

## Objetivo

Criar uma experiência de e-commerce de cosméticos elegante, rápida, acessível e responsiva, com descoberta de produtos, seleção de tons/cores, carrinho lateral, checkout simples e área de cliente.

## Stack obrigatória

- Next.js com App Router e TypeScript.
- Tailwind CSS e componentes UI reutilizáveis.
- React Server Components por padrão; Client Components apenas quando houver interação ou estado local.
- React Hook Form e Zod para formulários.
- `@hookform/resolvers` para integrar cada formulário React Hook Form aos schemas Zod.
- TanStack Query ou o padrão de fetch já existente para cache, mutações e invalidação.
- next/image, metadata e dados estruturados para SEO.
- Docker e Docker Compose para executar o frontend de forma reproduzível.

## Regras de execução

1. Inspecionar primeiro a estrutura, rotas, tokens visuais, componentes e variáveis de ambiente existentes.
2. Preservar o design system atual e criar componentes reutilizáveis em vez de duplicar markup.
3. Não colocar chaves de pagamento, segredos ou lógica de autorização no cliente.
4. Tratar loading, erro, vazio, offline e sucesso em todas as páginas assíncronas.
5. Garantir navegação por teclado, foco visível, labels, contraste WCAG AA e leitores de ecrã.
6. Validar desktop, tablet e telemóvel; o layout não pode depender de scroll horizontal.
7. Usar moeda, idioma e formatos configuráveis; o padrão deve ser português de Angola e AOA/Kz.

## Validação obrigatória com Zod

- Usar Zod como fonte única das regras de validação do frontend; não validar formulários apenas com condições espalhadas nos componentes.
- Criar schemas separados e reutilizáveis para autenticação, perfil, moradas, dados fiscais/NIF, checkout, pagamentos, cupões, devoluções, filtros e contacto.
- Ligar os schemas ao React Hook Form através de `zodResolver`.
- Reutilizar tipos inferidos com `z.infer<typeof schema>` para manter formulário e payload sincronizados.
- Normalizar telefone, NIF, moeda, quantidades e espaços antes da submissão.
- Mostrar mensagens de erro em português, junto ao campo, com `aria-describedby` e estado `aria-invalid`.
- Validar novamente no backend; a validação no frontend melhora a experiência, mas nunca substitui a API.
- Não duplicar regras de preço, stock, impostos ou autorização no cliente; o frontend apenas valida formato e campos obrigatórios.
- Instalar as dependências na inicialização: `zod`, `react-hook-form` e `@hookform/resolvers`.

## Estrutura de páginas

Implementar ou adaptar:

- `/`: homepage com campanhas, categorias, marcas e produtos em destaque.
- `/produtos`: catálogo com pesquisa, filtros e ordenação.
- `/produtos/[slug]`: detalhe do produto e seleção de variante.
- `/categorias/[slug]` e `/marcas/[slug]`.
- `/carrinho`: página completa e drawer global do carrinho.
- `/checkout`: endereço, entrega, pagamento, revisão e confirmação.
- `/conta`: perfil, moradas, encomendas, favoritos e definições.
- `/conta/encomendas/[id]`: estado, itens, pagamento, entrega e rastreio.
- `/conta/faturas`: lista de faturas, recibos, notas de crédito e downloads.
- `/conta/faturas/[id]`: detalhe fiscal, PDF, estado de emissão e encomenda associada.
- `/entrar`, `/registar` e recuperação de palavra-passe.
- Rotas administrativas separadas e protegidas pelo backend.

## Catálogo e filtros

- Apresentar cards com foto, marca, nome, preço, preço promocional, avaliação, selo e disponibilidade.
- Filtros por tipo de pele, tom/cor, marca, categoria, faixa de preço, acabamento e stock.
- Em desktop, usar painel lateral; em tablet/mobile, usar drawer com filtros aplicáveis e contador.
- Sincronizar filtros com query params para URLs partilháveis e botão de limpar tudo.
- Usar paginação ou carregamento incremental sem perder os filtros.
- Mostrar estado “sem resultados” com sugestão para remover filtros.

## Página de produto

- Galeria responsiva com zoom, miniaturas e fallback acessível.
- Mostrar descrição, ingredientes, benefícios, precauções, modo de uso, avaliações e disponibilidade.
- Variantes de tom/cor devem ter swatches com nome, código, imagem e estado indisponível.
- Atualizar preço, SKU e imagem ao trocar a variante.
- Permitir quantidade, adicionar ao carrinho, favoritar e partilhar.
- Exibir entrega estimada, política de devolução e recomendações relacionadas.

## Carrinho e checkout

- Implementar drawer acessível com abertura pelo ícone, tecla Escape e foco controlado.
- Permitir editar quantidades, remover itens, guardar para depois e ver subtotal.
- No checkout, dividir em passos claros: dados, entrega, pagamento e confirmação.
- Mostrar resumo persistente em desktop e resumo expansível em mobile.
- Validar cada campo antes de avançar e preservar dados ao voltar.
- Exibir métodos de pagamento disponíveis sem recolher dados sensíveis diretamente quando o provedor hospedar o pagamento.
- Mostrar estados de processamento, falha, pagamento pendente e sucesso com próximos passos.

## Localização e comércio em Angola

- Mostrar preços em AOA/Kz e formatar valores com locale `pt-AO`.
- Recolher telefone com indicativo `+244`, província, município, bairro e referência de entrega.
- Apresentar Multicaixa Express, referência, IBAN, transferência, cartão e PayPal apenas quando habilitados pelo backend.
- Mostrar portes, impostos e total final antes da confirmação.
- Explicar claramente pagamentos pendentes, reservas temporárias e prazos de entrega.

## Pós-venda

- Disponibilizar na área de cliente pedidos de devolução, troca, produto danificado e reembolso.
- Mostrar regras e prazos de devolução antes do pagamento e no detalhe da encomenda.
- Exibir estados de preparação, envio, entrega, cancelamento e reembolso numa linha temporal.
- Permitir abrir suporte já associado à encomenda e aos itens relevantes.

## Faturação eletrónica

- No checkout, recolher dados fiscais conforme o tipo de cliente: nome legal, NIF, morada e e-mail.
- Explicar quando a fatura será emitida conforme o método de pagamento.
- Mostrar o estado da fatura: em preparação, emitida, enviada, anulada ou corrigida.
- Disponibilizar PDF e envio por e-mail sem expor documentos de outra conta.
- Apresentar IVA, isenções, descontos, portes e total de forma clara.
- Mostrar notas de crédito associadas a devoluções e reembolsos.
- Tratar falhas de emissão com mensagem clara e opção de tentar novamente ou contactar suporte.
- Na área administrativa, permitir consultar séries, documentos, filtros por período/estado/NIF e exportação para contabilidade.

## Descoberta e retenção

- Incluir favoritos, produtos vistos recentemente, recomendações e avaliações verificadas.
- Mostrar avisos de stock baixo, esgotado, pré-encomenda e lista de espera sem induzir o utilizador em erro.
- Tratar carrinho abandonado apenas com consentimento e permitir cancelar comunicações.
- Implementar SEO, partilha social e eventos de conversão respeitando consentimento de cookies.

## Área de cliente

- Dashboard com encomendas recentes, estado de entrega, favoritos e atalhos.
- Perfil editável, moradas, sessões ativas e preferências de comunicação.
- Histórico de encomendas com filtros, detalhe, fatura/comprovativo e pedido de suporte.
- Nunca mostrar dados de outro utilizador; tratar expirados e erros de sessão com redirecionamento para login.

## Segurança da conta

- Disponibilizar verificação de e-mail, recuperação de palavra-passe e gestão de sessões.
- Mostrar 2FA e gestão de dispositivos para administradores e perfis que o backend exigir.
- Pedir confirmação antes de apagar conta, alterar e-mail, endereço principal ou iniciar devolução.

## Design e componentes

Criar componentes para Header, Footer, ProductCard, ProductGrid, FilterDrawer, SearchBar, VariantSwatches, Price, Rating, Badge, CartDrawer, CheckoutStepper, AddressForm, PaymentMethod, OrderTimeline, EmptyState, LoadingSkeleton, Toast e Modal. Usar uma paleta inspirada em beleza: neutros quentes, tons suaves, cor de ação contrastante e tipografia legível. Suportar dark/light mode sem perder contraste.

## Identidade visual obrigatória do grupo Chinhundo

Esta plataforma pertence ao grupo Chinhundo e deve parecer parte do mesmo ecossistema. Não gerar uma loja branca, genérica ou com estética de template SaaS.

- Modo escuro por defeito: fundo `#101915`, superfícies `#19271f`, texto principal `#f6f3e9`, texto secundário verde/cinza suave e linhas com baixo contraste.
- Modo claro: fundo `#f7f5ef`, superfícies `#fffefa`, texto `#1f2923` e bordas quentes discretas.
- Cor de ação da marca: laranja Chinhundo `#c84b22`, usada em botões primários, links ativos, preços promocionais, estados de foco e detalhes editoriais.
- Usar verdes profundos, creme e laranja como tokens CSS; não espalhar hexadecimais arbitrários pelos componentes.
- Botões primários devem ser laranja com texto claro; botões secundários devem usar superfícies verdes/creme com borda da marca.
- Cartões, filtros, drawer e checkout devem manter a superfície do tema, com bordas e sombras suaves. Evitar cartões brancos sobre fundo escuro.
- Usar creme e laranja para criar hierarquia de beleza premium, mantendo leitura e contraste WCAG AA.
- Preservar logo, linguagem visual, cantos arredondados, linhas finas e composição editorial já usados no Chinhundo.
- Criar dark mode e light mode completos; nunca deixar textos claros sobre fundos claros nem superfícies claras sem adaptação no modo escuro.
- Se o gerador propuser fundo branco, azul, roxo ou gradientes excessivos, substituir pelos tokens Chinhundo e justificar qualquer exceção.
- O resultado deve ser elegante e comercial, com espaço visual controlado, sem minimalismo vazio que remova identidade, informação ou contraste.

## Performance, SEO e acessibilidade

- Otimizar imagens, usar lazy loading abaixo da dobra e evitar re-renderizações desnecessárias.
- Usar metadata por produto/categoria, canonical URLs, Open Graph e JSON-LD de Product/Breadcrumb.
- Testar Core Web Vitals, navegação por teclado, foco em drawers/modais e mensagens de erro associadas aos campos.
- Não usar `window`, `Date.now()` ou dados aleatórios durante SSR de forma que cause hydration mismatch.
- Implementar estados de skeleton que mantenham a estrutura visual estável.

## Containerização

- Fornecer `Dockerfile` multi-stage para instalar dependências, fazer build e executar o Next.js em modo produção.
- Usar imagem mínima, utilizador não root e `npm ci` com lockfile.
- Fornecer configuração Docker Compose para desenvolvimento com hot reload e para produção com `next start`.
- Injetar `NEXT_PUBLIC_*` e restantes variáveis no ambiente adequado; nunca embutir segredos na imagem.
- Configurar health check, graceful shutdown, limites de recursos e política de restart.
- Manter a URL da API configurável por ambiente e validar CORS, cookies e domínio antes do deploy.
- Documentar comandos para iniciar, testar, construir, consultar logs e atualizar o container.

## Critérios de conclusão

Cada fluxo deve ser validado em desktop, tablet e mobile, com testes de navegação, formulários, carrinho, checkout, sessão expirada e falhas da API. Entregar os ficheiros alterados, decisões visuais, comandos de validação e limitações conhecidas.
