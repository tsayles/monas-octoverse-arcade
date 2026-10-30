import { createCanvas, joinSession } from "@github/copilot-sdk/extension";

const gameCanvas = createCanvas({
  id: "monas-octoverse-arcade-starter",
  displayName: "Mona's Octoverse Arcade starter",
  description: "Guide Mona to collect commits and dodge bugs.",
  open: async () => ({
    title: "Mona's Octoverse Arcade",
    url: new URL("./game.html", import.meta.url).toString(),
  }),
});

await joinSession({
  canvases: [gameCanvas],
});
