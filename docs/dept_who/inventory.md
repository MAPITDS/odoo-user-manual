# <img src="../../icon_modul/inventory.png" width="36" style="vertical-align: middle; margin-right: 12px; filter: brightness(0.9);"> alar Pembuatan Inventory

Halaman ini menjelaskan langkah-langkah standar untuk membuat dan mengelola *Inventory* (Produk).

## 1. Membuat Produk Baru

1. Masuk ke modul **Inventory** > **Master Data** > **Products**.
2. Klik tombol **Create** di pojok kiri atas halaman.
3. Isi nama produk pada kolom **Product Name**.
4. Ceklis berdasarkan kriteria produk, apakah produk tersebut merupakan produk jual (*Can be Sold*)/ produk beli (*Can be Purchased*) / biaya produk (*Is a Landed Cost*) / produk operasional (*Can be Expensed*).
5. Masukkan foto produk jika ada pada kolom **Image** di sebelah kanan.

![Contoh Pengisian Produk Baru](../dept_hr/images/employee_header.png)
<center><em>Gambar 1 : Tampilan pengisian form pada Produk.</em></center>

---

## 2. Memasukkan Informasi Produk

Pada tab **General Information**, masukkan semua informasi mengenai produk tersebut :

1. Pilih tipe produk dari daftar *dropdown* pada kolom **Product Type**. apakah produk tersebut merupakan produk fisik yang disimpan yang bisa terlihat keluar masuk produk tersebut (*Storable Product*) / product service (*Service*) / produk habis pakai (*Consumable*).
2. Pilih kategori produk pada kolom **Product Category**. Jika kategori belum terdaftar, Anda bisa membuatnya langsung dari kolom ini.
3. Masukkan informasi produk dari mulai kode product *Internal Reference*, *Barcode*, *AKL*, *Info AKL*, dan *HS Code*.
4. Pilih kode vendor produk pada kolom **Principal**. Jika kategori belum terdaftar, Anda bisa membuatnya langsung dari kolom ini.
5. Masukkan tanggal penerimaan form pengajuan produk tersebut pada kolom **Received Date**.
6. Masukkan kriteria produk tersebut pada kolom **Program**.
7. Masukkan satuan / pack produk tersebut pada **Unit of Measure**, **Physical unit**, dan **Purchase Unit of Measure**.
8. Isi catatan yang diperlukan mengenai produk tersebut pada kolom **Internal Notes**.

![Contoh Pengisian Order Lines](../inventory/images/inventory_header.png)
*Gambar 1.1: Tampilan pengisian produk pada tab Order Lines.*

!!! note "Tips Pengisian Cepat"
    Anda bisa menekan tombol `Tab` pada *keyboard* untuk berpindah antar-kolom di Order Lines dengan lebih cepat tanpa perlu klik *mouse*.

---

## 3. Memasukkan Informasi Variasi Produk

Pada tab **Variants**, masukkan semua informasi mengenai variasi pada produk tersebut, jika tidak ada makan bisa lewati langkah ini.

1. Klik **Add a line**.
2. Pilih kelengkapan produk pada kolom **Attribute**. Jika kelengkapan belum terdaftar, Anda bisa membuatnya langsung dari kolom ini.
3. Masukkan nilai kelengkapan produk pada kolom **Attribute Values**. Jika nilai belum terdaftar, Anda bisa membuatnya langsung dari kolom ini.
8. Isi catatan yang diperlukan mengenai produk tersebut pada kolom **Internal Notes**.

![Contoh Pengisian Order Lines](../inventory/images/inventory_header.png)
*Gambar 1.1: Tampilan pengisian produk pada tab Order Lines.*

---

## 4. Memasukkan Informasi Peringatan Produk

Pada tab **Service**, masukkan peringatan pada produk tersebut yang akan muncul pada modul service, jika tidak ada maka bisa lewati langkah ini.

1. Ceklis jika akan memunculkan peringatan **Warning**.
2. Isi peringatan produk yang akan muncul pada kolom **Note Warning**.

![Contoh Pengisian Order Lines](../inventory/images/inventory_header.png)
*Gambar 1.1: Tampilan pengisian produk pada tab Order Lines.*

---

## 5. Memasukkan Informasi Penjualan Produk

Pada tab **Sales**, masukkan semua informasi untuk penjualan pada produk tersebut yang akan muncul pada modul sales, jika bukan merupakan produk jual bisa lewati langkah ini.

1. Klik **Add a line**.
2. Isi pricelist produk. Pilih **Pricelist**, isi harga produk **Price**, masukkan tanggal mulai berlakunya harga produk **Start Date** dan tanggal berakhirnya harga produk **End Date**, dan isi presentase ICR berdasarkan data yang diajukan **ICR (%)**.
3. Pilih kebijakan penagihan berdasarkan orderan *Ordered quantities* atau berdasarkan pengiriman *Delivered quantities*. Dan pilih bagaimana penagihan ulang dilakukan **Re-Invoice Policy**.
4. Ceklist **Is an Event Ticket** jika produk tersebut merupakan produk even.
5. Pilih opsi produk yang sama pada kolom **Optional Products**, jika tidak ada tidak perlu di isi.
6. Isi deskripsi untuk produk **Description for Customers** dan pilihan warning **Warning when Selling this Product** apabila catatan tersebut diperlukan untuk notif ketika ada nya SO pada produk tersebut.

