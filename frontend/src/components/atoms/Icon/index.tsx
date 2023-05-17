import { ReactSVG } from 'react-svg'
import { ICON_DATA_TESTID } from '../../../constants/constant'
export interface IconProps {
  src: string
}

const Icon = (props: IconProps) => {
  const { src } = props
  return <ReactSVG src={src} data-testid={ICON_DATA_TESTID}/>
}

export default Icon
