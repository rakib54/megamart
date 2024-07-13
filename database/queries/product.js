import { productModel } from "@/models/product-model";
import { dbConnect } from "@/service/mongo";
import { replaceMongoIdWithArray, replaceMongoIdWithObject } from "@/utils/db-utils";

export const getProducts = async (category, sort, min, max, size) => {
  await dbConnect();
  let products;
  try {
    products = await productModel.find().lean();

    // filter by category
    if (category) {
      const categoryToMatch = category.split("|");

      products = products.filter((product) => {
        return categoryToMatch.includes(product.category);
      })
    }
    // sorting 
    if (sort) {
      products = await sortProductsByPreference(products, sort);
    }

    if (min && max) {
      products = products.filter((product) => {
        const productPriceAfterDiscount = product.price - (product.price * product.discount / 100);
        return productPriceAfterDiscount >= min && productPriceAfterDiscount <= max;
      })
    }

    if (size) {
      products = products.filter((product) => {
        return product.size === size;
      })
    }

    return replaceMongoIdWithArray(products);
  } catch (error) {
    throw new Error(error.message);
  }
}

export const sortProductsByPreference = (products, sortType) => {
  let sortProducts;
  if (sortType === 'ltoh') {
    return products.sort((a, b) => a.price - b.price);
  }
  else if (sortType === 'htol') {  // descending
    return products.sort((a, b) => b.price - a.price);

  }
  else if (sortType === 'new') {
    return products.sort((a, b) => new Date(a.arrivalDate) - new Date(b.arrivalDate));
  }

  return products;
}

export const getLatestProducts = async () => {
  await dbConnect();
  try {
    const products = await productModel.find().lean();

    const newProducts = products.sort((a, b) => {
      return new Date(b.arrivalDate) - new Date(a.arrivalDate); // descending order by date
    }).slice(0, 4);

    return replaceMongoIdWithArray(newProducts);
  } catch (error) {
    throw new Error(error.message);
  }
}

export const getProductById = async (id) => {
  await dbConnect();

  try {
    const product = await productModel.findById(id).lean();

    if (!product) {
      return null;
    }

    return replaceMongoIdWithObject(product);

  } catch (error) {
    return null;
  }
}

export const getProductCategory = async () => {
  await dbConnect();

  const CategoryWithCount = await productModel.aggregate([{
    $group: {            // group documents that have the same value
      _id: '$category',  // documents will be grouped by the value of the category field
      count: { $sum: 1 },  // store the total number of documents in each category.
    },
  },
  {
    $project: {       // reshape the documents that pass through it.
      _id: 0,         // exclude _id from the output
      name: '$_id',  // _id in previous stage is category
      count: 1,      // count field should be included as it is from the previous stage
    },
  },
  {
    $sort: {
      name: 1, // 1 for ascending order, -1 for descending order
    },
  },
  ])

  return CategoryWithCount;
}