![Contoh Pengisian Order Lines](../inventory/images/inventory_header.png)
*Gambar 1.1: Tampilan pengisian produk pada tab Order Lines.*

---

## 6. Memasukkan Informasi Pembelian Produk

Pada tab **Purchase**, masukkan semua informasi untuk pembelian pada produk tersebut yang akan muncul pada modul purchase, jika bukan merupakan produk beli bisa lewati langkah ini.

1. Klik **Add a line**.
2. Isi informasi pembelian produk. Pilih **Vendor** pembelian produk, isi minimal pembelian produk **Minimal Quantity** dan satuan produk **Unit of Measure**, isi harga produk **Price** dan **Currency**, dan masukkan tanggal mulai **Start Date** dan tanggal berakhirnya **End Date** harga produk. Jika ada produk varian maka isi pada kolom **Product Variant**.
3. Pilih kebijakan pembayaran berdasarkan orderan produk *On ordered quantities* atau berdasarkan penerimaan produk *On received quantities*. Dan pilih pajak vendornya pada kolom **Vendor Taxes**.
4. Isi deskripsi untuk produk **Description for Vendors** dan pilihan warning **Warning when Purchasing this Product** apabila catatan tersebut diperlukan untuk notif ketika ada nya pembelian pada produk tersebut.

![Contoh Pengisian Order Lines](../inventory/images/inventory_header.png)
*Gambar 1.1: Tampilan pengisian produk pada tab Order Lines.*

---

## 7. Memasukkan Informasi Pengiriman Produk

Pada tab **Inventory**, masukkan semua informasi untuk estimasi waktu pengiriman pada produk tersebut.

1. Pilih **Routes** untuk produk ini didapatkan dari membeli/produksi/order.
2. Isi estimasi pengiriman produk dari vandor hingga diterima **Manufacturing Lead Time**, dan estimasi pengemasan produk untuk dikirimkan kepada pelanggan **Customer Lead Time**.
3. Pilih **Tracking** produk apakah mempunyai lot  *By Lots* atau tidak *No Tracking*.
4. Jika tracking produk *By Lots* isi estimasi berapa lama produk digunakan pada kolom *Dates*, dan isi berat beserta ukuran produk pada kolom *Logistics*.
5. 

![Contoh Pengisian Order Lines](../inventory/images/inventory_header.png)
*Gambar 1.1: Tampilan pengisian produk pada tab Order Lines.*

---

## 3. Melakukan Konfirmasi menjadi Negotiation Sheet (NS)

Setelah dokumen penawaran disetujui oleh pelanggan, Anda harus mengubah statusnya menjadi *Sales Order* agar modul *Inventory* dapat mendeteksi adanya kebutuhan pengiriman barang.

* Klik tombol **Confirm** yang berada di barisan tombol aksi kiri atas.
* Status dokumen di pojok kanan atas akan otomatis berubah dari **Quotation Sent** menjadi **Sales Order**.

!!! warning "Peringatan Penting Sebelum Konfirmasi"
    Pastikan Anda telah memeriksa ulang **Taxes** (Pajak) dan **Pricelist** yang digunakan. Dokumen yang sudah berstatus *Sales Order* dan melahirkan dokumen pengiriman gudang akan memerlukan *effort* lebih (seperti melakukan *cancel* atau membuat *credit note*) jika ingin diubah kembali.

---

## 🔄 Gambaran Umum Alur Barang

Proses pergerakan stok di Odoo dibagi menjadi dua jalur utama berdasarkan tipe dokumennya:

=== "Alur Barang Masuk (Inbound)"
    1. Tim Purchasing menerbitkan *Purchase Order* (PO).
    2. Sistem Odoo secara otomatis membuat dokumen **Receipts (WH/IN)** di modul Inventory.
    3. Tim Gudang melakukan pemeriksaan fisik, mencocokkan jumlah, lalu melakukan *Validate* untuk menambah stok.

=== "Alur Barang Keluar (Outbound)"
    1. Tim Sales mengonfirmasi *Sales Order* (SO).
    2. Sistem Odoo secara otomatis menerbitkan dokumen **Delivery Orders (WH/OUT)**.
    3. Tim Gudang melakukan *picking*, *packing*, dan memvalidasi pengiriman agar stok berkurang secara *real-time*.

---

## 📝 Protokol Wajib Tim Gudang (SOP)

Sebelum melakukan validasi dokumen pergerakan barang, pastikan langkah-langkah berikut telah terpenuhi:

-   [ ] Memeriksa fisik barang (tidak cacat/rusak).
-   [ ] Memastikan kuantitas fisik sama persis dengan kolom **Done** di Odoo.
-   [ ] Mengisi nomor seri (*Lot/Serial Number*) jika produk yang diterima wajib *tracking*.

!!! warning "Penting untuk Diperhatikan"
    Jangan pernah menekan tombol **Validate** jika jumlah barang fisik belum sesuai dengan yang tertera di sistem. Jika terjadi selisih, gunakan fitur *Backorder* yang disediakan oleh Odoo.