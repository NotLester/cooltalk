import Head from 'next/head';
import 'src/styles/globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';

const plusJakartaSans = Plus_Jakarta_Sans({
	subsets: ['latin'],
});

export default function App({ Component, pageProps }) {
	return (
    <main className={plusJakartaSans.className}>
      <Head>
        <title>CoolTalk</title>
        <link rel='icon' type='imag/x-icon' href='/favicon.ico?v=1'/>
      </Head>
			<Component {...pageProps} />
		</main>
	);
}
