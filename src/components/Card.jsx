const Card = ({ children }) => {
  return (
    <>
      <div>
        <div className="px-6 py-4">{children}</div>
      </div>
      <br />
    </>
  );
};

export default Card;
