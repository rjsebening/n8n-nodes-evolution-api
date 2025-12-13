import { INodeProperties } from 'n8n-workflow';

export const profileOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['profile'],
			},
		},
		options: [
			{
				name: 'Fetch Business Profile',
				value: 'fetchBusinessProfile',
				description: 'Fetch business profile information',
				action: 'Fetch business profile',
			},
			{
				name: 'Fetch Privacy Settings',
				value: 'fetchPrivacySettings',
				action: 'Fetch privacy settings',
			},
			{
				name: 'Fetch Profile',
				value: 'fetchProfile',
				description: 'Fetch profile information',
				action: 'Fetch profile',
			},
			{
				name: 'Remove Profile Picture',
				value: 'removeProfilePicture',
				description: 'Remove the profile picture',
				action: 'Remove profile picture',
			},
			{
				name: 'Update Privacy Settings',
				value: 'updatePrivacySettings',
				action: 'Update privacy settings',
			},
			{
				name: 'Update Profile Name',
				value: 'updateProfileName',
				description: 'Update the profile name',
				action: 'Update profile name',
			},
			{
				name: 'Update Profile Picture',
				value: 'updateProfilePicture',
				description: 'Update the profile picture',
				action: 'Update profile picture',
			},
			{
				name: 'Update Profile Status',
				value: 'updateProfileStatus',
				description: 'Update the profile status',
				action: 'Update profile status',
			},
		],
		default: 'fetchProfile',
	},
];

export const profileFields: INodeProperties[] = [
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
				resource: ['profile'],
			},
		},
		description:
			'Name of the instance. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},

	/* -------------------------------------------------------------------------- */
	/*                                profile:fetch/fetchBusiness                 */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Number',
		name: 'number',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['profile'],
				operation: ['fetchProfile', 'fetchBusinessProfile'],
			},
		},
		description: 'Phone number to fetch the profile or business profile for',
	},

	/* -------------------------------------------------------------------------- */
	/*                                profile:updateName                          */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['profile'],
				operation: ['updateProfileName'],
			},
		},
		description: 'New display name for the profile',
	},

	/* -------------------------------------------------------------------------- */
	/*                                profile:updateStatus                        */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Status',
		name: 'status',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['profile'],
				operation: ['updateProfileStatus'],
			},
		},
		description: 'New status message (About) for the profile',
	},

	/* -------------------------------------------------------------------------- */
	/*                                profile:updatePicture                       */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Picture (URL or Base64)',
		name: 'picture',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['profile'],
				operation: ['updateProfilePicture'],
			},
		},
		description: 'URL or Base64 string of the new profile picture',
	},

	/* -------------------------------------------------------------------------- */
	/*                                profile:updatePrivacySettings               */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Read Receipts',
		name: 'readreceipts',
		type: 'options',
		options: [
			{ name: 'All', value: 'all' },
			{ name: 'None', value: 'none' },
		],
		default: 'all',
		displayOptions: {
			show: {
				resource: ['profile'],
				operation: ['updatePrivacySettings'],
			},
		},
		description: 'Privacy setting for read receipts',
	},
	{
		displayName: 'Profile Photo',
		name: 'profile',
		type: 'options',
		options: [
			{ name: 'All', value: 'all' },
			{ name: 'Contacts', value: 'contacts' },
			{ name: 'Contact Blacklist', value: 'contact_blacklist' },
			{ name: 'None', value: 'none' },
		],
		default: 'all',
		displayOptions: {
			show: {
				resource: ['profile'],
				operation: ['updatePrivacySettings'],
			},
		},
		description: 'Privacy setting for profile photo visibility',
	},
	{
		displayName: 'Status',
		name: 'status',
		type: 'options',
		options: [
			{ name: 'All', value: 'all' },
			{ name: 'Contacts', value: 'contacts' },
			{ name: 'Contact Blacklist', value: 'contact_blacklist' },
			{ name: 'None', value: 'none' },
		],
		default: 'all',
		displayOptions: {
			show: {
				resource: ['profile'],
				operation: ['updatePrivacySettings'],
			},
		},
		description: 'Privacy setting for status visibility',
	},
	{
		displayName: 'Online',
		name: 'online',
		type: 'options',
		options: [
			{ name: 'All', value: 'all' },
			{ name: 'Match Last Seen', value: 'match_last_seen' },
		],
		default: 'all',
		displayOptions: {
			show: {
				resource: ['profile'],
				operation: ['updatePrivacySettings'],
			},
		},
		description: 'Privacy setting for online status visibility',
	},
	{
		displayName: 'Last Seen',
		name: 'last',
		type: 'options',
		options: [
			{ name: 'All', value: 'all' },
			{ name: 'Contacts', value: 'contacts' },
			{ name: 'Contact Blacklist', value: 'contact_blacklist' },
			{ name: 'None', value: 'none' },
		],
		default: 'all',
		displayOptions: {
			show: {
				resource: ['profile'],
				operation: ['updatePrivacySettings'],
			},
		},
		description: 'Privacy setting for last seen visibility',
	},
	{
		displayName: 'Group Add',
		name: 'groupadd',
		type: 'options',
		options: [
			{ name: 'All', value: 'all' },
			{ name: 'Contacts', value: 'contacts' },
			{ name: 'Contact Blacklist', value: 'contact_blacklist' },
			{ name: 'None', value: 'none' },
		],
		default: 'all',
		displayOptions: {
			show: {
				resource: ['profile'],
				operation: ['updatePrivacySettings'],
			},
		},
		description: 'Privacy setting for who can add you to groups',
	},
];
