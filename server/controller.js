module.exports = {
    addUser: (req, res) => {
      const db = req.app.get("db");
      const { username, password } = req.body;
     const user =  db.register_user([username, password]).then(response => {
      //  req.session.user = {
      //    email: user.email,
      //    profile_pic:user.profile_pic,
      //    id: user.id,
      //    username: user.username
      //  };
        return res.status(200).json(response);
        // console.log(response)
      }).catch(err => {
        res.status(500).send({ errorMessage: "Something went wrong" });
        console.log(err);
      });
    },
    getUser: (req, res) => {
      const db = req.app.get("db");
      const { username } = req.body;
      // console.log(req.body)
      db.login_user(username).then(response => res.status(200).json(response[0]))
      .catch(err => {
        res.status(500).send({ errorMessage: "Something went wrong" });
        console.log(err);
      });
    }
  }