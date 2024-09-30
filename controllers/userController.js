const sequelize = require("../config/db");
const Address = require("../models/Address");
const User = require("../models/User");

const getAllUsers = async (req, res) => {
  try {
    const usersList = await User.findAll();
    res.status(200);
    res.send(usersList);
  } catch (error) {
    res.status(500);
    res.send(`Error in fetching user: ${error}`);
  }
};

const registerNewUser = async (req, res) => {
  const { username, address } = req.body;
  try {
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      const existingAddress = await Address.findOne({
        where: { user_id: existingUser.id, address },
      });
      if (existingAddress) {
        res.status(500);
        res.send("This address already exists for the same user");
      } else {
        const newAddress = await Address.create({
          address,
          user_id: existingUser.id,
        });
        res.status(200);
        res.send("Address saved");
      }
    } else {
      const newUserData = await sequelize.transaction(async (t) => {
        const newUser = await User.create({ username }, { transaction: t });

        const newAddress = await Address.create(
          {
            address,
            user_id: newUser.id,
          },
          { transaction: t }
        );
        return { newUser, newAddress };
      });
      res.status(201);
      res.send({
        newUserData: {
          userId: newUserData.newUser.id,
          username: newUserData.newUser.username,
          address: newUserData.newAddress.address,
        },
      });
    }
  } catch (error) {
    res.status(500);
    res.send(`Failed to create ${error}`);
  }
};

module.exports = { getAllUsers, registerNewUser };
