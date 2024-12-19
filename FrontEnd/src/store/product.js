import { create } from "zustand"; // used to create global state so easy to use around your app

// we create this state so we can use it in any part on our applications
export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }), //set the products state witht the set method
  createProduct: async (newProduct) => {
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });
      const data = await res.json();
      if (!data.success) return { success: false, message: data.message };
      set((state) => ({
        products: [...state.products, data.data],
      }));
      return { success: true, message: "Product Created Successfully" };
    } catch (error) {
      return { success: false, message: "Network error, please try again." };
    }
  },

  fetchProducts: async () => {
    try {
      const res = await fetch("/api/products");
      if (!res.ok) {
        throw new Error(`Failed to fetch products: ${res.status}`);
      }
      const data = await res.json();
      set({ products: data.data });
    } catch (error) {
      console.error("Error fetching products:", error);
      set({ products: [] }); // Clear products on failure
    }
  },

  // delete a product
  deleteProduct: async (pid) => {
    const res = await fetch(`/api/products/${pid}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };
    set((state) => ({
      products: state.products.filter((product) => product._id !== pid), // remove the product from the state
    }));
    return { success: true, message: "Product Deleted Successfully" };
  },
  // update a Product
  updateProductFun: async (pid, updatedProduct) => {
    const res = await fetch(`/api/products/${pid}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProduct),
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };
    //  update ui immediately without needing a refresh
    set((state) => ({
      products: state.products.map((product) =>
        product._id === pid ? data.data : product
      ),
    }));
    return { success: true, message: data.message };
  },
})); // ({})=> return to object basic js knowladge

// this is the same to using the useState => const [state,setState] = useState([])
