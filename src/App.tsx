import { useState } from "react";

export default function app() {
  return (
    <>
      <section>
        <div className="container">
          <div className="title-content">
            <h1>Daftar Belanjaan Manik</h1>
          </div>
          <div className="action-handel">
            <form action="">
              <ul className="list-input">
                <li>
                  <label htmlFor="quantity">Quantity :</label>
                  <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </li>
                <li>
                  <input type="text" placeholder="Nama Barang" />
                </li>
                <li>
                  <button>Tambah Barang</button>
                </li>
              </ul>
            </form>
          </div>

          <div className="paper-content">
            <div className="content-list">
              <ul>
                <li>
                  <div className="checklist">
                    <input type="checkbox" id="exampleCheck1" checked></input>
                  </div>
                  <div className="quantity">
                    <h3>5</h3>
                  </div>
                  <div className="barang">
                    <h3>
                      <del>Air Mineral </del>
                    </h3>
                  </div>
                  <div className="icon-del">
                    <a href="">
                      <img src="./img/error.png" alt="" />
                    </a>
                  </div>
                </li>
                <li>
                  <div className="checklist">
                    <input type="checkbox" id="exampleCheck1"></input>
                  </div>
                  <div className="quantity">
                    <h3>3</h3>
                  </div>
                  <div className="barang">
                    <h3>Beras Tiga Roda</h3>
                  </div>
                  <div className="icon-del">
                    <a href="">
                      <img src="./img/error.png" alt="" />
                    </a>
                  </div>
                </li>
                <li>
                  <div className="checklist">
                    <input type="checkbox" id="exampleCheck1"></input>
                  </div>
                  <div className="quantity">
                    <h3>8</h3>
                  </div>
                  <div className="barang">
                    <h3>Sabun Mandi</h3>
                  </div>
                  <div className="icon-del">
                    <a href="">
                      <img src="./img/error.png" alt="" />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer">
            <div className="aksi-list-barang">
              <form action="">
                <ul className="list-input">
                  <li>
                    <label htmlFor="quantity">Urutan Barang :</label>
                    <select>
                      <option>Urutkan Berdasarkan Abjad</option>
                      <option>Urutkan Berdasarkan Input</option>
                      <option>Urutkan Berdasakan Uncheck</option>
                    </select>
                  </li>
                  <li>
                    <button>Reset Barang</button>
                  </li>
                </ul>
              </form>
            </div>
            <div className="footer-pesan">
              <h3>
                Total semua barang <span>3</span>, sedangkan yang sudah terbeli{" "}
                <span>1</span>. Persentase kemajuan catatan <span>(45%)</span>.
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
