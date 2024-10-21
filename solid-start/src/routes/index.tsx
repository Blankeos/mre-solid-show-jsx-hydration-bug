import { JSX, Show, VoidProps } from "solid-js";

function RenderWhenTitle(props: VoidProps<{ title: JSX.Element }>) {
  return (
    <div>
      <Show when={props.title}>
        <div>{props.title}</div>
      </Show>
    </div>
  );
}
export default function Home() {
  return (
    <main>
      <RenderWhenTitle title={<div>TITLE is AWESOME</div>} />
    </main>
  );
}
