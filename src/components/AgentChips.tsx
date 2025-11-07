import { clsx } from "clsx";
import type { JSX } from "react";
import type { Agent } from "../agents";

export type AgentChipsProps = {
  agents: Agent[];
  wrongGuessCount: number;
};

export default function AgentChips({
  agents,
  wrongGuessCount,
}: AgentChipsProps): JSX.Element {
  const AgentElements: JSX.Element[] = agents.map(
    (agent: Agent, index: number): JSX.Element => {
      const isAgentLost: boolean = index < wrongGuessCount;
      const styles: Omit<Agent, "name"> = {
        backgroundColor: agent.backgroundColor,
        color: agent.color,
      };
      const className: string = clsx("chip", isAgentLost && "lost");
      return (
        <span className={className} style={styles} key={agent.name}>
          {agent.name}
        </span>
      );
    }
  );

  return <section className="agent-chips">{AgentElements}</section>;
}
