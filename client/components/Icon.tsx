import { FC } from 'react'
import * as Icons from '@heroicons/react/24/solid'

const Icon: FC<{ icon: string; style?: string }> = (props) => {
  const { ...Icon } = Icons
  //@ts-ignore
  const HeroIcon: JSX.Element = Icon[props.icon] ?? 'div'
  return (
    <div>
      {/* @ts-ignore */}
      <HeroIcon className={`w-6 h-6` + ` ${props.style} `}></HeroIcon>
    </div>
  )
}
export default Icon
