const errorHandler = async (error) => {
  try {
    if (error.response.status == 409) {
      return { status: error.response.status, message: error.response.data.message };
    } else if (error.status == 404) {
      return { status: error.response.status, message: error.response.data.message };
    }
  } catch (error) {
    console.error(error);
  }
};

export default errorHandler;
