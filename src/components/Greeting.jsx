function Greeting({ name }) {
  return <p>Hello {name || "world"}</p>;
}

export default Greeting;
