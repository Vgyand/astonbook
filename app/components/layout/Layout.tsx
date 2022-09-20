import { FC } from 'react'

import style from './Layout.module.scss'
import Navigation from './Navigation/Navigation'

interface ILayout {
	children?: React.ReactNode
}

const Layout: FC<ILayout> = ({ children }) => {
	return (
		<div className={style.layout}>
			<Navigation />
			<div className={style.center}>{children}</div>
		</div>
	)
}

export default Layout
