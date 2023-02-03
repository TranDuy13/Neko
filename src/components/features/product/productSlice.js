import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./productService";

const initialState = {
  product: null,
  typeProduct: null,
  listProduct: null,
  listTypeProduct: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};
export const createProduct = createAsyncThunk(
  "product/createProduct",
  async (data, thunkAPI) => {
    try {
      return await productService.createProduct(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const createTypeProduct = createAsyncThunk(
  "product/createType",
  async (data, thunkAPI) => {
    try {
      return await productService.createTypeProduct(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const getTypeProductById = createAsyncThunk(
  "product/getTypeProductById",
  async (data, thunkAPI) => {
    try {
      return await productService.getTypeProductById(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateProduct = createAsyncThunk(
  "product/update",
  async (data, thunkAPI) => {
    try {
      return await productService.updateProduct(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const updateTypeProduct = createAsyncThunk(
  "product/updateTypeProduct",
  async (data, thunkAPI) => {
    try {
      return await productService.updateTypeProduct(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const deleteProduct = createAsyncThunk(
  "product/delete",
  async (data, thunkAPI) => {
    try {
      return await productService.deleteProduct(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const getAllProduct = createAsyncThunk(
  "product/getAllProduct",
  async (_, thunkAPI) => {
    try {
      return await productService.getAllProduct();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const getProduct = createAsyncThunk(
  "product/getProduct",
  async (data, thunkAPI) => {
    try {
      return await productService.getProduct(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const getTypeProduct = createAsyncThunk(
  "product/getTypeProduct",
  async (_, thunkAPI) => {
    try {
      return await productService.getTypeProduct();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const search_product = createAsyncThunk(
  "product/search",
  async (data, thunkAPI) => {
    try {
      return await productService.search_product(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createProduct.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
        state.product = action.payload;
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.product = null;
      })
      .addCase(createTypeProduct.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(createTypeProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
        state.listTypeProduct = action.payload;
      })
      .addCase(createTypeProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.listTypeProduct = null;
      })
      .addCase(updateProduct.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError= false;
        state.message = action.payload;
        state.product = action.payload;
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess= false
        state.message = action.payload;
        state.product = null;
      })
      .addCase(updateTypeProduct.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(updateTypeProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
        state.typeProduct = action.payload;
      })
      .addCase(updateTypeProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.typeProduct = null;
      })
      .addCase(deleteProduct.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
        state.product = null;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.product = null;
      })
      .addCase(getAllProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProduct.fulfilled, (state, action) => {
        state.message = action.payload;
        state.listProduct = action.payload;
      })
      .addCase(getAllProduct.rejected, (state, action) => {
        state.message = action.payload;
        state.listProduct = null;
      })
      .addCase(getProduct.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.message = action.payload;
        state.product = action.payload;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.message = action.payload;
        state.product = null;
      })
      .addCase(getTypeProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTypeProduct.fulfilled, (state, action) => {
        state.message = action.payload;
        state.listTypeProduct = action.payload;
      })
      .addCase(getTypeProduct.rejected, (state, action) => {
        state.message = action.payload;
        state.listProduct = null;
      })
      .addCase(search_product.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(search_product.fulfilled, (state, action) => {
        state.message = action.payload;
        state.listProduct = action.payload;
      })
      .addCase(search_product.rejected, (state, action) => {
        state.message = action.payload;
        state.listProduct = null;
      })
      .addCase(getTypeProductById.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(getTypeProductById.fulfilled, (state, action) => {
        state.message = action.payload;
        state.typeProduct = action.payload;
      })
      .addCase(getTypeProductById.rejected, (state, action) => {
        state.message = action.payload;
        state.typeProduct = null;

      });
  },
});

export const { reset } = productSlice.actions;
export default productSlice.reducer;
