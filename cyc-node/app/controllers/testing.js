exports.changeUserPassword =  (req,res) => {
    Account.update({
        where: { username: req.body.username },
      })
      res.send({
        message: "Account password was changed successfully."
    })
    .catch((err) => {
        res.status(500).send({
          message: "Error updating Account password with username=" + username,
        });
      });
  };