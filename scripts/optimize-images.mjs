import sharp from 'sharp';
import {mkdir} from 'node:fs/promises';
await mkdir('assets',{recursive:true});
for(const width of [400,800]){
 const info=await sharp('profile.png').resize(width).webp({quality:84}).toFile(`assets/profile-${width}.webp`);
 console.log(`${width}px: ${info.size} bytes`);
}
