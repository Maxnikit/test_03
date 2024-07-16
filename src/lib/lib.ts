import { createAvatar } from "@dicebear/core";
import { lorelei } from "@dicebear/collection";

export function getAvatar(id: number) {
  const avatar = createAvatar(lorelei, {
    seed: id.toString(),
  });

  const svg = avatar.toDataUri();
  return svg;
}
export function makeFirstLetterUppercase(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
