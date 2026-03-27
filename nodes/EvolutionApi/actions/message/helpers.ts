import { IDataObject } from 'n8n-workflow';
import { IMessageOptions } from '../../types/api';

export function buildMessageOptions(options: IDataObject): IMessageOptions {
	const messageOptions: IMessageOptions = {};

	if (options.mentionsEveryOne !== undefined) {
		messageOptions.mentionsEveryOne = options.mentionsEveryOne as boolean;
	}

	if (Array.isArray(options.mentioned) && options.mentioned.length > 0) {
		messageOptions.mentioned = options.mentioned as string[];
	}

	if (options.quoted && typeof options.quoted === 'object') {
		const quoted = options.quoted as IDataObject;
		const key = quoted.key as IDataObject | undefined;
		const message = quoted.message as IDataObject | undefined;
		const quotedBody: NonNullable<IMessageOptions['quoted']> = {};

		if (key?.id) {
			quotedBody.key = {
				id: key.id as string,
			};
		}

		if (message?.conversation) {
			quotedBody.message = {
				conversation: message.conversation as string,
			};
		}

		if (Object.keys(quotedBody).length > 0) {
			messageOptions.quoted = quotedBody;
		}
	}

	return messageOptions;
}
