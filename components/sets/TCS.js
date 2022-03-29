// * COMPONENTS
// * STYLES

// * CONTENT
// * The Crimson Stitchery
import tcs1 from '../../public/websites/tcs/image-1tcs.webp'
import tcs2 from '../../public/websites/tcs/image-2tcs.webp'
import tcs3 from '../../public/websites/tcs/image-3tcs.webp'
import tcs4 from '../../public/websites/tcs/image-4tcs.webp'
import tcs5 from '../../public/websites/tcs/image-5tcs.webp'
// import tcs6 from '../../public/websites/tcs/image-6tcs.webp'
import tcs7 from '../../public/websites/tcs/image-7tcs.webp'
import tcs8 from '../../public/websites/tcs/image-9tcs.webp'
import tcs9 from '../../public/websites/tcs/image-10tcs.webp'
// import tcs10 from '../../public/websites/tcs/image-11tcs.webp'

let TCSset = new Set();

TCSset.add(tcs1).add(tcs2).add(tcs3).add(tcs4).add(tcs5).add(tcs7).add(tcs8).add(tcs9);
// .add(tcs6)
// .add(tcs10)
let TCS = Array.from(TCSset);

export default TCS;