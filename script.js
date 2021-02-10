import http from 'k6/http';
import { sleep } from 'k6';
import {Rate} from 'k6/metrics';

let errorRate = new Rate('errorRate');

export let options = {
  vus: 1000,
  duration: '30s'
};

export default function(){
  let random = Math.floor(Math.random() * 10000000);
  let res = http.get(`http://localhost:8080/api/product/${random}`);
  // sleep(1);
  errorRate.add(res.status >= 400);
}

/*
Data for GET ONE:
data_received..............: 20 MB  638 kB/s
     data_sent..................: 3.5 MB 116 kB/s
     errorRate..................: 0.00%  ✓ 0      ✗ 36056
     http_req_blocked...........: avg=782.57µs min=0s       med=3µs      max=228.11ms p(90)=6µs   p(95)=17µs
     http_req_connecting........: avg=688.72µs min=0s       med=0s       max=228.06ms p(90)=0s    p(95)=0s
     http_req_duration..........: avg=837.65ms min=0s       med=754.55ms max=4.8s     p(90)=1.01s p(95)=1.27s
     http_req_receiving.........: avg=56.29µs  min=0s       med=52µs     max=5.37ms   p(90)=81µs  p(95)=94µs
     http_req_sending...........: avg=68.3µs   min=0s       med=15µs     max=17.85ms  p(90)=28µs  p(95)=42µs
     http_req_tls_handshaking...: avg=0s       min=0s       med=0s       max=0s       p(90)=0s    p(95)=0s
     http_req_waiting...........: avg=837.53ms min=0s       med=754.46ms max=4.79s    p(90)=1.01s p(95)=1.26s
     http_reqs..................: 36056  1178.471224/s
     iteration_duration.........: avg=839.02ms min=342.56µs med=754.75ms max=4.87s    p(90)=1.01s p(95)=1.27s
     iterations.................: 36056  1178.471224/s
     vus........................: 1000   min=1000 max=1000
     vus_max....................: 1000   min=1000 max=1000
Data #2
      data_received..............: 12 MB  382 kB/s
     data_sent..................: 2.1 MB 69 kB/s
     errorRate..................: 0.00%  ✓ 0      ✗ 21836
     http_req_blocked...........: avg=7.1ms   min=0s       med=4µs   max=466.87ms p(90)=9µs   p(95)=342.25µs
     http_req_connecting........: avg=7.08ms  min=0s       med=0s    max=466.84ms p(90)=0s    p(95)=278.25µs
     http_req_duration..........: avg=1.39s   min=0s       med=1.34s max=2.82s    p(90)=1.94s p(95)=2.22s
     http_req_receiving.........: avg=70.45µs min=0s       med=66µs  max=1.13ms   p(90)=99µs  p(95)=115µs
     http_req_sending...........: avg=54.17µs min=0s       med=20µs  max=12.57ms  p(90)=36µs  p(95)=65µs
     http_req_tls_handshaking...: avg=0s      min=0s       med=0s    max=0s       p(90)=0s    p(95)=0s
     http_req_waiting...........: avg=1.39s   min=0s       med=1.34s max=2.82s    p(90)=1.94s p(95)=2.22s
     http_reqs..................: 21836  697.884836/s
     iteration_duration.........: avg=1.39s   min=312.68µs med=1.34s max=2.82s    p(90)=1.98s p(95)=2.26s
     iterations.................: 21836  697.884836/s
     vus........................: 227    min=227  max=1000
     vus_max....................: 1000   min=1000 max=1000

Data for GET ALL:
 data_received..............: 6.1 MB 102 kB/s
     data_sent..................: 135 kB 2.2 kB/s
     errorRate..................: 0.00%  ✓ 0      ✗ 587
     http_req_blocked...........: avg=56.7ms   min=0s     med=4.93ms   max=448.12ms p(90)=236.05ms p(95)=446.66ms
     http_req_connecting........: avg=54.57ms  min=0s     med=4.88ms   max=448.04ms p(90)=236.02ms p(95)=446.49ms
     http_req_duration..........: avg=1.05s    min=0s     med=978.98ms max=4.88s    p(90)=1.72s    p(95)=1.72s
     http_req_receiving.........: avg=0s       min=0s     med=0s       max=0s       p(90)=0s       p(95)=0s
     http_req_sending...........: avg=564.16µs min=0s     med=61µs     max=5.35ms   p(90)=1.82ms   p(95)=3.03ms
     http_req_tls_handshaking...: avg=0s       min=0s     med=0s       max=0s       p(90)=0s       p(95)=0s
     http_req_waiting...........: avg=1.05s    min=0s     med=978.75ms max=4.87s    p(90)=1.71s    p(95)=1.72s
     http_reqs..................: 587    9.744127/s
     iteration_duration.........: avg=1.14s    min=1.74ms med=1.42s    max=4.88s    p(90)=1.78s    p(95)=1.8s
     iterations.................: 587    9.744127/s
     vus........................: 1000   min=1000 max=1000
     vus_max....................: 1000   min=1000 max=1000

Data #2
 data_received..............: 0 B    0 B/s
     data_sent..................: 172 kB 2.9 kB/s
     errorRate..................: 0.00%  ✓ 0      ✗ 997
     http_req_blocked...........: avg=127.73ms min=0s      med=20.79ms max=7.02s   p(90)=580.49ms p(95)=586.57ms
     http_req_connecting........: avg=127.33ms min=0s      med=20.73ms max=7.02s   p(90)=579.87ms p(95)=583.2ms
     http_req_duration..........: avg=3.33s    min=0s      med=1.71s   max=8.56s   p(90)=8.56s    p(95)=8.56s
     http_req_receiving.........: avg=0s       min=0s      med=0s      max=0s      p(90)=0s       p(95)=0s
     http_req_sending...........: avg=1.51ms   min=0s      med=1.15ms  max=13.55ms p(90)=3.78ms   p(95)=4.47ms
     http_req_tls_handshaking...: avg=0s       min=0s      med=0s      max=0s      p(90)=0s       p(95)=0s
     http_req_waiting...........: avg=3.33s    min=0s      med=1.7s    max=8.56s   p(90)=8.55s    p(95)=8.55s
     http_reqs..................: 997    16.589271/s
     iteration_duration.........: avg=4.26s    min=29.66ms med=1.75s   max=27.73s  p(90)=8.59s    p(95)=8.6s
     iterations.................: 997    16.589271/s
     vus........................: 1000   min=1000 max=1000
     vus_max....................: 1000   min=1000 max=1000

*/




// Starting out
// export default function () {
//   http.get('http://test.k6.io');
//   sleep(1);
// }