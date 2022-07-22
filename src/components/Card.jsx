const Card = ({ children }) => {
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
