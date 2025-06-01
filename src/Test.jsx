export const UserInfo = ({ user }) => {
  const { name, age, country, books } = user || {};
  return user ? (
    <>
      <h2>{name}</h2>
      <p>Age : {age} years</p>
      <p>Country : {country}</p>
      <h2>books</h2>
      <ul>
        {books.map((book) => (
          <li key={book}>{book}</li>
        ))}
      </ul>
    </>
  ) : (
    <h1>Loading ....</h1>
  );
};

export const LogProps = (Component) => {
  return (props) => {
    return <Component {...props} />;
  };
};

const UserInfoWrappper = LogProps(UserInfo);

export default function App() {
  return (
    <>
      <UserInfoWrappper test="test" b="I am b string" />
    </>
  );
}
