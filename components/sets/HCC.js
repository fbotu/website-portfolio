// * COMPONENTS
// * STYLES

// * CONTENT
// * Health Care Cafe
import hcc1 from '../../public/websites/hcc/image-1hcc.webp'
import hcc2 from '../../public/websites/hcc/image-2hcc.webp'
import hcc3 from '../../public/websites/hcc/image-3hcc.webp'
import hcc4 from '../../public/websites/hcc/image-4hcc.webp'
import hcc5 from '../../public/websites/hcc/image-5hcc.webp'

let HCCset = new Set();

HCCset.add(hcc1).add(hcc2).add(hcc3).add(hcc4).add(hcc5);

let HCC = Array.from(HCCset);

export default HCC;