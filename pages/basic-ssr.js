export async function getServerSideProps() {
    const res = await fetch('https://official-joke-api.appspot.com/random_joke');
    const joke = await res.json();

    return { props: { joke } };
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


  