import { useState } from 'react';
import Link from 'next/link';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Skeleton from '@mui/material/Skeleton';

import GitHubIcon from '@mui/icons-material/GitHub';
import DownloadIcon from '@mui/icons-material/Download';
import StarsIcon from '@mui/icons-material/Stars';
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';
import CheckIcon from '@mui/icons-material/Check';

import { Else, If, Then } from 'react-if';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { wait } from '../../../lib/funtions/utils';
import useStats from '../../../lib/hooks/stats';

const HomeFooter = () => {
	const [copied, setCopied] = useState(false);
	const [command, setCommand] = useState('yarn add @biscuitland/core');
	const stats = useStats();

	return (
		<div style={{ marginTop: '50px' }}>
			<Stack spacing={2} direction={{ xs: 'column', sm: 'row' }}>
				<Link href={'https://github.com/oasisjs'}>
					<a>
						<Button variant="outlined" size="large" startIcon={<GitHubIcon></GitHubIcon>} fullWidth>
							Github
						</Button>
					</a>
				</Link>
				<CopyToClipboard
					text={command}
					onCopy={async () => {
						setCopied(true);
						await wait(1_000);

						if (command.startsWith('yarn')) setCommand('npm install @biscuitland/core');
						else setCommand('yarn add @biscuitland/core');

						setCopied(false);
					}}
				>
					<Button startIcon={copied ? <CheckIcon></CheckIcon> : <KeyboardCommandKeyIcon></KeyboardCommandKeyIcon>} variant="contained">
						{copied ? 'Command copied' : command}
					</Button>
				</CopyToClipboard>
			</Stack>
			<Stack spacing={2} direction="row" marginTop={3} justifyContent={{ xs: 'center', sm: 'unset' }}>
				<If condition={stats.loading}>
					<Then>
						<Skeleton animation="wave" width={190} height={50} />
					</Then>
					<Else>
						<Chip
							label={stats.loading ? '... downloads' : `${stats.stats.npm.downloads.toLocaleString()} downloads`}
							color="secondary"
							icon={<DownloadIcon></DownloadIcon>}
						/>
					</Else>
				</If>
				<If condition={stats.loading}>
					<Then>
						<Skeleton animation="wave" width={190} height={50} />
					</Then>
					<Else>
						<Chip
							label={stats.loading ? '... Stars on Github' : `${stats.stats.repository.stargazers.toLocaleString()} Stars on Github`}
							color="warning"
							icon={<StarsIcon></StarsIcon>}
						/>
					</Else>
				</If>
			</Stack>
		</div>
	);
};

export default HomeFooter;