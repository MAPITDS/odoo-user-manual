# <img src="../../icon_modul/.png" width="36" style="vertical-align: middle; margin-right: 12px; filter: brightness(0.9);"> alur Pembuatan Delivery Order

Halaman ini menjelaskan langkah-langkah standar untuk membuat dokumen *DO* (Delivery Order) hingga menjadi *Invoice* yang siap diproses oleh tim FA.
**Inventory** > **Delivery Order** > **Waiting** > **Process** > **Ready**.

## 1. Membuat DO Baru

1. Masuk ke modul **Inventory** > **Delivery Order**.
2. *DO* secara otomatis sudah terbuat dari *SO* yang telah terbentuk.
3. Pilih *DO* yang akan di proses. Dan klik *Edit*.
4. Lengkapi pengisian kolom yang belum terisi seperti pengisian tanggal *DO* ini diterima pada kolom **Date**, dan pengisian catatan yang sehubungan dengan pengiriman barang tersebut pada kolom **Note Warehouse**.

![Contoh Pengisian Order Lines](../inventory/images/do_header.png)
<center><em>Gambar 1 : Tampilan pengisian produk pada tab Order Lines.</em></center>

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

![Contoh Pengisian Lot Product](../inventory/images/do_operations.png)
<center><em>Gambar 2.1 : Tampilan pengisian lot produk pada tab Operations.</em></center>

![Contoh Pengisian Lot Product](../inventory/images/do_lot.png)
<center><em>Gambar 2.2 : Tampilan pengisian lot produk pada tab Operations.</em></center>

---

## 3. Memasukkan Tambahan Informasi

Pada tab **Additional Info**, masukkan informasi mengenai pengiriman produk :

1. Pilih proses pengiriman produk **Shipping Policy** dari daftar *dropdown*.
2. Pilih nomor SO **Sales Order** dari daftar *dropdown* untuk transaksi yang terkait pengiriman produk tersebut.
3. Masukkan tanggal untuk jadwal pengiriman produk pada kolom **Scheduled Date**.
4. Pilih prioritas pengiriman produk pada kolom **Priority**.

![Contoh Pengisian Order Lines](../inventory/images/do_info.png)
<center><em>Gambar 3 : Tampilan pengisian produk pada tab additional info.</em></center>

---

## 4. Memasukkan Catatan

Pada tab **Note**, masukkan informasi mengenai pengiriman produk yang diperlukan.
Kemudian klik **Save**.

![Contoh Pengisian Order Lines](../inventory/images/do_note.png)
<center><em>Gambar 1 : Tampilan pengisian produk pada tab Order Lines.</em></center>

---

## 5. Melakukan Konfirmasi Pengiriman Produk

DO yang terbentuk melalui SO maka masuk ke dalam *Delivery Order* akan langsung berstatus **Waiting**. 

* Jika semua langkah sudah di isi maka klik **Validate** dan produk sudah siap untuk dikirimkan.
* Apabila untuk memastikan ketersediaan produk sebelum melakukan validate, maka klik **Check Availability**

!!! warning "Peringatan Penting Sebelum Konfirmasi"
    Pastikan Anda telah memeriksa ulang **Address** dan **Qty** produk yang akan dikirimkan. Dokumen yang sudah berstatus *Ready* dan melahirkan dokumen pengiriman gudang akan memerlukan *effort* lebih (seperti melakukan *cancel* dan membuat *Reset To Draft*) jika ingin diubah kembali.

---


## 📝 Referensi Tambahan

### SOP Harian (Checklist)
* <input type="checkbox"> **Pastikan Qty dan Lot/SN Product** sudah sesuai dan benar.
* <input type="checkbox"> **Pastikan Nama Pelanggan dan Alamat Penerima** sudah sesuai dan benar.
* <input type="checkbox"> **Lakukan Konfirmasi apabila Produk sudah dikirimkan ke pelanggan**.


### Fitur Berdasarkan Hak Akses
=== "Tampilan User"
    - Dapat membuat *DO* baru dan dapat melihat keseluruhan data pada modul.
    - Dapat melakukan action untuk melakukan *Validate* sesuai kondisi pengiriman yang terjadi.

=== "Tampilan Supervisor / Manajer"
    Memiliki tombol tambahan *Unlock* untuk mengedit *Qty* yang di kirimkan atau yang sudah selesai dikirimkan.

??? info "What Next?"
    Setelah *DO* sudah dilakukan dan berstatus *Done* selanjutnya dokumen akan masuk ke Modul *Accounting* dengan membuat sebuah faktur **Create Invoice**.
    [Lanjut ke Modul Accounting - Invoice :octicons-arrow-right-16:](../dept_fa_acc/invoices.md)