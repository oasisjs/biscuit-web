import '../styles/globals.css';
import 'animate.css/animate.min.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';

import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NextNProgress from 'nextjs-progressbar';

import createEmotionCache from '../lib/common/createEmotionCache';
import Layout from '../components/Layout/Layout';
import Theme from '../lib/common/theme';
import { Box } from '@mui/material';

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }: CustomAppProps) {
	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
				<meta
					name="description"
					content="Biscuit is primarily inspired by Discord.js and Discordeno but it does not include a cache layer by default, we believe that you should not make software that does things it is not supposed to do."
				/>
				<meta name="application-name" content="@biscuitland/core" />
				<meta name="og:site_name" content="npm i @biscuitland/core" />
				<meta name="og:url" content="https://www.biscuitjs.com" />
				<meta name="og:title" content="biscuitjs | Discord Bot Framework" />
				<meta name="og:type" content="website" />
				<meta name="og:image" content="https://www.biscuitjs.com/og_background.webp" />
				<meta
					name="og:description"
					content="Biscuit is primarily inspired by Discord.js and Discordeno but it does not include a cache layer by default, we believe that you should not make software that does things it is not supposed to do."
				/>
			</Head>
			<ThemeProvider theme={Theme}>
				<CssBaseline />
				<Layout>
					<NextNProgress color={Theme.palette.primary.main}></NextNProgress>
					<Box minHeight="100vh">
						<Component {...pageProps} />
					</Box>
				</Layout>
			</ThemeProvider>
		</CacheProvider>
	);
}

export default MyApp;

interface CustomAppProps extends AppProps {
	emotionCache?: EmotionCache;
}
