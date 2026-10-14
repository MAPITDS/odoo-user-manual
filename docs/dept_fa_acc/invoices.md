
# <img src="../../icon_modul/ns.png" width="36" style="vertical-align: middle; margin-right: 12px; filter: brightness(0.9);"> Alur Pembuatan Invoices

Halaman ini menjelaskan langkah-langkah standar untuk membuat dokumen *Invoice* (Pembelian Barang) hingga menjadi *RI* yang siap diproses oleh tim warehouse.


## 1. Membuat Invoice Baru

1. Masuk ke modul **Accounting** > **Customer** > **Invoices**.
2. Klik tombol **Create** di pojok kiri atas halaman. Atau pilih *Invoice* yang  sudah terbentuk dari *DO/RI*.
3. Pilih nama customer pada kolom **Partner**, isi alamat pengiriman pada kolom **Delivery Address**, dan pilih **Type Customer**.
4. Pilih termin pembayaran pada kolom **Payment Terms**. 
5. Pilih nama sales yang menjual produk tersebut pada kolom **Sales Person**. Sistem akan otomatis menarik *Region, *Area*, *District*, dan *Regency/City*.
6. Jika ada pembayaran sebelumnya menggunaka DP maka ceklis pada kolom *Is DP* dan isi nomor pembayaran invoice sebelumnya pada kolom *DP Invoice*.
7. Pilih nilai tukar pembayaran (mata uang) ke vendor pada kolom **Currency**.
8. Pilih nomor SO untuk invoice tersebut pada kolom **Number SO**.

![Contoh Pengisian Form PO](../dept_prd/images/po_header.png)
<center><em>Gambar 1 : Tampilan pengisian form pada purchase order.</em></center>

---

## 2. Pengisian Produk Pada Invoice

Pada tab **Invoice Lines**, masukkan produk yang akan diterbitkan invoice :

1. Klik **Add a line**.
2. Pilih **Product** dari daftar *dropdown*, sistem akan otomatis menarik **Description**, **AKL**, dan **HS Code** produk.
3. Pilih tanggal perkiraan pengiriman produk pada kolom **Scheduled Date**.
4. Masukkan jumlah produk yang akan dibeli pada kolom **Quantity** dan pilih satuan yang diajukan pada kolom **Product Unit of Measure**.
5. Masukkan presentase diskon jika ada pada kolom **Discount (%)**.
6. Masukkan harga beli sesuai harga yang telah diberikan dari vendor pada kolom **Unit Price**, sistem akan otomatis menarik jumlah **Subtotal**.
7. Isi keterangan pada *Define your terms and conditions* jika diperlukan terkait keterangan untuk pembelian produk tersebut.

![Contoh Pengisian Produk](../dept_prd/images/po_product.png)
<center><em>Gambar 2 : Tampilan pengisian produk pada tab Products.</em></center>

---

## 3. Pengisian Informasi 

Pada tab **Other Information**, masukkan informasi mengenai pembelian produk.

1. Sistem akan otomatis mengisi tanggal penjadwalan pengiriman produk dan status pembayaran pada kolom **Scheduled Date** dan **Billing Status**.
2. Pilih gudang yang akan menerima pembelian produk tersebut pada kolom **Deliver To**.
3. Pilih ketentuan pengiriman produk jika ada pada kolom **Incoterm**.
4. Masukkan tanggal perkiraan sampai barang pada kolom **Update ETA** dan isi keterangan terkait pengiriman tersebut pada kolom **Description ETA**.
5. Pilih nama yang membuat pembelian tersebut pada kolom **Purchase Representative**.
6. Pilih termin pembayaran pembelian tersebut pada kolom **Payment Terms**.
7. Jika ada aturan penyesuain pajak pada transaksi pembelian ini maka isi pada kolom **Fiscal Position**.
8. Kemudian klik **Save**.
9. Klik tombol **Confirm Order** jika sudah tidak ada revisi pengajuan pembelian produk lagi, apabila sudah diklik maka sudah tidak bisa diubah lagi.

![Contoh Pengisian Informasi Pembelian](../dept_sales/images/po_info.png)
<center><em>Gambar 3 : Tampilan pengisian informasi pembelian pada tab other information.</em></center>

---

## 4. Menunggu Approval

Pada state *To Approved*, atasan akan mengecek pembelian produk tersebut, jika sudah sesuai dan menyetujui pembelian produk tersebut maka tekan tombol **Approve Order**.



## 📝 Referensi Tambahan

### SOP Harian (Checklist)
* <input type="checkbox"> **Memastikan Nama Vendor dan Currency** sudah sesuai dan benar.
* <input type="checkbox"> **Memastikan Produk, Quantity serta Diskon** sudah sesuai dengan kebutuhan pembeli.
* <input type="checkbox"> **Pastikan Deliver To** sudah sesuai dan benar.


### Fitur Berdasarkan Hak Akses
=== "User"
    - Dapat membuat *PR* baru dan dapat melihat keseluruhan data pada modul.

=== "Manager"
    - Dapat membuat *PR* baru dan dapat melihat keseluruhan data pada modul.
    - Dapat melihat tampilan menu *Analisa Harga Beli* dan *Reporting*.

=== "Approver"
    - Dapat membuat *PR* baru dan dapat melihat keseluruhan data pada modul.
    - Dapat melakukan action *Approve Order* jika permintaan sudah sesuai.

??? info "What Next?"
    Setelah *PO* sudah dilakukan *Approve Order* selanjutnya dokumen akan masuk ke Modul *RI*.
    [Lanjut ke Modul Sales:octicons-arrow-right-16:](../dept_who/inventory_ri.md)