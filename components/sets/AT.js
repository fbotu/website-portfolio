// * COMPONENTS
// import Image from 'next/Image';
// * STYLES

// * CONTENT
// * Anushka Tay
import at1 from '../../public/websites/anushka-tay/image-1anushka-tay.webp'
import at2 from '../../public/websites/anushka-tay/image-2anushka-tay.webp'
import at3 from '../../public/websites/anushka-tay/image-3anushka-tay.webp'

let ATset = new Set();

ATset.add(at1).add(at2).add(at3);

let AT = Array.from(ATset);

export default AT;