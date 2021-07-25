import { SidebarProps } from './SiderBar.props'
import styles from "./Sidebar.module.css"
import cn from "classnames"

export const SideBar = ({ ...props }: SidebarProps): JSX.Element => {
	return (
		<div {...props}>
			SideBar
		</div>
	)
}
