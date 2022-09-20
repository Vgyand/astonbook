import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import logo from '@/assets/images/logo.png'

const Logo: FC = () => {
	return (
		<Link href="/">
			<a className="px-layout mb-10 block">
				<Image
					src={logo}
					width={54}
					height={54}
					alt={'Logo'}
					draggable={false}
				/>{' '}
				<span className="text-white text-3xl">AstonBook</span>
			</a>
		</Link>
	)
}

export default Logo
