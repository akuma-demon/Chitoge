/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "bts",
			description: "sends pics of lumine",
			category: "idols",
			aliases : ["bts"],
			usage: `${client.config.prefix}bts`,
			baseXp: 10,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const images = [
    "https://wallpapercave.com/wp/wp9207693.jpg",
    "https://wallpapercave.com/wp/wp3730062.jpg",
    "https://wallpapercave.com/wp/wp10455472.jpg",
    "https://wallpapercave.com/wp/wp4549800.png",
    "https://wallpapercave.com/wp/wp8014813.jpg",
    "https://wallpapercave.com/wp/wp10455530.jpg",
    "https://wallpapercave.com/wp/wp10455562.jpg",
    "https://wallpapercave.com/wp/wp8289440.jpg",
    "https://wallpapercave.com/wp/wp8289447.jpg",
    "https://wallpapercave.com/wp/wp3819815.jpg",
    "https://wallpapercave.com/wp/wp4364068.jpg",
    "https://wallpapercave.com/wp/wp8741216.jpg",
    "https://wallpapercave.com/wp/wp8741330.jpg",
    "https://wallpapercave.com/wp/wp4339969.jpg",
    "https://wallpapercave.com/wp/wp5643737.jpg",
    "https://wallpapercave.com/wp/wp7974456.jpg",
    "https://wallpapercave.com/wp/wp7712431.jpg",
    "https://wallpapercave.com/wp/wp5016072.jpg",
    "https://wallpapercave.com/wp/wp5157519.jpg",
    "https://wallpapercave.com/wp/wp5157551.jpg",
    "https://wallpapercave.com/wp/wp5157543.jpg",
    "https://wallpapercave.com/wp/wp8495265.png",
    "https://wallpapercave.com/wp/wp4889423.jpg",
    "https://wallpapercave.com/uwp/uwp1794162.jpeg",
    "https://wallpapercave.com/wp/wp5016696.jpg",
		];
		const selected = images[Math.floor(Math.random() * images.length)];
		const text = `(control your smirk)\n\n`;
			this.client.sendMessage( M.from, { url: selected }, MessageType.image, {
				caption: `${text}`,
			}
		);
	};
}
