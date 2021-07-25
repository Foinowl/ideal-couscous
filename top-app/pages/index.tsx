import React from 'react';
import { Button, Htag } from '../components';
import { Layout, withLayout } from '../layout/Layout';

function Home(): JSX.Element{
  return (
		<>
			<Htag tag="h1">Текст</Htag>
			<Button appearance="primary" arrow="right">
				Кнопка
			</Button>
			<Button appearance="ghost" arrow="down">
				Кнопка
			</Button>
		</>
	)
}


export default withLayout(Home)