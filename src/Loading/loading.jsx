// eslint-disable-next-line react/prop-types
const Loading = ({ theme }) => {
  return (
    <div className="d-flex justify-content-center m-auto">
      <div className={`loading spinner-border text-${theme || "sucess"}`}></div>
    </div>
  );
};
export default Loading;

