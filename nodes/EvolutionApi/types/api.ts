// Generated from OpenAPI Components
// Strictly filtered: Instance, Proxy, Settings, Send Message, Call, Chat, Label, Profile Settings, Group, Storage, Get Informations, Metrics

export interface IInstanceCreate {
	instanceName: string;
	token?: string;
	number?: string;
	qrcode?: boolean;
	integration?: 'WHATSAPP-BAILEYS' | 'WHATSAPP-BUSINESS' | 'EVOLUTION';
	rejectCall?: boolean;
	msgCall?: string;
	groupsIgnore?: boolean;
	alwaysOnline?: boolean;
	readMessages?: boolean;
	readStatus?: boolean;
	syncFullHistory?: boolean;
	webhook?: IWebhookConfig;
}

export interface IWebhookConfig {
	url?: string;
	byEvents?: boolean;
	base64?: boolean;
	headers?: Record<string, string>;
	events?: string[];
}

export interface ISetPresence {
	presence: 'available' | 'unavailable' | 'composing' | 'recording' | 'paused';
	delay?: number;
	number?: string;
}

export interface IProxyConfig {
	enabled: boolean;
	host: string;
	port: string;
	protocol: string;
	username?: string;
	password?: string;
}

export interface ISettingsConfig {
	rejectCall?: boolean;
	msgCall?: string;
	groupsIgnore?: boolean;
	alwaysOnline?: boolean;
	readMessages?: boolean;
	syncFullHistory?: boolean;
	readStatus?: boolean;
}

// Message Types
export interface ISendText {
	number: string;
	text: string;
	delay?: number;
	linkPreview?: boolean;
}

export interface ISendMedia {
	number: string;
	mediatype: 'image' | 'video' | 'document';
	media: string; // URL or Base64
	mimetype?: string;
	caption?: string;
	fileName?: string;
}

export interface ISendPtv {
	number: string;
	video: string; // URL or Base64
}

export interface ISendAudio {
	number: string;
	audio: string; // URL or Base64
}

export interface ISendStatus {
	type: string;
	content: string;
	caption?: string;
	backgroundColor?: string;
	font?: number;
	allContacts?: boolean;
	statusJidList?: string[];
}

export interface ISendSticker {
	number: string;
	sticker: string; // URL or Base64
}

export interface ISendLocation {
	number: string;
	latitude: number;
	longitude: number;
	name?: string;
	address?: string;
}

export interface ISendContact {
	number: string;
	contact: Array<{
		fullName: string;
		wuid: string;
		phoneNumber: string;
	}>;
}

export interface ISendReaction {
	key: {
		remoteJid: string;
		fromMe: boolean;
		id: string;
	};
	reaction: string;
}

export interface ISendPoll {
	number: string;
	name: string;
	selectableCount: number;
	values: string[];
}

export interface ISendList {
	number: string;
	title: string;
	description?: string;
	buttonText: string;
	footerText?: string;
	sections: Array<{
		title: string;
		rows: Array<{
			title: string;
			description: string;
			rowId: string;
		}>;
	}>;
}

export interface ISendButton {
	number: string;
	title: string;
	description?: string;
	footer?: string;
	buttons: Array<{
		type: string;
		displayText: string;
		id: string;
	}>;
}

export interface ICallOffer {
	number: string;
	isVideo?: boolean;
	callDuration?: number;
}

// Chat Types
export interface IChatCheckNumbers {
	numbers: string[];
}

export interface IChatArchive {
	chat: string;
	archive: boolean;
	lastMessage?: Record<string, any>;
}

export interface IChatMarkUnread {
	chat: string;
	lastMessage?: Record<string, any>;
}

export interface IChatUpdateBlock {
	number: string;
	status: 'block' | 'unblock';
}

// Label Types
export interface IHandleLabel {
	number: string;
	labelId: string;
	action: 'add' | 'remove';
}

// Profile Types
export interface IProfileFetch {
	number: string;
}

export interface IProfileUpdateName {
	name: string;
}

export interface IProfileUpdateStatus {
	status: string;
}

