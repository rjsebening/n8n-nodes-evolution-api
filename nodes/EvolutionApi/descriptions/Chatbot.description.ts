import { INodeProperties } from 'n8n-workflow';

export const chatbotOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['chatbot'],
			},
		},
		options: [
			{
				name: 'Find Chatwoot',
				value: 'findChatwoot',
				description: 'Find Chatwoot configuration',
				action: 'Find chatwoot',
			},
			{
				name: 'Set Chatwoot',
				value: 'setChatwoot',
				description: 'Set Chatwoot configuration',
				action: 'Set chatwoot',
			},
		],
		default: 'findChatwoot',
	},
];

export const chatbotFields: INodeProperties[] = [
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
				resource: ['chatbot'],
			},
		},
		description:
			'Name of the instance. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},

	/* -------------------------------------------------------------------------- */
	/*                                chatbot:setChatwoot                         */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Enabled',
		name: 'enabled',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['chatbot'],
				operation: ['setChatwoot'],
			},
		},
		description: 'Whether the Chatwoot integration is enabled',
	},
	{
		displayName: 'Account ID',
		name: 'accountId',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['chatbot'],
				operation: ['setChatwoot'],
			},
		},
		description: 'Account ID for the Chatwoot instance',
	},
	{
		displayName: 'Token',
		name: 'token',
		type: 'string',
		typeOptions: {
			password: true,
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['chatbot'],
				operation: ['setChatwoot'],
			},
		},
		description: 'Access token for the Chatwoot API',
	},
	{
		displayName: 'URL',
		name: 'url',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['chatbot'],
				operation: ['setChatwoot'],
			},
		},
		description: 'Base URL of the Chatwoot installation',
	},
	{
		displayName: 'Sign Message',
		name: 'signMsg',
		type: 'boolean',
		default: true,
		displayOptions: {
			show: {
				resource: ['chatbot'],
				operation: ['setChatwoot'],
			},
		},
		description: "Whether to sign messages with the agent's name",
	},
	{
		displayName: 'Reopen Conversation',
		name: 'reopenConversation',
		type: 'boolean',
		default: true,
		displayOptions: {
			show: {
				resource: ['chatbot'],
				operation: ['setChatwoot'],
			},
		},
		description: 'Whether to reopen resolved conversations on new messages',
	},
	{
		displayName: 'Conversation Pending',
		name: 'conversationPending',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['chatbot'],
				operation: ['setChatwoot'],
			},
		},
		description: 'Whether to mark new conversations as pending',
	},
	{
		displayName: 'Import Contacts',
		name: 'importContacts',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['chatbot'],
				operation: ['setChatwoot'],
			},
		},
		description: 'Whether to import existing contacts into Chatwoot',
	},
	{
		displayName: 'Import Messages',
		name: 'importMessages',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['chatbot'],
				operation: ['setChatwoot'],
			},
		},
		description: 'Whether to import existing message history',
	},
	{
		displayName: 'Auto Create',
		name: 'autoCreate',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['chatbot'],
				operation: ['setChatwoot'],
			},
		},
		description: "Whether to automatically create an inbox if it doesn't exist",
	},
];
