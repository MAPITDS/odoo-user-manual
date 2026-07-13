# <img src="../../icon_modul/sales.png" width="36" style="vertical-align: middle; margin-right: 12px; filter: brightness(0.9);"> Alur Pembuatan Sales Order (Quotation)

Halaman ini menjelaskan langkah-langkah standar untuk membuat dokumen *Quotation* (Penawaran Harga) hingga menjadi *Sales Order* (SO) yang siap diproses oleh tim gudang.

## 1. Membuat Quotation Baru

1. Masuk ke modul **Sales** > **Orders** > **Quotations**.
2. Klik tombol **New** di pojok kiri atas halaman.
3. Isi data pelanggan pada kolom **Customer**. Jika pelanggan belum terdaftar, Anda bisa membuatnya langsung dari kolom ini.
4. Tentukan masa berlaku penawaran pada kolom **Expiration**.

---

## 2. Memasukkan Produk dan Harga

Pada tab **Order Lines**, masukkan produk yang ingin ditawarkan kepada pelanggan:

1. Klik **Add a product**.
2. Pilih produk dari daftar *dropdown*.
3. Masukkan jumlah produk pada kolom **Quantity**.
4. Sistem akan otomatis menarik harga standar. Anda dapat mengubah harga satuan secara manual pada kolom **Unit Price** jika terdapat kesepakatan khusus.

![Contoh Pengisian Order Lines](../sales/images/sales_order_line.png)
*Gambar 1.1: Tampilan pengisian produk pada tab Order Lines.*

!!! note "Tips Pengisian Cepat"
    Anda bisa menekan tombol `Tab` pada *keyboard* untuk berpindah antar-kolom di Order Lines dengan lebih cepat tanpa perlu klik *mouse*.

---

## 3. Melakukan Konfirmasi menjadi Sales Order (SO)

Setelah dokumen penawaran disetujui oleh pelanggan, Anda harus mengubah statusnya menjadi *Sales Order* agar modul *Inventory* dapat mendeteksi adanya kebutuhan pengiriman barang.

* Klik tombol **Confirm** yang berada di barisan tombol aksi kiri atas.
* Status dokumen di pojok kanan atas akan otomatis berubah dari **Quotation Sent** menjadi **Sales Order**.

!!! warning "Peringatan Penting Sebelum Konfirmasi"
    Pastikan Anda telah memeriksa ulang **Taxes** (Pajak) dan **Pricelist** yang digunakan. Dokumen yang sudah berstatus *Sales Order* dan melahirkan dokumen pengiriman gudang akan memerlukan *effort* lebih (seperti melakukan *cancel* atau membuat *credit note*) jika ingin diubah kembali.