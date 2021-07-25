import { SidebarProps } from './SiderBar.props'
import styles from "./Sidebar.module.css"
import cn from "classnames"
import { Menu } from "../Menu/Menu"

export const SideBar = ({ ...props }: SidebarProps): JSX.Element => {
	return (
		<div {...props}>
			<Menu />
		</div>
	)
}
