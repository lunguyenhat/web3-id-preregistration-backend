db.createUser({
  user: "web3idpre",
  pwd: "password",
  roles: [
    {
      role: "dbOwner",
      db: "web3idpre",
    },
  ],
});

db.account.insert({ dummy: "x" });
