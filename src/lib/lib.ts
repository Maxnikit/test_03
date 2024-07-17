import { createAvatar } from "@dicebear/core";
import { lorelei } from "@dicebear/collection";

export function getAvatar(id: number) {
  const avatar = createAvatar(lorelei, {
    seed: id.toString(),
  });

  const svg = avatar.toDataUri();
  return svg;
}
