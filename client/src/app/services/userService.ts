import {LoginModel} from "../models/loginModel";
import agent from "../api";
import commonService from "./commonService";

const login = async (creds: LoginModel) => {
    try {
        const token = await agent.Users.login(creds);
        commonService.setToken(token);
        // Let user play the game
        // Close modal
    } catch (error) {
        throw error;
    }
}

const userService = {
    login
}

export default userService;