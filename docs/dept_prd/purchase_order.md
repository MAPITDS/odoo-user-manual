
# <img src="../../icon_modul/ns.png" width="36" style="vertical-align: middle; margin-right: 12px; filter: brightness(0.9);"> Alur Pembuatan Purchase Order

Halaman ini menjelaskan langkah-langkah standar untuk membuat dokumen *PO* (Permintaan Pembelian Barang) hingga menjadi *RI* yang siap diproses oleh tim warehouse.


## 1. Membuat Pembelian Produk

1. Masuk ke modul **Purchase**.
2. Klik tombol **Create** di pojok kiri atas halaman. Atau pilih PO yang  sudah terbentuk dari PR.
3. Pilih nama **Vendor**, dan isi referensi kode vendor pada kolom **Vendor Reference**.
4. Pilih nilai tukar pembayaran ke vendor pada kolom **Currency**.
5. Isi tanggal pemesanan pembelian pada kolom **Order Date**.
6. Pilih pengiriman **Ship To** ke negara mana dan menggunakan transportasi pengiriman apa pada kolom **Ship By**.
7. Pilih divisi mana yang mengajukan pembelian tersebut pada kolom **Division**.
8. Isi keterangan PO diambil dari PR yang mana dan keterangan lainnya yang diperlukan pada kolom **Source Document**.

![Contoh Pengisian Form NS](../dept_sales/images/ns_header.png)
<center><em>Gambar 1 : Tampilan pengisian form pada Negotiation Sheet.</em></center>

---

## 2. Pengisian Produk

Pada tab **Products**, masukkan produk yang akan diajukan pembeliannya:

1. Klik **Add a line**.
2. Pilih **Product** dari daftar *dropdown*, sistem akan otomatis menarik **Description**, **AKL**, dan **HS Code** produk.
3. Masukkan jumlah produk yang akan dibeli pada kolom **Quantity** dan pilih satuan yang diajukan pada kolom **Product of Measure**.
4. Masukkan presentase diskon jika ada pada kolom **Discount (%)**.
6. Masukkan harga beli sesuai harga yang telah diberikan dari vendor pada kolom **Unit Price**, sistem akan otomatis menarik jumlah **Subtotal**.
7. Isi keterangan pada *Define your terms and conditions* jika diperlukan terkait keterangan untuk pembelian produk tersebut.

![Contoh Pengisian Order Lines](../dept_sales/images/ns_product.png)
<center><em>Gambar 2 : Tampilan pengisian produk pada tab Product Detail.</em></center>

---

## 3. Pengisian Informasi 

Pada tab **Other Information**, masukkan informasi mengenai pembelian produk.

1. Klik **Add a line**.
2. Masukkan tanggal jadwal pengiriman pembelian pada kolom **Scheduled Date**.
3. Pilih gudang yang akan menerima pembelian produk tersebut pada kolom **Deliver To**.
4. Pilih ketentuan pengiriman produk jika ada pada kolom **Incoterm**.
6. Masukkan tanggal perkiraan sampai barang pada kolom **Update ETA** dan isi keterangan terkait pengiriman tersebut pada kolom **Description ETA**.
7. Pilih nama yang membuat pembelian tersebut pada kolom **Purchase Representative**.
8. Pilih termin pembayaran pembelian tersebut pada kolom **Payment Terms**.
9. Kemudian klik **Save**.

![Contoh Pengisian Order Lines](../dept_sales/images/ns_product.png)
<center><em>Gambar 2 : Tampilan pengisian produk pada tab Product Detail.</em></center>

---

## 5. Melakukan Konfirmasi menjadi Converted 

Setelah dokumen penawaran disetujui oleh pelanggan, Anda harus mengubah statusnya menjadi *Converted* agar modul *Sales* dapat mendeteksi adanya penjualan barang.

* Klik tombol **Convert To So** yang berada di barisan tombol aksi kiri atas.
* Pilih tipe convert **Full** atau **Partial**
* Status dokumen di pojok kanan atas akan otomatis berubah dari **Approved** menjadi **Converted** atau **Partially Converted**.

![Contoh Pengisian pilihan convert](../dept_sales/images/ns_convert.png)
<center><em>Gambar 4 : Tampilan confirm Convert To SO.</em></center>

<!-- !!! warning "Peringatan Penting Sebelum Konfirmasi"
    Pastikan Anda telah memeriksa ulang nilai pada Tabel **Calculation** dan **Warna** yang tertera. Dokumen yang sudah berstatus *Converted* maka sudah bisa lanjut pada modul **Sales**. -->

## 📝 Referensi Tambahan

### SOP Harian (Checklist)
* <input type="checkbox"> **Pastikan Nama Customer (Bill To - Ship To - Partner - Customer Universal)** sudah sesuai dan benar.
* <input type="checkbox"> **Memastikan Produk dan Quantity serta Diskon atau potongan harga dan ongkir** sudah sesuai dengan kebutuhan customer/pembeli.
* <input type="checkbox"> **Pastikan Bagian COS (Cost of Sales)** sudah sesuai dengan kesepakatan.

### Fitur Berdasarkan Hak Akses
=== "Admin SAS"
    - Dapat membuat *NS* baru dan dapat melihat keseluruhan data pada modul.
    - Dapat melakukan action *Submit* jika penawaran sudah sesuai 
    - Dapat melakukan action *Convert to SO* jika sesuai selesai tahap Approval

=== "DIR"
    Memiliki tombol untuk menyetujui diskon di luar batas standar dan mengubah *APPROVE* khusus (*Merah atau Oranye*).
    Memiliki tampilan Tab perhitungan (Dir View)

=== "GSM"
    Memiliki tombol untuk menyetujui diskon di luar batas standar *APPROVE* khusus (*Kuning*).

=== "RSM"
    Memiliki tombol untuk menyetujui diskon di luar batas standar *APPROVE* khusus (*Biru*).

=== "ASM"
     Hanya dapat melihat data user dan area masing-masing.

??? info "What Next?"
    Setelah *NS* sudah dilakukan *Convert to SO* selanjutnya dokumen akan masuk ke Modul *Sales*.
    [Lanjut ke Modul Sales:octicons-arrow-right-16:](../dept_sales/sales_quotation.md)