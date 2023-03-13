function success(res, typeMessage, code, data = null) {
  let message = "";
  switch (typeMessage) {
    case "FETCH":
      message = "Data fetched successfully";
      break;
    case "UPDATE":
      message = "Data updated successfully";
      break;
    case "CREATE":
      message = "Data created successfully";
      break;
    case "DELETE":
      message = "Data deleted successfully";
      break;
    default:
      message = typeMessage;
      break;
  }
  let jsonData = {
    data,
    message,
  };
  return res.status(code).code(jsonData);
}

function warning(res, message, code, data = null) {
    let json = {}
    json.data = data
    json.message = message
    return res.status(code).json(json)
}

export default {
  success,
  warning,
};
