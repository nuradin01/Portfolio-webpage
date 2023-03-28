import React from 'react';
import { ISection } from '@content/sections';

import { ReactComponent as GitHubLogo } from '@assets/logos/github.svg';
import { ReactComponent as LinkedInLogo } from '@assets/logos/linkedin.svg';

interface FooterProps {
	sections: ISection[];
}

const SOCIAL_LINKS = [
	{
		name: 'GitHub',
		url: 'https://github.com/nuradin01',
		Icon: GitHubLogo,
	},
	{
		name: 'LinkedIn',
		url: 'https://www.linkedin.com/in/nuradin/',
		Icon: LinkedInLogo,
	},
];

const Footer = React.forwardRef<HTMLElement, FooterProps>(({ sections }, ref) => {
	return (
		<footer
			className='pb-36 sm:pb-8 pt-8 px-16 sm:px-40 md:px-60 xl:px-80 grid grid-cols-2 gap-8 items-center bg-gray-1 dark:bg-gray-5'
			ref={ref}
		>
			<ul className='flex flex-col sm:flex-row'>
				{sections.map(({ title, ref }) => (
					<li
						key={title}
						className='mr-10 hover:text-primary text-2xl uppercase transition-colors cursor-pointer'
						onClick={() => ref.current?.scrollIntoView({ behavior: 'smooth' })}
					>
						<span>{title}</span>
					</li>
				))}
			</ul>
			<div className='flex items-center justify-end'>
				{SOCIAL_LINKS.map(({ name, url, Icon }) => (
					<a
						href={url}
						key={name}
						aria-label={name}
						rel='noopener'
						target='_blank'
						className='flex-center text-gray-4 hover:text-primary fill-current transition-colors mr-4'
					>
						<Icon className='w-12 h-12' />
					</a>
				))}
			</div>
			<small className='text-gray-4 text-2xl'>Nuradin Ismail Yusuf, 2023</small>
		</footer>
	);
});

export default Footer;
