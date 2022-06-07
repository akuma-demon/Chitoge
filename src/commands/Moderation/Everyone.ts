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
			'https://c.tenor.com/T8UOfSDpvIoAAAPo/chitoge-kirisaki-nisekoi.mp4',
	    		'https://c.tenor.com/7fzwLIcsLLcAAAPo/chitoge-kirisaki-nisekoi.mp4',
	    		'https://c.tenor.com/tK5U6MLVdxQAAAPo/chitoge-kirisaki.mp4',
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
			author: "🎀𝗖𝗛𝗜𝗧𝗢𝗚𝗘🎀",
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
