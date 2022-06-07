import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from "../../typings";
import { MessageType, Mimetype } from "@adiwajshing/baileys";
import { Sticker, Categories, StickerTypes } from "wa-sticker-formatter";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "everyone",
			description: "Tags all users in group chat",
			aliases: ["all", "tagall", "ping"],
			category: "moderation",
			usage: `${client.config.prefix}everyone`,
			adminOnly: true,
			baseXp: 20,
		});
	}

	run = async (
		M: ISimplifiedMessage,
		{ joined }: IParsedArgs
	): Promise<void> => {
		const stickers = [
			'https://c.tenor.com/XQXzBqs3utEAAAAC/marin-kitagawa.gif',
	    		'https://c.tenor.com/F-iYHvwyTtkAAAAC/marin-marin-smiling.gif',
	    		'https://c.tenor.com/uCRClnnY4WUAAAAC/my-dress-up-darling-sono-bisque-doll-wa-koi-wo-suru.gif',
	    		'https://c.tenor.com/uDWf9_1YdfgAAAAC/marin-kitagawa-marin.gif',
	    		'https://c.tenor.com/mFX0gzBmX68AAAAC/marin-wink-marin-cool.gif',
		];
		const option = ["--s", "--sticker"];
		const random = stickers[Math.floor(Math.random() * stickers.length)];
		if (!joined)
			return void (await M.reply(
				`*🎀 Group: ${M.groupMetadata?.subject}*\n📢 *Announcer: @${M.sender.jid.split("@")[0]}*\n🧧 *Tags: HIDDEN*`,
				undefined,
				undefined,
				M.groupMetadata?.participants.map((user) => user.jid)
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
			).catch((reason: any) =>
				M.reply(`✖️ An error occurred, Reason: ${reason}`)
			));
		const selected = joined.trim();
		if (!option.includes(selected))
			return void (await M.reply(
			`*🎀 Group: ${M.groupMetadata?.subject}*\n📢 *Announcer: @${M.sender.jid.split("@")[0]}*\n🧧 *Tags: HIDDEN*`,
				undefined,
				undefined,
				M.groupMetadata?.participants.map((user) => user.jid)
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
			).catch((reason: any) =>
				M.reply(`✖️ An error occurred, Reason: ${reason}`)
			));
		const sticker: any = await new Sticker(random, {
			pack: "READ QUOTED MESSAGE",
			author: "🎀𝓜𝓐𝓡𝓘𝓝𝓔🎀",
			quality: 90,
			type: "full",
			categories: ["🎊"],
		});
		return void (await M.reply(
			await sticker.build(),
			MessageType.sticker,
			Mimetype.webp,
			M.groupMetadata?.participants.map((user) => user.jid)
		));
	};
}
