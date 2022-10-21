import Counter from "~/components/Counter";

export default function Home() {
    const css_ = `
  body {
  font-family: Gordita, Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
}

main {
  text-align: center;
  padding: 1em;
  margin: 0 auto;
}

h1 {
  color: #335d92;
  text-transform: uppercase;
  font-size: 4rem;
  font-weight: 100;
  line-height: 1.1;
  margin: 4rem auto;
  max-width: 14rem;
}

p {
  max-width: 14rem;
  margin: 2rem auto;
  line-height: 1.35;
}

@media (min-width: 480px) {
  h1 {
    max-width: none;
  }

  p {
    max-width: none;
  }
}

  `;


  return (
    <main>
      <style>{css_}</style>
      <h1>Hello world!</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://solidjs.com" target="_blank">
          solidjs.com
        </a>{" "}
        to learn how to build Solid apps.
      </p>
    </main>
  );
}
