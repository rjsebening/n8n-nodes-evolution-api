import { INodeProperties } from 'n8n-workflow';

export const messageOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['message'],
			},
		},
		options: [
			{
				name: 'Send Audio',
				value: 'sendWhatsAppAudio',
				description: 'Send a narrated audio message',
				action: 'Send an audio message',
			},
			{
				name: 'Send Buttons',
				value: 'sendButtons',
				description: 'Send a button message',
				action: 'Send buttons',
			},
			{
				name: 'Send Contact',
				value: 'sendContact',
				description: 'Send a contact message',
				action: 'Send a contact',
			},
			{
				name: 'Send List',
				value: 'sendList',
				description: 'Send a list message',
				action: 'Send a list',
			},
			{
				name: 'Send Location',
				value: 'sendLocation',
				description: 'Send a location',
				action: 'Send a location',
			},
			{
				name: 'Send Media',
				value: 'sendMedia',
				description: 'Send media (image, video, document)',
				action: 'Send media',
			},
			{
				name: 'Send Poll',
				value: 'sendPoll',
				description: 'Send a poll message',
				action: 'Send a poll',
			},
			{
				name: 'Send PTV (Video Note)',
				value: 'sendPtv',
				description: 'Send a video note',
				action: 'Send ptv',
			},
			{
				name: 'Send Reaction',
				value: 'sendReaction',
				description: 'React to a message',
				action: 'Send a reaction',
			},
			{
				name: 'Send Status',
				value: 'sendStatus',
				description: 'Send a status update',
				action: 'Send status',
			},
			{
				name: 'Send Sticker',
				value: 'sendSticker',
				description: 'Send a sticker',
				action: 'Send a sticker',
			},
			{
				name: 'Send Text',
				value: 'sendText',
				description: 'Send a text message',
				action: 'Send a text message',
			},
		],
		default: 'sendText',
	},
];

