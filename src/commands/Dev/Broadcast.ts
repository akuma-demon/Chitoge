/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { IParsedArgs, ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "broadcast",
			description:
				"Will make a broadcast for groups where the bot is in. Can be used to make announcements.",
			aliases: ["bcast", "announcement", "bc"],
			category: "dev",
			dm: true,
			usage: `${client.config.prefix}bc`,
			modsOnly: true,
			baseXp: 0,
		});
	}

	run = async (
		M: ISimplifiedMessage,
		{ joined }: IParsedArgs
	): Promise<void> => {
		if (!joined)
			return void (await M.reply(`Please provide the Broadcast Message.`));
		const term = joined.trim();
		const gifs = [
			    'https://c.tenor.com/Vf6ZPQU3zMoAAAPo/marin-kitagawa-marin.mp4',
	     		    'https://c.tenor.com/gu0EZJfpXP8AAAPo/marin-kitagawa-my-dress-up-darling.mp4',
	   		    'https://c.tenor.com/LXLRCmwR9KIAAAPo/kitagawa-marin-marin-kitagawa.mp4',
	  		    'https://c.tenor.com/9aXyxmnYW7oAAAPo/my-dress-up-darling-sono-bisque-doll-wa-koi-wo-suru.mp4',
	 		    'https://c.tenor.com/Q7h_Uz-lf0YAAAPo/my-dress-up-darling-sono-bisque-doll-wa-koi-wo-suru.mp4',
			    'https://c.tenor.com/Z75HOpn46VgAAAPo/kitagawa-marin-marin-kitagawa.mp4',
			    'https://c.tenor.com/Y8xTSG60n4cAAAPo/my-dress-up-darling-my-dress-up-darling-gif.mp4',
			    'https://c.tenor.com/XyfPrGSZizsAAAPo/marin-kitagawa-marin.mp4',
		];
		const selected = gifs[Math.floor(Math.random() * gifs.length)];
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const chats: any = this.client.chats
			.all()
			.filter((v) => !v.read_only && !v.archive)
			.map((v) => v.jid)
			.map((jids) => (jids.includes("g.us") ? jids : null))
			.filter((v) => v);
		for (let i = 0; i < chats.length; i++) {
			const text = `*⚡「🎀𝓜𝓐𝓡𝓘𝓝𝓔🎀 BROADCAST」⚡*\n\n${term}\n\n Regards ~ *${M.sender.username}*`;
			this.client.sendMessage(chats[i], { url: selected }, MessageType.video, {
				mimetype: Mimetype.gif,
				caption: `${text}`,
				contextInfo: {
					mentionedJid: M.groupMetadata?.participants.map((user) => user.jid),
				},
			});
		}
		await M.reply(`✅ Broadcast Message sent to *${chats.length} groups*.`);
	};
}
