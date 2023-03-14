import methods from "./methods";
import {warning} from './../../../../utils/responses.js'

const login = async (req, res, next) => {
  try {
    const response = methods.login(req.body);
  } catch (error) {
    warning(error)
  }
};

const signIn = async (req, res, next) => {
  try {
  } catch (error) {
    warning(error)
  }
};

export default {
  signIn,
  login,
};
