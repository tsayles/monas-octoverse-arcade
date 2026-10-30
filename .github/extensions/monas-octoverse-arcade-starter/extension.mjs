import { joinSession, createCanvas } from "@github/copilot-sdk/extension";

await joinSession({
  canvases: [
    createCanvas({
      id: "monas-octoverse-arcade-starter",
      displayName: "Mona's Octoverse Arcade",
      description: "Collect commit squares, dodge bugs, and keep the streak alive.",
      open: async () => ({
        title: "Mona's Octoverse Arcade",
        url: new URL("./game.html", import.meta.url).href,
      }),
    }),
  ],
});
