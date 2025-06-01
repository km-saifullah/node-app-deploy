export const helloMessage = async (req, res) => {
  try {
    const message = "Hello World";
    return res
      .status(200)
      .json({ status: true, message: "test message", data: message });
  } catch (error) {
    return res
      .status(400)
      .json({ status: false, message: "server error", data: error.message });
  }
};

