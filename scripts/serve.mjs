import http from 'node:http';
import {readFile} from 'node:fs/promises';
import path from 'node:path';
const root=process.cwd();
http.createServer(async(req,res)=>{try{let p=decodeURIComponent(new URL(req.url,'http://localhost').pathname); if(p.endsWith('/'))p+='index.html'; const f=path.resolve(root,'.'+p); if(!f.startsWith(root+path.sep))throw Error();const data=await readFile(f);res.setHeader('Content-Type',({'.html':'text/html; charset=utf-8','.css':'text/css','.webp':'image/webp','.png':'image/png','.svg':'image/svg+xml','.js':'text/javascript'})[path.extname(f)]||'text/plain');res.end(data);}catch{res.statusCode=404;res.end('Not found');}}).listen(4173,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:4173'));
