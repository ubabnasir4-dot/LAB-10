
export async function getServerSideProps() {
  try {
    const res = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );

    if (!res.ok) {
      throw new Error("Failed to fetch joke");
    }

    const joke = await res.json();

    return {
      props: { joke }
    };
  } catch (error) {
    return {
      props: {
        joke: {
          setup: "Could not load the joke.",
          punchline: "Check your internet connection and try again."
        }
      }
    };
  }
}

function BasicSSRPage({ joke }) {
  return (
    <div>
      <h1>Basic SSR Example</h1>
      <p>{joke.setup}</p>
      <p><strong>{joke.punchline}</strong></p>
    </div>
  );
}

export default BasicSSRPage;


