import User from "../models/user.model.js"

export const profile = async (req, res) => {

    const userFound = await User.findById(req.user.id.id);  // En caso de que `id` sea un objeto


    if(!userFound)  return res.status(400).json({message: "User not found"})

    return res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
        createdAT: userFound.createdAt,
        updatedAt: userFound.updatedAt,
    })
}