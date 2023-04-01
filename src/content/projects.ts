import baliilMockup from '@assets/mockups/baliil.png';
import dhiganeMockup from '@assets/mockups/dhigane.png';
import typeTrialMockup from '@assets/mockups/typetrial.png';
import dugsiileMockup from '@assets/mockups/dugsiile.png';

import { ReactComponent as baliilLogo } from '@assets/logos/baliil.svg';
import { ReactComponent as dugsiileLogo } from '@assets/logos/dugsiile.svg';
import { ReactComponent as kotlinLogo } from '@assets/logos/kotlin.svg';
import { ReactComponent as dhiganeLogo } from '@assets/logos/dhigane.svg';

import { ReactComponent as appleLogo } from '@assets/logos/apple.svg';
import { ReactComponent as expressLogo } from '@assets/logos/express.svg';
import { ReactComponent as firebaseLogo } from '@assets/logos/firebase-2.svg';
import { ReactComponent as mongoDbLogo } from '@assets/logos/mongodb.svg';
import { ReactComponent as mssqlLogo } from '@assets/logos/mssql.svg';
import { ReactComponent as dotnetcoreLogo } from '@assets/logos/dotnetcore.svg';
import { ReactComponent as cSharpLogo } from '@assets/logos/cSharp.svg';
import { ReactComponent as nodeLogo } from '@assets/logos/node.svg';
import { ReactComponent as reactLogo } from '@assets/logos/react.svg';
import { ReactComponent as reduxLogo } from '@assets/logos/redux.svg';
import { ReactComponent as androidLogo } from '@assets/logos/android.svg';
import { ReactComponent as tsLogo } from '@assets/logos/typescript2.svg';
import { ReactComponent as jsLogo } from '@assets/logos/javascript2.svg';
import { IProject } from '@components/Project';

const PROJECTS: IProject[] = [
	{
		name: 'Baliil',
		description: `Baliil is an e-commerce website that offers a variety of products for online shoppers. Users can browse through different categories and add items to their cart. Users can pay with Stripe or Paypal and enjoy a secure and convenient shopping experience. The website is built with React, Expressjs, Nodejs, and MongoDB, and uses Docker to run on any operating system. The website is hosted on Render and has a sleek and modern design.`,
		mockup: baliilMockup,
		Logo: baliilLogo,
		tools: [
			{ name: 'Javascript', Logo: jsLogo },
			{ name: 'React', Logo: reactLogo },
			{ name: 'Redux', Logo: reduxLogo },
			{ name: 'Node', Logo: nodeLogo },
			{ name: 'Express', Logo: expressLogo },
			{ name: 'MongoDB', Logo: mongoDbLogo },
		],
		liveUrl: 'https://baliil.com',
		githubUrl: 'https://github.com/nuradin01/baliil',
	},
	{
		name: 'Dugsiile',
		description: `Dugsiile is a native android app that helps teachers manage their schools efficiently. Teachers can create and update student records, track fee payments, generate reports, and send notifications to parents. The app is built with Kotlin and Android SDK, and uses Git and GitHub for version control. The app communicates with a Node.js API using Retrofit, and stores data locally using Room Database. The app also supports dark mode to enhance the user experience in different lighting conditions.`,
		mockup: dugsiileMockup,
		Logo: dugsiileLogo,
		tools: [
			{ name: 'kotlin', Logo: kotlinLogo },
			{ name: 'Android', Logo: androidLogo },
			{ name: 'Node', Logo: nodeLogo },
			{ name: 'Express', Logo: expressLogo },
			{ name: 'MongoDB', Logo: mongoDbLogo },
		],
		liveUrl: 'https://play.google.com/store/apps/details?id=com.dugsiile',
		githubUrl: 'https://github.com/nuradin01/dugsiilemobileapp',
	},
	{
		name: 'Dhigane Bookstore',
		description: `Dhigane Bookstore is a web app that allows users to browse and buy books online. Users can add books to their cart and pay with Stripe or Paypal. Users can also sign up with their email or use their Google or Facebook accounts to log in. The web app is built with Asp .net core MVC and Entity framework, and uses Asp .net Identity and OAuth for user management. The web app is hosted on Azure cloud and uses MSSQL as the database.`,
		mockup: dhiganeMockup,
		Logo: dhiganeLogo,
		tools: [
			{ name: 'C#', Logo: cSharpLogo },
			{ name: 'DotNet', Logo: dotnetcoreLogo },
			{ name: 'MSSQL', Logo: mssqlLogo },
		],
		liveUrl: 'https://dhigane.azurewebsites.net/',
		githubUrl: 'https://github.com/nuradin01/dhigane',
	},
];

export default PROJECTS;