export const messageFields: INodeProperties[] = [
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
				resource: ['message'],
			},
		},
		description:
			'Name of the instance to send the message from. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},
	{
		displayName: 'Phone Number',
		name: 'number',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: [
					'sendText',
					'sendMedia',
					'sendWhatsAppAudio',
					'sendLocation',
					'sendSticker',
					'sendPtv',
					'sendContact',
					'sendPoll',
					'sendList',
					'sendButtons',
				],
			},
		},
		description: 'Phone number to send the message to (e.g. 5511999999999)',
	},

	/* -------------------------------------------------------------------------- */
	/*                                message:sendText                            */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Text',
		name: 'text',
		type: 'string',
		required: true,
		default: '',
		typeOptions: {
			rows: 5,
		},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendText'],
			},
		},
		description: 'Text message to be sent',
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendText'],
			},
		},
		options: [
			{
				displayName: 'Delay (Ms)',
				name: 'delay',
				type: 'number',
				default: 1200,
				description: 'Delay in milliseconds before sending the message',
			},
			{
				displayName: 'Link Preview',
				name: 'linkPreview',
				type: 'boolean',
				default: true,
				description: 'Whether to generate a preview for links in the message',
			},
		],
	},

	/* -------------------------------------------------------------------------- */
	/*                                message:sendMedia                           */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Media Type',
		name: 'mediatype',
		type: 'options',
		options: [
			{ name: 'Image', value: 'image' },
			{ name: 'Video', value: 'video' },
			{ name: 'Document', value: 'document' },
		],
		default: 'image',
		required: true,
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendMedia'],
			},
		},
		description: 'Type of media file being sent',
	},
	{
		displayName: 'Media URL',
		name: 'media',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendMedia'],
			},
		},
		description: 'Public URL or Base64 encoded string of the media file',
	},
	{
		displayName: 'Mime Type',
		name: 'mimetype',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendMedia'],
			},
		},
		description: 'Mime type of the file (e.g. application/pdf). Optional but recommended for documents.',
	},
	{
		displayName: 'Caption',
		name: 'caption',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendMedia'],
			},
		},
		description: 'Text caption to accompany the media',
	},
	{
		displayName: 'File Name',
		name: 'fileName',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendMedia'],
			},
		},
		description: 'Name of the file to be sent',
	},

	/* -------------------------------------------------------------------------- */
	/*                                message:sendWhatsAppAudio                   */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Audio URL',
		name: 'audio',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendWhatsAppAudio'],
			},
		},
		description: 'Public URL or Base64 encoded string of the audio file',
	},

	/* -------------------------------------------------------------------------- */
	/*                                message:sendSticker                         */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Sticker URL',
		name: 'sticker',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendSticker'],
			},
		},
		description: 'Public URL or Base64 encoded string of the sticker image',
	},

	/* -------------------------------------------------------------------------- */
	/*                                message:sendLocation                        */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Latitude',
		name: 'latitude',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendLocation'],
			},
		},
		description: 'Latitude coordinate for the location',
	},
	{
		displayName: 'Longitude',
		name: 'longitude',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendLocation'],
			},
		},
		description: 'Longitude coordinate for the location',
	},
	{
		displayName: 'Location Name',
		name: 'name',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendLocation'],
			},
		},
		description: 'Name of the location',
	},
	{
		displayName: 'Address',
		name: 'address',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendLocation'],
			},
		},
		description: 'Address string of the location',
	},

	/* -------------------------------------------------------------------------- */
	/*                                message:sendReaction                        */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Reaction Emoji',
		name: 'reaction',
		type: 'string',
		required: true,
		default: '👍',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendReaction'],
			},
		},
		description: 'Emoji to react with',
	},
	{
		displayName: 'Message ID',
		name: 'reactionMessageId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendReaction'],
			},
		},
		description: 'ID of the message to react to',
	},
	{
		displayName: 'Remote JID',
		name: 'reactionRemoteJid',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendReaction'],
			},
		},
		description: 'JID of the chat (e.g., 5511999999999@s.whatsapp.net)',
	},
	{
		displayName: 'From Me',
		name: 'reactionFromMe',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendReaction'],
			},
		},
		description: 'Whether the message to react to was sent by the instance itself',
	},

	/* -------------------------------------------------------------------------- */
	/*                                message:sendPtv                             */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Video URL',
		name: 'video',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendPtv'],
			},
		},
		description: 'Public URL or Base64 encoded string of the video note',
	},

	/* -------------------------------------------------------------------------- */
	/*                                message:sendStatus                          */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Status Type',
		name: 'type',
		type: 'string',
		required: true,
		default: 'text',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendStatus'],
			},
		},
		description: 'Type of status content to send',
	},
	{
		displayName: 'Content',
		name: 'content',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendStatus'],
			},
		},
		description: 'Text message or URL of the media for the status',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendStatus'],
			},
		},
		options: [
			{
				displayName: 'Caption',
				name: 'caption',
				type: 'string',
				default: '',
				description: 'Caption text for media status updates',
			},
			{
				displayName: 'Background Color',
				name: 'backgroundColor',
				type: 'color',
				default: '',
				description: 'Hex color code for text status background',
			},
			{
				displayName: 'Font',
				name: 'font',
				type: 'number',
				default: 1,
				description: 'Font style identifier for text status',
			},
		],
	},

	/* -------------------------------------------------------------------------- */
	/*                                message:sendContact                         */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Contacts',
		name: 'contact',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		default: {},
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendContact'],
			},
		},
		options: [
			{
				name: 'contactValues',
				displayName: 'Contact',
				values: [
					{
						displayName: 'Full Name',
						name: 'fullName',
						type: 'string',
						default: '',
						description: 'Full name of the contact',
					},
					{
						displayName: 'Phone Number',
						name: 'phoneNumber',
						type: 'string',
						default: '',
						description: 'Phone number of the contact',
					},
					{
						displayName: 'WUID',
						name: 'wuid',
						type: 'string',
						default: '',
						description: 'WhatsApp User ID (WUID) of the contact',
					},
				],
			},
		],
	},

	/* -------------------------------------------------------------------------- */
	/*                                message:sendPoll                            */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Poll Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendPoll'],
			},
		},
		description: 'Question or title of the poll',
	},
	{
		displayName: 'Poll Options',
		name: 'values',
		type: 'json',
		required: true,
		default: '["Question 1", "Question 2"]',
		description:
			'Poll options as an array of strings. Example: ["Question 1", "Question 2"]. You can also map an array from a previous node.',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendPoll'],
			},
		},
	},
	{
		displayName: 'Selectable Count',
		name: 'selectableCount',
		type: 'number',
		default: 1,
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendPoll'],
			},
		},
		description: 'Maximum number of options a user can select',
	},

	/* -------------------------------------------------------------------------- */
	/*                                message:sendList                            */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Title',
		name: 'title',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendList', 'sendButtons'],
			},
		},
		description: 'Main title of the message',
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendList', 'sendButtons'],
			},
		},
		description: 'Detailed description text for the message',
	},
	{
		displayName: 'Button Text',
		name: 'buttonText',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendList'],
			},
		},
		description: 'Text to display on the main button',
	},
	{
		displayName: 'Footer Text',
		name: 'footerText',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendList'],
			},
		},
		description: 'Small footer text displayed at the bottom',
	},
	{
		displayName: 'Footer',
		name: 'footer',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendButtons'],
			},
		},
		description: 'Footer text for the button message',
	},
	{
		displayName: 'Sections (JSON)',
		name: 'sections',
		type: 'json',
		required: true,
		default: '[]',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendList'],
			},
		},
		description:
			'Array of sections containing rows for the list. Example: [{"title":"Section 1","rows":[{"title":"Option 1","description":"Desc 1","rowId":"id1"}]}].',
	},
	{
		displayName: 'Buttons (JSON)',
		name: 'buttons',
		type: 'json',
		required: true,
		default: '[]',
		displayOptions: {
			show: {
				resource: ['message'],
				operation: ['sendButtons'],
			},
		},
		description: 'Array of buttons to be displayed. Example: [{"type":"reply","displayText":"Yes","ID":"yes-btn"}].',
	},
];
