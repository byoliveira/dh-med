import User from "../models/User";

class UserController {
    async store(request, response) {
        const user = await User.create(request.body);

        return response.json(user)
    }
}

export default new UserController();

