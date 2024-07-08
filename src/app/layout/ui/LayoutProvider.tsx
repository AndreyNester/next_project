import { ReactNode } from 'react';
import styles from './LayoutProvider.module.css';
import { ILayoutProvider } from './types';

export const LayoutProvider = ({ children, ...props }: ILayoutProvider): ReactNode => {
	return (
		<div className={styles.wrapper} {...props}>
			<header className={styles.header}>header</header>
			<main className={styles.main}>{children}</main>
			<footer className={styles.footer}>footer</footer>
		</div>
	);
};
