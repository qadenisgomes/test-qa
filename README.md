Relatório de Testes

Teste 1 - UI Test

No primeiro teste de UI, foi configurado um esquema para receber a URL e suas informações. No entanto, não foi possível testar 
diretamente em uma interface, pois não havia uma pronta para uso. O teste foi realizado com base na URL fornecida.
Observação: Relatórios são gerados a cada execução do teste, fornecendo detalhes sobre as interações realizadas.

--------------------------------------------------------------------------------------------------------------------------------------------

Teste 2 - Testes da API com Jest

Foram realizados testes da API usando o Jest. Todos os testes passaram com sucesso, conforme o esperado.
Resultados:
GET: Retorna lista de usuários — Passou
POST: Retorna erro 400 ao enviar requisição inválida — Passou
Simulação de erro 500: Simula falha na API — Passou
O teste foi executado em 1.15s, e todos os 3 testes passaram com sucesso.
Observação: Relatórios são gerados a cada execução do teste, fornecendo detalhes sobre a execução das requisições e os resultados obtidos.

---------------------------------------------------------------------------------------------------------------------------------------------

Teste 3 - Performance Test com K6

Neste teste, foi realizada uma simulação de 100 usuários virtuais (VUs) para avaliar o desempenho da API. A maioria das requisições teve sucesso,
mas alguns tempos de resposta superaram os 500ms estabelecidos.
Resultados:
Status da resposta: 100% de sucesso
Tempo de resposta abaixo de 500ms: 99% das requisições tiveram sucesso, mas 7 falharam.
O teste foi executado em 31 segundos, com 2796 iterações completas, e 100 usuários virtuais simultâneos.

--------------------------------------------------------------------------------------------------------------------------------------------

Observação Importante:

Para executar os Testes 2 e 3, será necessário ter o Node.js instalado no seu sistema. Siga as instruções abaixo para instalar o Node.js:
Baixe e instale o Node.js aqui.
Após a instalação, execute o seguinte comando para instalar as dependências do projeto: "npm install"

Para rodar os testes, execute:
Para o Teste 2 (Testes da API com Jest): "npx jest"

Para o Teste 3 (Teste de Performance com K6):
Execute o script de performance conforme configurado: k6 run "arquivo"

-----------------------------------------------------------------------------------------------------------------------------------------------

Conclusão:

Teste 1: A configuração foi realizada com sucesso, mas sem uma interface para testes.
Teste 2: A API está funcionando conforme o esperado, com todos os testes passando. Relatórios são gerados a cada execução, detalhando as requisições e respostas.
Teste 3: A carga de 100 usuários foi bem administrada, mas houve alguns tempos de resposta superiores a 500ms, o que pode indicar a necessidade de otimização na performance.

Desde já agradeço a oportunidade!

Atenciosamente,

Denis Gomes.

