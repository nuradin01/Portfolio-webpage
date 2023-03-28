import { ITool } from '@components/Tool';

import { ReactComponent as bashLogo } from '@assets/logos/bash.svg';
import { ReactComponent as phpLogo } from '@assets/logos/php.svg';
import { ReactComponent as cSharpLogo } from '@assets/logos/cSharp.svg';
import { ReactComponent as sqliteLog } from '@assets/logos/sqlite.svg';
import { ReactComponent as javaLogo } from '@assets/logos/java.svg';
import { ReactComponent as androidLogo } from '@assets/logos/android.svg';
import { ReactComponent as mssqlLogo } from '@assets/logos/mssql.svg';
import { ReactComponent as bootstrapLogo } from '@assets/logos/bootstrap.svg';
import { ReactComponent as dotnetcoreLogo } from '@assets/logos/dotnetcore.svg';
import { ReactComponent as kotlinLogo } from '@assets/logos/kotlin.svg';
import { ReactComponent as xdLogo } from '@assets/logos/adobeXD.svg';
import { ReactComponent as postmanLogo } from '@assets/logos/postman.svg';
import { ReactComponent as concourseLogo } from '@assets/logos/concourse.svg';
import { ReactComponent as cssLogo } from '@assets/logos/css.svg';
import { ReactComponent as dockerLogo } from '@assets/logos/docker.svg';
import { ReactComponent as expressLogo } from '@assets/logos/express.svg';
import { ReactComponent as elasticLogo } from '@assets/logos/elastic.svg';
import { ReactComponent as firebaseLogo } from '@assets/logos/firebase.svg';
import { ReactComponent as goLogo } from '@assets/logos/go.svg';
import { ReactComponent as gitLogo } from '@assets/logos/git.svg';
import { ReactComponent as grafanaLogo } from '@assets/logos/grafana.svg';
import { ReactComponent as htmlLogo } from '@assets/logos/html.svg';
import { ReactComponent as jsLogo } from '@assets/logos/javascript.svg';
import { ReactComponent as kubernetesLogo } from '@assets/logos/kubernetes.svg';
import { ReactComponent as mongoDbLogo } from '@assets/logos/mongodb.svg';
import { ReactComponent as netlifyLogo } from '@assets/logos/netlify.svg';
import { ReactComponent as mysqlLogo } from '@assets/logos/mysql.svg';
import { ReactComponent as nodeLogo } from '@assets/logos/node.svg';
import { ReactComponent as postgresqlLogo } from '@assets/logos/postgresql.svg';
import { ReactComponent as prometheusLogo } from '@assets/logos/prometheus.svg';
import { ReactComponent as protobufLogo } from '@assets/logos/protobuf.svg';
import { ReactComponent as reactLogo } from '@assets/logos/react.svg';
import { ReactComponent as railsLogo } from '@assets/logos/rails.svg';
import { ReactComponent as redisLogo } from '@assets/logos/redis.svg';
import { ReactComponent as reduxLogo } from '@assets/logos/redux.svg';
import { ReactComponent as rubyLogo } from '@assets/logos/ruby.svg';
import { ReactComponent as sassLogo } from '@assets/logos/sass.svg';
import { ReactComponent as sidekiqLogo } from '@assets/logos/sidekiq.svg';
import { ReactComponent as splunkLogo } from '@assets/logos/splunk.svg';
import { ReactComponent as tailwindLogo } from '@assets/logos/tailwind.svg';
import { ReactComponent as tsLogo } from '@assets/logos/typescript.svg';
import { ReactComponent as webpackLogo } from '@assets/logos/webpack.svg';

interface ISkillCategory {
	title: string;
	skills: ITool[];
}

const SKILLS: ISkillCategory[] = [
	{
		title: 'Backend',
		skills: [
			{ name: 'Php', Logo: phpLogo },
			{ name: 'C#', Logo: cSharpLogo },
			{ name: 'Dotnet', Logo: dotnetcoreLogo },
			{ name: 'Java', Logo: javaLogo },
			{ name: 'Node', Logo: nodeLogo },
			{ name: 'Express', Logo: expressLogo },
		],
	},
	{
		title: 'Frontend',
		skills: [
			{ name: 'TypeScript', Logo: tsLogo },
			{ name: 'JavaScript', Logo: jsLogo },
			{ name: 'React', Logo: reactLogo },
			{ name: 'Redux', Logo: reduxLogo },
			{ name: 'HTML', Logo: htmlLogo },
			{ name: 'CSS', Logo: cssLogo },
			{ name: 'SASS', Logo: sassLogo },
			{ name: 'Bootstrap', Logo: bootstrapLogo },
			{ name: 'Webpack', Logo: webpackLogo },
			{ name: 'Android', Logo: androidLogo },
			{ name: 'Kotlin', Logo: kotlinLogo },
		],
	},
	{
		title: 'Databases',
		skills: [
			{ name: 'MongoDB', Logo: mongoDbLogo },
			{ name: 'MySQL', Logo: mysqlLogo },
			{ name: 'MSSQL', Logo: mssqlLogo },
			{ name: 'Firebase', Logo: firebaseLogo },
			{ name: 'SQLite', Logo: sqliteLog },
		],
	},
	{
		title: 'Tools',
		skills: [
			{ name: 'Git', Logo: gitLogo },
			{ name: 'Postman', Logo: postmanLogo },
			{ name: 'Bash', Logo: bashLogo },
			{ name: 'Netlify', Logo: netlifyLogo },
			{ name: 'Adobe XD', Logo: xdLogo },
		],
	},
];

export default SKILLS;
