const Card = ({ children }) => {
  const style = {
    background: "lightgray",
    padding: "0.5rem",
    margin: "0.5rem",
    borderRadius: "0.5rem",
  };
  // console.log(children);
  // return <div style={style}>{children}</div>;
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">{children}</div>
      </div>
      <br />
    </>
  );
};

export default Card;
