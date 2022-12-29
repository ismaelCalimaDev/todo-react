import useFetch from "../hooks/useFetch";

function Jokes() {
    const {data: jokes} = useFetch('https://official-joke-api.appspot.com/jokes/ten');
    return(
    <div>
        {jokes && <div className="mt-6">
            {jokes.map((joke) => {
                return (
                    <div className="my-4">
                        <p className="font-bold">{joke.setup}</p>
                        <p>{joke.punchline}</p>
                    </div>)
            })}
        </div>}
    </div>);
}

export default Jokes;
