import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 100, // 100 usuários simultâneos
  duration: '30s', // Teste de carga por 30 segundos
};

export default function () {
  let res = http.get('https://jsonplaceholder.typicode.com/users');

  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time is below 500ms': (r) => r.timings.duration < 500,
  });

  sleep(1); // Simula um tempo de espera entre requisições
}
