// 📦 Product Data (7 categories, 20 products each)
const products = [
  // ELECTRONICS
  { id: 1, name:"Smartphone X1", category:"Electronics", price:24999, image:"images/phone.jpg" },
  { id: 2, name: "Laptop Pro 15", category: "Electronics", price: 74999, image: "images/laptop.jpg" },
  { id: 3, name: "Bluetooth Headphones", category: "Electronics", price: 1999, image: "images/headphones.jpg" },
  { id: 4, name: "Smartwatch Fit", category: "Electronics", price: 2999, image: "images/smartwatch.jpg" },
  { id: 5, name: "DSLR Camera", category: "Electronics", price: 34999, image: "images/camera.jpg" },
  { id: 6, name: "USB-C Hub", category: "Electronics", price: 799, image: "images/hub.jpg" },
  { id: 7, name: "LED Monitor", category: "Electronics", price: 10999, image: "images/monitor.jpg" },
  { id: 8, name: "Power Bank 20000mAh", category: "Electronics", price: 1199, image: "images/powerbank.jpg" },
  { id: 9, name: "Wireless Charger", category: "Electronics", price: 699, image: "images/charger.jpg" },
  { id: 10, name: "HDMI Cable", category: "Electronics", price: 299, image: "images/hdmi.jpg" },
  { id: 11, name: "VR Headset", category: "Electronics", price: 4999, image: "images/vr.jpg" },
  { id: 12, name: "Gaming Mouse", category: "Electronics", price: 999, image: "images/mouse.jpg" },
  { id: 13, name: "Keyboard Mechanical", category: "Electronics", price: 2199, image: "images/keyboard.jpg" },
  { id: 14, name: "Tablet 10 inch", category: "Electronics", price: 15999, image: "images/tablet.jpg" },
  { id: 15, name: "Printer Laser", category: "Electronics", price: 8999, image: "images/printer.jpg" },
  { id: 16, name: "Webcam HD", category: "Electronics", price: 1299, image: "images/webcam.jpg" },
  { id: 17, name: "External SSD 1TB", category: "Electronics", price: 5499, image: "images/ssd.jpg" },
  { id: 18, name: "Router Dual Band", category: "Electronics", price: 1499, image: "images/router.jpg" },
  { id: 19, name: "Graphics Card", category: "Electronics", price: 28999, image: "images/gpu.jpg" },
  { id: 20, name:"Drone Camera", category:"Electronics", price:15999, image:"images/drone.jpg" },
  // CLOTHING
  { id: 21, name:"Men's T-Shirt", category:"Clothing", price:599, image:"images/tshirt.jpg" },
  { id: 22, name: "Women's Kurti", category: "Clothing", price: 899, image: "images/kurti.jpg" },
  { id: 23, name: "Jeans Men", category: "Clothing", price: 1499, image: "images/jeans.jpg" },
  { id: 24, name: "Women's Leggings", category: "Clothing", price: 499, image: "images/leggings.jpg" },
  { id: 25, name: "Jacket", category: "Clothing", price: 1999, image: "images/jacket.jpg" },
  { id: 26, name: "Sweatshirt", category: "Clothing", price: 1199, image: "images/sweatshirt.jpg" },
  { id: 27, name: "Formal Shirt", category: "Clothing", price: 899, image: "images/formalshirt.jpg" },
  { id: 28, name: "Blouse", category: "Clothing", price: 699, image: "images/blouse.jpg" },
  { id: 29, name: "Track Pants", category: "Clothing", price: 899, image: "images/trackpants.jpg" },
  { id: 30, name: "Kurta Pajama", category: "Clothing", price: 1099, image: "images/kurtapajama.jpg" },
  { id: 31, name: "Saree", category: "Clothing", price: 1499, image: "images/saree.jpg" },
  { id: 32, name: "Chinos", category: "Clothing", price: 1299, image: "images/chinos.jpg" },
  { id: 33, name: "Skirt", category: "Clothing", price: 799, image: "images/skirt.jpg" },
  { id: 34, name: "Denim Jacket", category: "Clothing", price: 1799, image: "images/denimjacket.jpg" },
  { id: 35, name: "Shorts", category: "Clothing", price: 599, image: "images/shorts.jpg" },
  { id: 36, name: "Hoodie", category: "Clothing", price: 1599, image: "images/hoodie.jpg" },
  { id: 37, name: "Ethnic Dress", category: "Clothing", price: 1899, image: "images/ethnicdress.jpg" },
  { id: 38, name: "Suit", category: "Clothing", price: 3499, image: "images/suit.jpg" },
  { id: 39, name: "Capri", category: "Clothing", price: 649, image: "images/capri.jpg" },
  { id: 40, name:"Tunic", category:"Clothing", price:949, image:"images/tunic.jpg" },
  // HOME & KITCHEN
  { id: 41, name: "Cookware Set", category: "Home & Kitchen", price: 1999, image: "images/cookware.jpg" },
  { id: 42, name: "Knife Set", category: "Home & Kitchen", price: 799, image: "images/knifeset.jpg" },
  { id: 43, name: "Mixer Grinder", category: "Home & Kitchen", price: 3499, image: "images/mixer.jpg" },
  { id: 44, name: "Dinner Set", category: "Home & Kitchen", price: 2599, image: "images/dinnerset.jpg" },
  { id: 45, name: "Water Purifier", category: "Home & Kitchen", price: 5999, image: "images/waterpurifier.jpg" },
  { id: 46, name: "Toaster", category: "Home & Kitchen", price: 1499, image: "images/toaster.jpg" },
  { id: 47, name: "Electric Kettle", category: "Home & Kitchen", price: 999, image: "images/kettle.jpg" },
  { id: 48, name: "Vacuum Cleaner", category: "Home & Kitchen", price: 4499, image: "images/vacuum.jpg" },
  { id: 49, name: "Air Fryer", category: "Home & Kitchen", price: 5899, image: "images/airfryer.jpg" },
  { id: 50, name: "Rice Cooker", category: "Home & Kitchen", price: 2499, image: "images/ricecooker.jpg" },
  { id: 51, name: "Iron", category: "Home & Kitchen", price: 1199, image: "images/iron.jpg" },
  { id: 52, name: "Juicer", category: "Home & Kitchen", price: 2999, image: "images/juicer.jpg" },
  { id: 53, name: "Blender", category: "Home & Kitchen", price: 2299, image: "images/blender.jpg" },
  { id: 54, name: "Microwave Oven", category: "Home & Kitchen", price: 7499, image: "images/microwave.jpg" },
  { id: 55, name: "Gas Stove", category: "Home & Kitchen", price: 3599, image: "images/gasstove.jpg" },
  { id: 56, name: "Ceiling Fan", category: "Home & Kitchen", price: 8199, image: "images/fan.jpg" },
  { id: 57, name: "Refrigerator Mini", category: "Home & Kitchen", price: 8999, image: "images/fridge.jpg" },
  { id: 58, name: "Water Bottle Set", category: "Home & Kitchen", price: 699, image: "images/bottleset.jpg" },
  { id: 59, name: "Chopper", category: "Home & Kitchen", price: 899, image: "images/chopper.jpg" },
  { id: 60, name: "Food Processor", category: "Home & Kitchen", price: 4999, image: "images/foodprocessor.jpg" },
   // 🎒 Accessories
  { id: 61, name: "Backpack", category: "Accessories", price: 1499, image: "images/backpack.jpg" },
  { id: 62, name: "Leather Wallet", category: "Accessories", price: 799, image: "images/wallet.jpg" },
  { id: 63, name: "Ladies Handbag", category: "Accessories", price: 1199, image: "images/handbag.jpg" },
  { id: 64, name: "Travel Duffel", category: "Accessories", price: 1899, image: "images/duffel.jpg" },
  { id: 65, name: "Laptop Bag", category: "Accessories", price: 1599, image: "images/laptopbag.jpg" },
  { id: 66, name: "Cap", category: "Accessories", price: 299, image: "images/cap.jpg" },
  { id: 67, name: "Belt", category: "Accessories", price: 499, image: "images/belt.jpg" },
  { id: 68, name: "Scarf", category: "Accessories", price: 399, image: "images/scarf.jpg" },
  { id: 69, name: "Wrist Watch", category: "Accessories", price: 2499, image: "images/watch.jpg" },
  { id: 70, name: "Jewellery Set", category: "Accessories", price: 3499, image: "images/jewellery.jpg" },
  { id: 71, name: "Keychain", category: "Accessories", price: 199, image: "images/keychain.jpg" },
  { id: 72, name: "Umbrella", category: "Accessories", price: 599, image: "images/umbrella.jpg" },
  { id: 73, name: "Socks Pack", category: "Accessories", price: 499, image: "images/socks.jpg" },
  { id: 74, name: "Tie", category: "Accessories", price: 399, image: "images/tie.jpg" },
  { id: 75, name: "Hair Clip Set", category: "Accessories", price: 299, image: "images/hairclip.jpg" },
  { id: 76, name: "Makeup Pouch", category: "Accessories", price: 699, image: "images/makeuppouch.jpg" },
  { id: 77, name: "Luggage Tag", category: "Accessories", price: 199, image: "images/luggagetag.jpg" },
  { id: 78, name: "Sun Hat", category: "Accessories", price: 999, image: "images/sunhat.jpg" },
  { id: 79, name: "Waist Bag", category: "Accessories", price: 899, image: "images/waistbag.jpg" },
  { id: 80, name: "Sunglasses", category: "Accessories", price: 1199, image: "images/sunglasses.jpg" },
  // 🧴 Beauty & Health (20 items)
  { id: 81, name: "Lipstick", category: "Beauty & Health", price: 299, image: "images/lipstick.jpg" },
  { id: 82, name: "Nail Polish", category: "Beauty & Health", price: 149, image: "images/nailpolish.jpg" },
  { id: 83, name: "Perfume", category: "Beauty & Health", price: 999, image: "images/perfume.jpg" },
  { id: 84, name: "Hair Serum", category: "Beauty & Health", price: 499, image: "images/hairserum.jpg" },
  { id: 85, name: "Shampoo", category: "Beauty & Health", price: 349, image: "images/shampoo.jpg" },
  { id: 86, name: "Conditioner", category: "Beauty & Health", price: 329, image: "images/conditioner.jpg" },
  { id: 87, name: "Face Wash", category: "Beauty & Health", price: 249, image: "images/facewash.jpg" },
  { id: 88, name: "Sunscreen", category: "Beauty & Health", price: 399, image: "images/sunscreen.jpg" },
  { id: 89, name: "Body Lotion", category: "Beauty & Health", price: 299, image: "images/bodylotion.jpg" },
  { id: 90, name: "Compact Powder", category: "Beauty & Health", price: 299, image: "images/compact.jpg" },
  { id: 91, name: "Hair Oil", category: "Beauty & Health", price: 199, image: "images/hairoil.jpg" },
  { id: 92, name: "Shaving Cream", category: "Beauty & Health", price: 199, image: "images/shavingcream.jpg" },
  { id: 93, name: "Toothpaste", category: "Beauty & Health", price: 99, image: "images/toothpaste.jpg" },
  { id: 94, name: "Toothbrush Set", category: "Beauty & Health", price: 149, image: "images/toothbrush.jpg" },
  { id: 95, name: "Hand Sanitizer", category: "Beauty & Health", price: 79, image: "images/sanitizer.jpg" },
  { id: 96, name: "Makeup Remover", category: "Beauty & Health", price: 249, image: "images/remover.jpg" },
  { id: 97, name: "Face Mask", category: "Beauty & Health", price: 199, image: "images/facemask.jpg" },
  { id: 98, name: "Eye Liner", category: "Beauty & Health", price: 199, image: "images/eyeliner.jpg" },
  { id: 99, name: "Body Scrub", category: "Beauty & Health", price: 349, image: "images/bodyscrub.jpg" },
  { id: 100, name: "Face Cream", category: "Beauty & Health", price: 399, image: "images/facecream.jpg" },

  // 🏋️ Sports & Fitness (20 items)
  { id: 101, name: "Yoga Mat", category: "Sports & Fitness", price: 999, image: "images/yogamat.jpg" },
  { id: 102, name: "Dumbbells", category: "Sports & Fitness", price: 1299, image: "images/dumbbells.jpg" },
  { id: 103, name: "Resistance Bands", category: "Sports & Fitness", price: 599, image: "images/bands.jpg" },
  { id: 104, name: "Kettlebell", category: "Sports & Fitness", price: 899, image: "images/kettlebell.jpg" },
  { id: 105, name: "Skipping Rope", category: "Sports & Fitness", price: 299, image: "images/rope.jpg" },
  { id: 106, name: "Tennis Racket", category: "Sports & Fitness", price: 1599, image: "images/racket.jpg" },
  { id: 107, name: "Football", category: "Sports & Fitness", price: 799, image: "images/football.jpg" },
  { id: 108, name: "Cricket Bat", category: "Sports & Fitness", price: 1299, image: "images/cricketbat.jpg" },
  { id: 109, name: "Gym Gloves", category: "Sports & Fitness", price: 499, image: "images/gloves.jpg" },
  { id: 110, name: "Pull-Up Bar", category: "Sports & Fitness", price: 1399, image: "images/pullup.jpg" },
  { id: 111, name: "Cycle", category: "Sports & Fitness", price: 8499, image: "images/cycle.jpg" },
  { id: 112, name: "Tennis Ball Set", category: "Sports & Fitness", price: 399, image: "images/tennisballs.jpg" },
  { id: 113, name: "Basketball", category: "Sports & Fitness", price: 999, image: "images/basketball.jpg" },
  { id: 114, name: "Gym Bag", category: "Sports & Fitness", price: 1299, image: "images/gymbag.jpg" },
  { id: 115, name: "Water Bottle", category: "Sports & Fitness", price: 499, image: "images/waterbottle.jpg" },
  // BOOKS
  { id: 116, name: "Motivational Book", category: "Books", price: 499, image: "images/book.jpg" },
  { id: 117, name: "Science Fiction Novel", category: "Books", price: 599, image: "images/scifi.jpg" },
  { id: 118, name: "Romantic Novel", category: "Books", price: 349, image: "images/romance.jpg" },
  { id: 119, name: "Thriller Mystery", category: "Books", price: 449, image: "images/thriller.jpg" },
  { id: 120, name: "Historical Biography", category: "Books", price: 499, image: "images/biography.jpg" },
  { id: 121, name: "Children's Storybook", category: "Books", price: 299, image: "images/storybook.jpg" },
  { id: 122, name: "Comics Collection", category: "Books", price: 399, image: "images/comics.jpg" },
  { id: 123, name: "Fantasy Adventure", category: "Books", price: 599, image: "images/fantasy.jpg" },
  { id: 124, name: "Poetry Book", category: "Books", price: 199, image: "images/poetry.jpg" },
  { id: 125, name: "Self Help Guide", category: "Books", price: 459, image: "images/selfhelp.jpg" }
];

