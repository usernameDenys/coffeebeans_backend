//function for add product
export const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      brew_type,
      roast_level,
      sizes,
      bestseller,
    } = req.body;

    // Check if images are availabe in req.files then store image in image variable
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    console.log(
      name,
      description,
      price,
      brew_type,
      roast_level,
      sizes,
      bestseller
    );

    res.status(201).json({
      success: true,
      message: "Product added successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//function for removing product
export const removeProduct = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//function for list product
export const getListProducts = async (req, res) => {};

//function for single product info
export const getSingleProduct = async (req, res) => {};
