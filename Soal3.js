class ShoppingList {
  constructor(items) {
    this.items = items;
  }

  // Tugas 1: Tampilkan semua nama barang
  showItems() {
    console.log("Daftar semua nama barang:");
    this.items.forEach((item) => {
      console.log(item.name);
    });
  }

  // Tugas 2: Filter barang harga di atas 20 ribu
  filterPriceItems() {
    const priceItems = this.items.filter((item) => item.price > 20000);
    console.log("Barang dengan harga di atas 20 ribu:");
    priceItems.forEach((item) => {
      console.log(`${item.name} : Rp ${item.price}`);
    });
    return priceItems;
  }

  // Tugas 3: Hitung total harga semua items
  calculateTotalPrice() {
    const total = this.items.reduce((sum, item) => sum + item.price, 0);
    console.log(`Total harga semua barang: Rp${total}`);
    return total;
  }

  // Tugas 4 : kategory makanan
  filtercategory(category) {
    const filterItems = this.items.filter((item) => item.category === category);
    console.log(`Daftar barang kategori ${category} :`);
    filterItems.forEach((item) => {
      console.log(item.name);
    });
    return filterItems;
  }
}

// Data items
const items = [
  { name: "Pensil", price: 5000, category: "alat tulis" },
  { name: "Buku", price: 15000, category: "alat tulis" },
  { name: "Nasi Kotak", price: 25000, category: "makanan" },
  { name: "Kaos", price: 50000, category: "pakaian" },
  { name: "Roti", price: 10000, category: "makanan" },
];

//instance
const shoppingList = new ShoppingList(items);

console.log("===== TUGAS 1 =====");
shoppingList.showItems();

console.log("\n===== TUGAS 2 =====");
shoppingList.filterPriceItems();

console.log("\n===== TUGAS 3 =====");
shoppingList.calculateTotalPrice();

console.log("\n===== TUGAS 4 =====");
shoppingList.filtercategory("makanan");
