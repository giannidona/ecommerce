export default function LoginPage() {
  return (
    <div className="flex items-center justify-center">
      <h1>Login</h1>
      <div className="bg-black">
        <form action="">
          <div>
            <div>
              <label htmlFor="username">Username</label>
            </div>
            <div>
              <input type="text" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
