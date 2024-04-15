export default function MyPage({ user }) {
  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.name}!</h1>
        </div>
      ) : (
        <>
          <p>You are not logged in.</p>
          <button>Login</button>
        </>
      )}
    </div>
  );
}
