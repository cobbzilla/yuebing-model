import { MediaProfileType } from "../type/model/MediaProfileType.js";

export const PROFILE_SORT_PRIORITY = (p1: MediaProfileType, p2: MediaProfileType) => {
  return (p1.priority ?? 0) - (p2.priority ?? 0);
};
