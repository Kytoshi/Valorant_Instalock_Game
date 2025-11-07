import { words } from "./words";

function getRandomIndex(arr: string[]): number {
  return Math.floor(Math.random() * arr.length);
}

export function getRandomWord(): string {
  return words[getRandomIndex(words)];
}

export function getFarewellText(agent: string): string {
  const options: string[] = [
    `Farewell, ${agent}`,
    `Adios, ${agent}`,
    `R.I.P., ${agent}`,
    `We'll miss you, ${agent}`,
    `Oh no, not ${agent}!`,
    `${agent} bites the dust`,
    `Gone but not forgotten, ${agent}`,
    `The end of ${agent} as we know it`,
    `Off into the sunset, ${agent}`,
    `${agent}, it's been real`,
    `${agent}, your watch has ended`,
    `${agent} has left the building`,
  ];

  return options[getRandomIndex(options)];
}
