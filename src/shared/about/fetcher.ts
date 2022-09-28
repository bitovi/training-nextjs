import type { About } from "./interfaces";

import { about, location, team } from "./fixtures";

export const getAboutUsContent = async (): Promise<About> => {
  return {
    about,
    location,
    team,
  };
};
