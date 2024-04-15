const SignupPage = () => {
  return (
    <div className="flex justify-around">
      <form
        className="flex flex-col gap-3 w-1/2 bg-secondary rounded-lg mt-20"
        method="post"
      >
        <h3 id="card">Sign up</h3>
        <label>Username: </label>
        <input
          id="username"
          placeholder="Chochko123"
          name="username"
          type="text"
          required={true}
        />
        <label>Email: </label>
        <input
          id="email"
          name="email"
          placeholder="krum.uwu69@mail.com"
          type="email"
          required={true}
        />
        <label>Birthday:</label>
        <input
          type="date"
          min="03/13/1700"
          max="03/12/2024"
          id="birthday"
          name="birthday"
          required={true}
        />
        <label>Password: </label>
        <input
          id="password"
          placeholder="pasword..."
          type="password"
          name="password"
          required={true}
        />
        <label>Confirm password: </label>
        <input
          id="confirm password"
          type="password"
          placeholder="same password..."
          name="Confirm password"
          required={true}
        />
        <button>
          <input type="submit" value="Sign up" />
        </button>
        <p>Have a profile?</p>
        <a href="/Login">Log in</a>
      </form>
    </div>
  );
};

export default SignupPage;