export interface IProfileUpdatePicture {
	picture: string;
}

export interface IProfileUpdatePrivacy {
	readreceipts?: string;
	profile?: string;
	status?: string;
	online?: string;
	last?: string;
	groupadd?: string;
}

// Group Types
export interface IGroupCreate {
	subject: string;
	description?: string;
	participants: string[];
}

export interface IGroupUpdateParticipant {
	action: 'add' | 'remove' | 'promote' | 'demote';
	participants: string[];
}

// Storage Types
export interface IStorageGetMedia {
	id: string;
	type: string;
	messageId: string;
}

export interface IStorageGetMediaUrl {
	id: string;
}

// Chatbot Types
export interface IChatwootConfig {
	enabled: boolean;
	accountId: string;
	token: string;
	url: string;
	signMsg: boolean;
	reopenConversation: boolean;
	conversationPending: boolean;
	importContacts: boolean;
	importMessages: boolean;
	autoCreate: boolean;
}

// Internal Types for Node Logic
export type EvolutionApiCredentials = {
	baseUrl: string;
	apiKey: string;
};

export type Resource =
	| 'instance'
	| 'message'
	| 'group'
	| 'chat'
	| 'settings'
	| 'proxy'
	| 'call'
	| 'label'
	| 'profile'
	| 'storage'
	| 'getInformations'
	| 'metrics'
	| 'integrations'
	| 'chatbot';

export type Operation =
	// Instance
	| 'create'
	| 'fetchInstances'
	| 'connect'
	| 'restart'
	| 'setPresence'
	| 'connectionState'
	| 'logout'
	| 'delete'
	// Settings
	| 'setSettings'
	| 'findSettings'
	// Proxy
	| 'setProxy'
	| 'findProxy'
	// Message
	| 'sendText'
	| 'sendMedia'
	| 'sendPtv'
	| 'sendWhatsAppAudio'
	| 'sendStatus'
	| 'sendSticker'
	| 'sendLocation'
	| 'sendContact'
	| 'sendReaction'
	| 'sendPoll'
	| 'sendList'
	| 'sendButtons'
	// Call
	| 'offerCall'
	// Chat
	| 'whatsappNumbers'
	| 'markMessageAsRead'
	| 'archiveChat'
	| 'markChatUnread'
	| 'deleteMessageForEveryone'
	| 'fetchProfilePictureUrl'
	| 'getBase64FromMediaMessage'
	| 'updateMessage'
	| 'sendPresence'
	| 'updateBlockStatus'
	| 'findContacts'
	| 'findMessages'
	| 'findStatusMessage'
	| 'findChats'
	// Label
	| 'findLabels'
	| 'handleLabel'
	// Profile
	| 'fetchProfile'
	| 'fetchBusinessProfile'
	| 'updateProfileName'
	| 'updateProfileStatus'
	| 'updateProfilePicture'
	| 'removeProfilePicture'
	| 'fetchPrivacySettings'
	| 'updatePrivacySettings'
	// Group
	| 'create'
	| 'updateGroupPicture'
	| 'updateGroupSubject'
	| 'updateGroupDescription'
	| 'inviteCode'
	| 'revokeInviteCode'
	| 'sendInvite'
	| 'inviteInfo'
	| 'findGroupInfos'
	| 'fetchAllGroups'
	| 'participants'
	| 'updateParticipant'
	| 'updateSetting'
	| 'toggleEphemeral'
	| 'leaveGroup'
	// Storage
	| 'getMedia'
	| 'getMediaUrl'
	// Info & Metrics
	| 'getInformations'
	| 'getMetrics'
	// Integrations
	| 'findNats'
	| 'findPusher'
	| 'findRabbitmq'
	| 'findSqs'
	| 'findWebhook'
	| 'findWebsocket'
	| 'setNats'
	| 'setPusher'
	| 'setRabbitmq'
	| 'setSqs'
	| 'setWebhook'
	| 'setWebsocket'
	// Chatbot
	| 'findChatwoot'
	| 'setChatwoot';
