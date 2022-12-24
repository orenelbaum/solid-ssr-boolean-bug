import { createSignal } from 'solid-js';
import './Counter.css';

export default function Home() {
  const alwaysFalse = () => false;

  console.log(
    <p data-value={!!alwaysFalse()}>data-value attribute should be false</p>
  );

  return (
    <>
      <h4>
        Inspect data-value on these paragraphs while refreshing the page...
      </h4>
      <p data-value={alwaysFalse()}>
        Server correctly renders data-value="false"
      </p>
      <p data-value={!!alwaysFalse()}>
        Server incorrectly renders data-value="true" - then updates client-side
      </p>
    </>
  );
}
