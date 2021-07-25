import { GetStaticProps } from 'next';
import React from 'react';
import { Button, Htag } from '../components';
import { Layout, withLayout } from '../layout/Layout';
import axios from 'axios'
import { MenuItem } from '../interfaces/menu.interface';

function Home({ menu, firstCategory }: HomeProps): JSX.Element {
	return (
		<>
			<Htag tag="h1">Текст</Htag>
			<Button appearance="primary" arrow="right">
				Кнопка
			</Button>
			<Button appearance="ghost" arrow="down">
				Кнопка
			</Button>
			<ul>
				{menu.map((el) => (
					<li key={el._id.secondCategory}>{el._id.secondCategory}</li>
				))}
			</ul>
		</>
	)
}


export default withLayout(Home)

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0
	const { data: menu } = await axios.post<MenuItem[]>(
		process.env.NEXT_PUBLIC_DOMAIN + "/top-page/find",
		{ firstCategory }
	)
	return {
		props: {
			menu,
			firstCategory,
		},
	}
}

interface HomeProps extends Record<string, unknown>{
	menu: MenuItem[],
	firstCategory: number
}