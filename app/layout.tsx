import type { Metadata } from 'next';
import '@/src/app/styles/config/reset.styles.css';
import './globals.css';
import { ReactNode } from 'react';
import { LayoutProvider } from '@/src/app/layout/ui';
import { DM_Sans } from 'next/font/google';

const inter = DM_Sans({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'trainning next project',
	description: 'trainning next skills',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>): ReactNode {
	return (
		<html lang="en">
			<body className={inter.className}>
				<LayoutProvider>{children}</LayoutProvider>
			</body>
		</html>
	);
}
