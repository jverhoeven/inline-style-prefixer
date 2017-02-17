import createPrefixer from './createPrefixer'

import cursor from './plugins/cursor'
import crossFade from './plugins/crossFade'
import filter from './plugins/filter'
import flex from './plugins/flex'
import flexboxOld from './plugins/flexboxOld'
import gradient from './plugins/gradient'
import imageSet from './plugins/imageSet'
import position from './plugins/position'
import sizing from './plugins/sizing'
import transition from './plugins/transition'

const plugins = [
  crossFade,
  cursor,
  filter,
  flexboxOld,
  gradient,
  imageSet,
  position,
  sizing,
  transition,
  flex
]

import prefixAll from '../static'
import { prefixMap } from './dynamicData'

const Prefixer = createPrefixer(
  {
    prefixMap,
    plugins
  },
  prefixAll
)
export default Prefixer
