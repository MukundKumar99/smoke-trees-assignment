const Address = require("../models/Address");
const User = require("../models/User");

const getUserAddresses = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findOne({ where: { id: userId } });
    if (user) {
      const userAddresses = await Address.findAll({
        where: { user_id: userId },
      });
      res.status(200);
      res.send({
        userId,
        addresses: userAddresses.map((eachAddress) => {
          return eachAddress.address;
        }),
      });
    } else {
      res.status(404);
      res.send("User does not exists !!!");
    }
  } catch (error) {
    res.status(500);
    res.send(`Error in fetching user address: ${error}`);
  }
};

module.exports = getUserAddresses;
