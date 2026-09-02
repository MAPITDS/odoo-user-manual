# <img src="../../icon_modul/.png" width="36" style="vertical-align: middle; margin-right: 12px; filter: brightness(0.9);"> alur Pembuatan Delivery Order

Halaman ini menjelaskan langkah-langkah standar untuk membuat dokumen *DO* (Delivery Order) hingga menjadi *Invoice* yang siap diproses oleh tim FA.
**Inventory** > **Delivery Order** > **Waiting** > **Process** > **Ready**.

## 1. Membuat DO Baru

1. Masuk ke modul **Inventory** > **Delivery Order**.
2. *DO* secara otomatis sudah terbuat dari *SO* yang telah terbentuk.
3. Pilih *DO* yang akan di proses. Dan klik *Edit*.
4. Lengkapi pengisian kolom yang belum terisi seperti pengisian tanggal *DO* ini diterima pada kolom **Date**, dan pengisian catatan yang sehubungan dengan pengiriman barang tersebut pada kolom **Note Warehouse**.

---

## 2. Memasukkan Lot Produk

Pada tab **Operations**, masukkan lot pada produk yang akan dikirimkan ke pelanggan :

1. Pilih **Product** yang akan di masukkan lot nya.
2. Klik **Detailed Operations** yang ada di sebelah kanan produk.
3. Klik **Add a line**.
4. Pilih lot/sn produk dari daftar *dropdown* yang akan dikirimkan.
5. Sistem akan otomatis menarik Expired Date dan UOM pada Lot tersebut.
6. Masukkan qty produk yang akan dikimkan pada kolom **Done**.
7. Kemudian klik **Confirm**.

![Contoh Pengisian Order Lines](../inventory/images/inventory_header.png)
*Gambar 1.1: Tampilan pengisian produk pada tab Order Lines.*

---

## 3. Memasukkan Tambahan Informasi

Pada tab **Additional Info**, masukkan informasi mengenai pengiriman produk :

1. Pilih proses pengiriman produk **Shipping Policy** dari daftar *dropdown*.
2. Pilih nomor SO **Sales Order** dari daftar *dropdown* untuk transaksi yang terkait pengiriman produk tersebut.
3. Masukkan tanggal untuk jadwal pengiriman produk pada kolom **Scheduled Date**.
4. Pilih prioritas pengiriman produk pada kolom **Priority**.

![Contoh Pengisian Order Lines](../inventory/images/inventory_header.png)
*Gambar 1.1: Tampilan pengisian produk pada tab Order Lines.*

---

## 4. Memasukkan Catatan

Pada tab **Note**, masukkan informasi mengenai pengiriman produk yang diperlukan.
Kemudian klik **Save**.

![Contoh Pengisian Order Lines](../inventory/images/inventory_header.png)
*Gambar 1.1: Tampilan pengisian produk pada tab Order Lines.*

---

## 5. Melakukan Konfirmasi Pengiriman Produk

DO yang terbentuk melalui SO maka masuk ke dalam *Delivery Order* akan langsung berstatus **Waiting**. Jika semua langkah sudah di isi maka klik **Validate** dan produk sudah siap untuk dikirimkan. 

* Klik tombol **Confirm** yang berada di barisan tombol aksi kiri atas.
* Status dokumen di pojok kanan atas akan otomatis berubah dari **Quotation Sent** menjadi **Sales Order**.

!!! warning "Peringatan Penting Sebelum Konfirmasi"
    Pastikan Anda telah memeriksa ulang **Taxes** (Pajak) dan **Pricelist** yang digunakan. Dokumen yang sudah berstatus *Sales Order* dan melahirkan dokumen pengiriman gudang akan memerlukan *effort* lebih (seperti melakukan *cancel* atau membuat *credit note*) jika ingin diubah kembali.

---

## 📝 Evaluasi & Referensi Tambahan

### SOP Harian (Checklist)
- [x] Input data Customer dan verifikasi masa berlaku penawaran.
- [x] Pastikan nominal pajak (VAT 11%) sudah sesuai.
- [ ] Lakukan konfirmasi menjadi Sales Order setelah mendapat approval klien.

### Fitur Berdasarkan Hak Akses
=== "Tampilan Staff Sales"
    Hanya dapat membuat *Quotation* dan melihat status ketersediaan stok produk secara real-time.

=== "Tampilan Supervisor / Manajer"
    Memiliki tombol tambahan untuk menyetujui diskon di luar batas standar dan mengubah *Pricelist* khusus.

??? info "Detail Akuntansi Teknis (Klik untuk Membuka)"
    Saat dokumen bertransisi dari *Quotation* menjadi *Sales Order*, sistem Odoo belum membentuk jurnal finansial. Jurnal baru akan terbentuk saat produk dikirim (*Inventory Move*) atau faktur dibuat (*Invoice Created*).