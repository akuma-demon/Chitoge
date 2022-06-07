/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "chitoge",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}chitoge`,
			baseXp: 2000,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const chitoge =
			"https://c.tenor.com/7fzwLIcsLLcAAAPo/chitoge-kirisaki-nisekoi.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: chitoge },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `*🎀Chitoge🎀*\n\n🎀 *Description: repo is private better luck next time.*\n\n🎀 *insta id: https://www.instagram.com/akuma__24/?hl=en* \n\n 🎀\n`,
			}
		);
	};
}
