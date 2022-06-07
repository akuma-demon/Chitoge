/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "blackpink",
			description: "sends pics of anime boy",
			category: "idols",
                        aliases: ["blp"],
			usage: `${client.config.prefix}blackpink`,
			baseXp: 10,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const images = [
    "https://wallpapercave.com/w/wp8808959.jpg",
    "https://wallpapercave.com/w/wp10472453.jpg",
    "https://wallpapercave.com/w/wp10502274.jpg",
    "https://wallpapercave.com/w/wp7850224.jpg",
    "https://wallpapercave.com/w/wp10468512.jpg",
    "https://wallpapercave.com/w/wp9832405.jpg",
    "https://wallpapercave.com/w/wp10468545.jpg",
    "https://wallpapercave.com/w/wp2510248.jpg",
    "https://wallpapercave.com/w/wp4675248.jpg",
    "https://wallpapercave.com/w/wp2397161.jpg",
    "https://wallpapercave.com/w/wp4645342.jpg",
    "https://wallpapercave.com/w/wp4645352.jpg",
    "https://wallpapercave.com/w/wp9993140.jpg",
    "https://wallpapercave.com/w/wp9993152.jpg",
    "https://wallpapercave.com/w/wp4671788.jpg",
    "https://wallpapercave.com/wp/wp4104529.jpg",
    "https://wallpapercave.com/wp/wp10472490.jpg",
    "https://wallpapercave.com/wp/wp9796957.jpg",
    "https://wallpapercave.com/wp/wp3027130.png",
		];
		const selected = images[Math.floor(Math.random() * images.length)];
		const text = `💖(uWu)💖\n\n`;
			this.client.sendMessage( M.from, { url: selected }, MessageType.image, {
				caption: `${text}`,
			}
		);
	};
}
