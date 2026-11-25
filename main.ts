import { mkdirSync, writeFileSync } from "node:fs";

// The single sentence that could have replaced an entire pointless meeting.
// Premise: the decision was already made in the email thread. The meeting
// adds nothing — it is thirty people being paid to re-read a decision
// that is already settled, out loud, together.

// The line is built from its beats in order: the fact (decision already
// made), then the sting (what the meeting actually is now).
const beats: string[] = [
  "We already decided this in the email thread,",
  "so this meeting is just thirty people getting paid to re-read the same decision out loud.",
];

const line = beats.join(" ");

// Self-check the gate the sealed scorer enforces: 1-200 chars, one line.
const length = [...line].length;
if (length < 1 || length > 200 || line.includes("\n") || !/\S/.test(line)) {
  throw new Error(`entry fails gate: ${length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
console.log(`chars: ${length}`);
