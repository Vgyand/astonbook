import { FC } from 'react'

import Logo from './Logo'
import style from './Navigation.module.scss'

const Navigation: FC = () => {
	return (
		<div className={style.navigation}>
			<Logo />
			menu
		</div>
	)
}

export default Navigation
