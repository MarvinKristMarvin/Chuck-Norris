import "./Button.scss";

type props = {
  fetchJoke: () => Promise<void>;
};

function Button({ fetchJoke }: props) {
  return (
    <button type="button" className="button" onClick={fetchJoke}>
      NEW JOKE
    </button>
  );
}

export default Button;
