# <img src="../../icon_modul/mf_mtf.png" width="36" style="vertical-align: middle; margin-right: 12px; filter: brightness(0.9);"> Alur Pembuatan Request Payment (Request MF/MTF)

Halaman ini menjelaskan langkah-langkah standar untuk membuat dokumen *Request* (Permintaan Pembayaran MF/MTF) yang siap diproses oleh tim FA.

## 1. Membuat Request Baru

1. Masuk ke modul **Request Payment** > **Request MF / MTF** > **Review** > **Approval** > **MF/MTF**.
2. Klik tombol **Create** di pojok kiri atas halaman.
3. Pilih tipe permintaan pembayaran pada kolom **Type**.
3. Masukkan nomor SO pada kolom **Number SO**.
4. Sistem akan otomatis menarik nama Distributor, Dinkes, Number SPH/Invoice/PO, dan Date Invoice.
5. Jika tipe yang dipilih adalah *MF* maka isi penanggung jawab pada kolom **Responsible Person** dan nomor telephone  pada kolom **Mobile Numer**.
6. Jika tipe yang dipilih adalah *MTF* maka isi nomor rek penerima pada kolom **Serial Number**, isi kode bank pada kolom **Number SN** dan isi nama penerima pada kolom **PIC Name**

![Contoh Pengisian Form MF](../dept_sales/images/mf_header.png)
<center>*Gambar 1.1 : Tampilan pengisian form MF.*</center>

![Contoh Pengisian Form MTF](../dept_sales/images/mtf_header.png)
<center>*Gambar 1.2 : Tampilan pengisian form MTF.*</center>

---

## 2. Pengisian Harga dan Ongkos Kirim (untuk tipe **MF**)

Pada tab **MF Details**, masukkan produk yang telah dijual :

1. Klik **Add a line**.
2. Pilih PPN nya.
3. Masukkan Harga dan ongkos kirim ecat pada kolom **Price Ecat** dan **Shipping Cost Ecat**.
4. Masukkan presentase nilai MF dan ekstra MF pada kolom **Value MF (%)** dan **Value Extra MF(%)**.
4. Sistem akan otomatis menghitung *MF*, *Shipping Cost*, dan *Extra MF*

![Contoh Pengisian Detail MF](../dept_sales/images/mf_detail.png)
<center>*Gambar 2 : Tampilan pengisian product pada Sales Order.*</center>

---

## 3. Pengisian Harga dan Ongkos Kirim (untuk tipe **MTF**)

Pada tab **MTF Details**, masukkan produk yang ingin ditawarkan kepada pelanggan:

1. Klik **Add a product**.
2. Pilih produk dari daftar *dropdown*.
3. Masukkan jumlah produk pada kolom **Ordered Qty**.
4. Sistem akan otomatis menarik harga standar. Anda dapat mengubah harga satuan secara manual pada kolom **Unit Price** dan mengubah diskon pada kolom **Discount xx+xx(%)** jika terdapat kesepakatan khusus.

![Contoh Pengisian OrderLines](../dept_sales/images/so_product.png)
<center>*Gambar 2 : Tampilan pengisian product pada Sales Order.*</center>