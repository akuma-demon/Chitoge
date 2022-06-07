/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "animeboy",
			description: "sends pics of anime boy",
			category: "idols",
                        aliases: ["ab","at"],
			usage: `${client.config.prefix}ab`,
			baseXp: 10,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const images = [
			"https://wallpapercave.com/w/wp6139612.jpg",
   		        "https://wallpapercave.com/w/wp8879925.jpg",
          		"https://wallpapercave.com/w/wp6139586.jpg",
          		"https://wallpapercave.com/wp/wp6139586.jpg",
         	        "https://wallpapercave.com/wp/wp10436946.jpg",
          		"https://wallpapercave.com/wp/wp6640451.jpg",
          		"https://wallpapercave.com/wp/wp8879964.jpg",
          		"https://wallpapercave.com/wp/wp7220516.jpg",
	  		"https://wallpapercave.com/wp/wp5188178.jpg",
	  		"https://wallpapercave.com/wp/wp6194382.jpg",
                        "https://wallpapercave.com/wp/wp3644391.jpg",
                        "https://wallpapercave.com/wp/wp6554446.jpg",
                        "https://wallpapercave.com/uwp/uwp2018213.jpeg",
                        "https://wallpapercave.com/uwp/uwp2018208.jpeg",
                        "https://wallpapercave.com/wp/wp7323647.jpg",
		];
		const selected = images[Math.floor(Math.random() * images.length)];
		const text = `💖(here)💖\n\n`;
			this.client.sendMessage( M.from, { url: selected }, MessageType.image, {
				caption: `${text}`,
			}
		);
	};
}
