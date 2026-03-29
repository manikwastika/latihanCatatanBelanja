import { useState } from "react";

const dataBarang = [
  {
    id: 1,
    nama: "Air Mineral",
    quantity: 5,
    checked: true,
  },
  {
    id: 2,
    nama: "Tomato",
    quantity: 3,
    checked: false,
  },
  {
    id: 3,
    nama: "Sabun Mandi",
    quantity: 8,
    checked: false,
  },
];

export default function App() {
  const [items, setItems] = useState(dataBarang);
  const [sortBy, setSortBy] = useState("input");

  function handleTambahBarang(item) {
    setItems([...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleCheckedBarang(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      ),
    );
  }

  function handleResetBarang() {
    setItems([]);
  }

  let sortItems;

  if (sortBy === "input") {
    sortItems = items;
  }
  if (sortBy === "abjad") {
    sortItems = items.slice().sort((a, b) => a.nama.localeCompare(b.nama));
  }

  if (sortBy === "uncheck") {
    sortItems = items.slice().sort((a, b) => a.checked - b.checked);
  }

  return (
    <section>
      <div className="container">
        <Header />
        <TambahBarang onTambahBarang={handleTambahBarang} />
        <PaperContent
          items={sortItems}
          onDeleteItem={handleDeleteItems}
          onCheckedBarang={handleCheckedBarang}
        />
        <Footer
          onResetBarang={handleResetBarang}
          onSortBy={sortBy}
          onSetSortBy={setSortBy}
        />
      </div>
    </section>
  );
}

function Header() {
  return (
    <div className="title-content">
      <h1>Daftar Belanjaan Manik</h1>
    </div>
  );
}

function TambahBarang({ onTambahBarang }) {
  const [nama, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  const quantityValue = [...Array(20)].map((_, i) => (
    <option value={i + 1} key={i + 1}>
      {i + 1}
    </option>
  ));

  function handleTambahBarang(event) {
    event.preventDefault();

    if (!nama) return;

    const newDataBarang = { nama, quantity, checked: false, id: Date.now() };
    onTambahBarang(newDataBarang);
    setName("");
    setQuantity(1);
  }

  return (
    <div className="action-handel">
      <form onSubmit={handleTambahBarang}>
        <ul className="list-input">
          <li>
            <label htmlFor="quantity">Quantity :</label>
            <select
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            >
              {quantityValue}
            </select>
          </li>
          <li>
            <input
              type="text"
              placeholder="Nama Barang"
              value={nama}
              onChange={(e) => setName(e.target.value)}
            />
          </li>
          <li>
            <button>Tambah Barang</button>
          </li>
        </ul>
      </form>
    </div>
  );
}

function PaperContent({ items, onDeleteItem, onCheckedBarang }) {
  return (
    <div className="paper-content">
      <div className="content-list">
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <div className="checklist">
                <input
                  type="checkbox"
                  id="exampleCheck1"
                  onChange={() => onCheckedBarang(item.id)}
                  checked={item.checked}
                ></input>
              </div>
              <div className="quantity">
                <h3>{item.quantity}</h3>
              </div>
              <div className="barang">
                <h3
                  style={item.checked ? { textDecoration: "line-through" } : {}}
                >
                  {item.nama}
                </h3>
              </div>
              <div className="icon-del">
                <button onClick={() => onDeleteItem(item.id)}>&times;</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Footer({ onResetBarang, onSortBy, onSetSortBy }) {
  return (
    <div className="footer">
      <div className="aksi-list-barang">
        <ul className="list-input">
          <li>
            <label htmlFor="quantity">Urutan Barang :</label>
            <select
              value={onSortBy}
              onChange={(e) => {
                onSetSortBy(e.target.value);
              }}
            >
              <option value="input">Urutkan Berdasarkan Input</option>
              <option value="abjad">Urutkan Berdasarkan Abjad</option>
              <option value="uncheck">Urutkan Berdasakan Uncheck</option>
            </select>
          </li>
          <li>
            <button onClick={onResetBarang}>Reset Barang</button>
          </li>
        </ul>
      </div>
      <div className="footer-pesan">
        <h3>
          Total semua barang <span>3</span>, sedangkan yang sudah terbeli{" "}
          <span>1</span>. Persentase kemajuan catatan <span>(45%)</span>.
        </h3>
      </div>
    </div>
  );
}