// Global cart
let cart = [];

// On page ready
$(function(){
  populateCategories();
  renderProducts(products);
});

// 1. Populate category filter
function populateCategories(){
  const cats = [...new Set(products.map(p=>p.category))];
  cats.forEach(c=>{
    $('#category-filter').append(`<option value="${c}">${c}</option>`);
  });
}

// 2. Render product cards
function renderProducts(list){
  $('#product-container').html('');
  list.forEach(p=>{
    $('#product-container').append(`
      <div class="col-md-3">
        <div class="card product-card">
          <img src="${p.image}" class="card-img-top" alt="${p.name}">
          <div class="card-body">
            <h5 class="card-title">${p.name}</h5>
            <p class="card-text">₹${p.price}</p>
            <button class="btn btn-primary btn-add-to-cart" onclick="addToCart(${p.id})">Add to Cart</button>
          </div>
        </div>
      </div>`);
  });
}

// 3. Add to cart
function addToCart(id){
  const prod = products.find(p=>p.id===id);
  const found = cart.find(c=>c.id===id);
  if(found) found.qty++;
  else cart.push({...prod, qty:1});
  updateCart();
  alert(`${prod.name} added to cart`);
}

// 4. Update cart UI
function updateCart(){
  $('#cart-count').text(cart.reduce((a,c)=>a+c.qty, 0));
  $('#cart-qty').text(cart.reduce((a,c)=>a+c.qty, 0));
  $('#cart-items').empty();
  cart.forEach((c,i)=>{
    $('#cart-items').append(`
      <li class="list-group-item">
        ${c.name} ₹${c.price} × ${c.qty}
        <button class="btn btn-sm btn-outline-secondary ms-2" onclick="changeQty(${i}, -1)">−</button>
        <button class="btn btn-sm btn-outline-secondary ms-1" onclick="changeQty(${i}, 1)">+</button>
        <button class="btn btn-sm btn-danger float-end" onclick="removeItem(${i})">✖</button>
      </li>`);
  });
  $('#cart-total').text(cart.reduce((sum,c)=>sum + c.price*c.qty, 0));
}

// 5. Change quantity
function changeQty(i, d){
  cart[i].qty += d;
  if(cart[i].qty < 1) cart.splice(i,1);
  updateCart();
}

// 6. Remove item
function removeItem(i){ cart.splice(i,1); updateCart(); }

// 7. Toggle cart sidebar
function toggleCart(){ $('#cart').toggleClass('hidden'); }

// 8. Checkout
function checkout(){
  if(!cart.length) return alert('Cart is empty!');
  alert(`Order placed!\nTotal: ₹${cart.reduce((a,c)=>a+c.price*c.qty,0)}\nThank you!`);
  cart = [];
  updateCart();
  toggleCart();
}

// 9. Search & filter products
function filterProducts(){
  const q = $('#search').val().toLowerCase();
  const cat = $('#category-filter').val();
  const filtered = products.filter(p=>{
    const match = p.name.toLowerCase().includes(q);
    const catMatch = !cat || p.category===cat;
    return match && catMatch;
  });
  renderProducts(filtered);
}
