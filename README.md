# Paulin Auto Center

Site institucional estático em português, pronto para publicar a pasta `dist` na Vercel. Sem dependências de build ou backend. HTML, CSS e JavaScript nativos.

## Conteúdo confirmado

Nome, categoria oficina automotiva, contato +55 61 8429-5779 e horário 08h–18h extraídos dos prints fornecidos. O telefone foi preservado com os oito dígitos locais apresentados, sem completar número por suposição. Links usam `556184295779`; a existência da conta WhatsApp não foi testada com envio de mensagem.

Cidade, endereço, dias de funcionamento, preços, portfólio e disponibilidade de serviços específicos não foram fornecidos. O endereço fica sob consulta, por autorização do usuário para usar placeholders e prosseguir sem perguntas. Não há mapa com localização inventada. Substituir a seção de localização por endereço confirmado e iframe Google Maps quando houver esse dado. O horário não implica dias da semana. Serviços e Militec-1 são apresentados para consulta; não publicamos alegações de desempenho, dosagens ou promoções sem validação.

## Design e imagens

Aplicadas as skills locais aroe-sites e design-taste-frontend. Direção sorteada: quiet-instrument, seed 2068390496, Clash Grotesk, paleta da marca preta/vermelha. Ideia: a conversa sobre cuidado do carro se transforma numa ficha do veículo que monta uma solicitação real no WhatsApp. Hero fotográfica Aroe prevalece sobre a composição do sorteio. About e contact foram redesenhados pelo fluxo Taste para não depender de retrato ou história não fornecidos. FAQ de leitura contínua, serviços em texto e galeria com identificação explícita das imagens de banco.

Fotos locais com fontes, autores e licença em [dist/assets/credits.html](dist/assets/credits.html). As referências externas Aroe Arquitetura e Elegance Pisos estavam indisponíveis na consulta; o print local da hero foi examinado. Fonte servida pela API oficial Fontshare, com fallback Arial. Movimento por crossfade de fotos e entradas suaves, desativado por prefers-reduced-motion.

## Publicação

Importar o repositório na Vercel com framework Other e output directory `dist`; não requer comando de build. `vercel.json` já define a saída. Não publicar `.aroe-crm.json`, `.taste-skill`, credenciais ou arquivos de ambiente. Arquivos de desenvolvimento e CRM estão ignorados.

## Comportamento

Menu móvel com Escape, links internos, seleção de assunto a partir dos serviços, ficha com modelo/ano obrigatório e mensagem codificada para WhatsApp. Sem armazenamento de formulário, cookies ou análise. Envio efetivo depende da confirmação do visitante no WhatsApp. Com JavaScript desativado, os canais de contato direto continuam utilizáveis.

## Validação da entrega

Lint Taste sem falhas ou avisos. Inspeção real em Chrome a 1440, 768 e 390px, com título em duas linhas e nenhuma falha; dois avisos justificados na crítica local: itálico permitido pela referência Aroe e uso de fotos animadas em vez de vídeo. Todas as capturas foram examinadas e os problemas de proporção das fotografias e alinhamento foram corrigidos. Testes adicionais a 360px, sem overflow; menu, Escape, links, carregamento das fotos/fonte, formulário obrigatório, atalho de serviço, codificação da mensagem e redução de movimento passaram. Nenhum erro de console nos testes.

## Estado do envio

A pasta foi recebida com Git inicializado, sem commits e sem remoto. Em 22/10/2026, a consulta SSH ao destino `LeandroPivovar/paulin-auto-center-13077db647` retornou `Repository not found`. O conector disponível não oferece criação de repositórios, e não há sessão autenticada utilizável no navegador ou credencial HTTPS para criá-lo. Commit local preparado; push depende de o repositório ser criado ou de um remoto existente ser disponibilizado. Não há deploy Vercel confirmado.
