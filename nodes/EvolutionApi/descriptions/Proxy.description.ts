import { INodeProperties } from 'n8n-workflow';

export const proxyOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['proxy'],
			},
		},
		options: [
			{
				name: 'Find Proxy',
				value: 'findProxy',
				description: 'Find proxy configuration',
				action: 'Find proxy',
			},
			{
				name: 'Set Proxy',
				value: 'setProxy',
				description: 'Set proxy configuration',
				action: 'Set proxy',
			},
		],
		default: 'findProxy',
	},
];

export const proxyFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                                 Common Fields                              */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Instance Name or ID',
		name: 'instanceName',
		type: 'options',
		required: true,
		default: '',
		typeOptions: {
			loadOptionsMethod: 'getInstances',
		},
		displayOptions: {
			show: {
				resource: ['proxy'],
			},
		},
		description:
			'Name of the instance. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},

	/* -------------------------------------------------------------------------- */
	/*                                proxy:set                                   */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Enabled',
		name: 'enabled',
		type: 'boolean',
		required: true,
		default: true,
		displayOptions: {
			show: {
				resource: ['proxy'],
				operation: ['setProxy'],
			},
		},
		description: 'Whether the proxy configuration is active',
	},
	{
		displayName: 'Host',
		name: 'host',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['proxy'],
				operation: ['setProxy'],
			},
		},
		description: 'Hostname or IP address of the proxy server',
	},
	{
		displayName: 'Port',
		name: 'port',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['proxy'],
				operation: ['setProxy'],
			},
		},
		description: 'Port number of the proxy server',
	},
	{
		displayName: 'Protocol',
		name: 'protocol',
		type: 'string',
		required: true,
		default: 'http',
		displayOptions: {
			show: {
				resource: ['proxy'],
				operation: ['setProxy'],
			},
		},
		description: 'Network protocol used by the proxy',
	},
	{
		displayName: 'Username',
		name: 'username',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['proxy'],
				operation: ['setProxy'],
			},
		},
		description: 'Username for proxy authentication',
	},
	{
		displayName: 'Password',
		name: 'password',
		type: 'string',
		typeOptions: {
			password: true,
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['proxy'],
				operation: ['setProxy'],
			},
		},
		description: 'Password for proxy authentication',
	},
];
