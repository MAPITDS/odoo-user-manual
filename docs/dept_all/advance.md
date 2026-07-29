# <img src="../../icon_modul/advance.png" width="36" style="vertical-align: middle; margin-right: 12px; filter: brightness(0.9);"> Alur Pembuatan Advance

Halaman ini menjelaskan langkah-langkah standar untuk membuat dokumen *Advance* pengajuan perjalnana dinas (UC).

## 1. Membuat Pengajuan Baru

1. Masuk ke modul **Advance** > **Waiting Approval** > **Settlement** > **Waiting Approval Settelment** > **Post Journal**.
2. Klik tombol **Create** di pojok kiri atas halaman.
3. Pilih tipe pengajuan nya pada kolom **Type**.
4. Isi tanggal mulai dan tanggal akhir uc pada kolom **Start Date UC** dan **End Date UC**.
5. Jika ingin mengajukan dana terlebih dahulu maka ceklis pada kolom **Advance**.

![Contoh Pengisian Form Advance](../all_dept/images/advance_header.png)
<center><em>Gambar 1 : Tampilan pengisian form advance.</em></center>

---

## 2. Pengisian Rencana Aktivitas 

Pada tab **Request-Realization**, masukkan rencana kegiatan/kunjungan UC.

1. Klik **Add a line**.
2. Pilih tanggal pada kolom **Date**.
3. Jika ingin melakukan kunjungan ke tempat lain maka isi nama outlet yang akan dikunjungi pada kolom **Customer** dan nama orang yang dikunjungi pada kolom **PIC** juga department user tersebut pada kolom **User**. Lalu pilih kegitan yang dilakukan di outlet tersebut pada kolom **Activity**.
4. Kemudian isi rencana kegiatan/kunjungan yang akan dilakukan pada tanggal dan outlet tersebut pada kolom **Plan**.

![Contoh Pengisian Rencana UC](../all_dept/images/advance_request.png)
<center><em>Gambar 2 : Tampilan pengisian rencana UC.</em></center>

---

## 3. Pengisian Biaya Pengajuan UC 

Pada tab **Costs**, masukkan semua biaya terkait aktivitas/kunjungan yang dilakukan ketika UC tersebut.

1. Klik **Add a line**.
2. Isi tanggal rencana biaya yang akan diajukan pada kolom **Submission Date**.
3. Pilih jenis biaya tersebut pada kolom **Cost Category**.
4. Isi penjelasan lengkap biaya tersebut digunakan untuk apa, atau jika itu merupaka pengelompokan bbm diisi km yang tertera pada kendaraan. Diisi pada kolom **Description**.
5. Pilih department masing-masing pada kolom **Analytic**.
6. Kemudian isi perkiraan nominal biaya yang akan diajukan pada kolom **Requested Amount**.
7. Lalu klik **Save**. Dan jika sudah terisi 1 bulan penuh pada bulan yang dipilih maka klik **Submit**

![Contoh Pengisian Biaya UC](../all_dept/images/advance_costs.png)
<center><em>Gambar 3 : Tampilan pengisian biaya uc.</em></center>

---

## 4. Menunggu Approval Atasan

Pada state **Approver**, atasan yang akan mengapprove pengajuan UC user tersebut.

1. Atasan wajib memeriksa kegiatan/kunjungan UC yang telah di ajukan oleh team nya. 
2. Setelah sudah sesuai semua maka klik **Approve Atasan**.

---

## 5. Menunggu Approval HR/GA

Pada state **Approver**, atasan yang akan mengapprove pengajuan UC user tersebut.

1. Atasan wajib memeriksa kegiatan/kunjungan UC yang telah di ajukan oleh team nya. 
2. Setelah sudah sesuai semua maka klik **Approve Atasan**.

---

## 6. Menunggu Approval Finance Request

Pada state **Approver**, atasan yang akan mengapprove pengajuan UC user tersebut.

1. Atasan wajib memeriksa kegiatan/kunjungan UC yang telah di ajukan oleh team nya. 
2. Setelah sudah sesuai semua maka klik **Approve Atasan**.

---

## 4. Pengisian Realisasi Aktivitas 

Pada tab **Activities**, setelah membuat rencana aktivitas/kunjungan maka harus mengisi realisasi sesuai yang dilakukan pada periode bulan yang berjalan.

1. Pilih line sesuai tanggal kegiatan yang akan diisi realisasi nya.
2. Isi kegiatan yang sudah dilakukan pada hari tersebut pada kolom **Realization**.

---

## 5. Menunggu Approval Finance

Pada state **Approver Finance**, Team FA akan memerikasa keseluruhan dan kesamaan data aktivitas dengan bon/kwitansi yang telah dikirimkan oleh user.

1. Pada state **Approver Finance** maka team FA terlebih dahulu mengecek kebenaran data nya dengan menyamakan bon/kwitansi yang sudah dikirimkan dengan aktivitas user tersebut. 
2. Isi tanggal kapan bon/kwitansi tersebut di terima oleh FA pada kolom **Date Accept SAS**.
3. Lalu isi juga tanggal ketika sudah selesai memeriksa kesamaan data biaya yang telah dikeluarkan dengan bon/kwitansi pada kolom **Date Done FA**
4. Jika sudah sesuai maka klik **Approve Finance**.
5. Apabila sudah di bayarkan maka akan di Jurnal oleh team accounting dengan mengklik **Post Jurnal**.




## 📝 Referensi Tambahan

### SOP Harian (Checklist)
* <input type="checkbox"> **Memastikan aktivitas per tanggal sudah terisi dan di klik *submit* semua** sudah sesuai dan benar.
* <input type="checkbox"> **Memastikan biaya yang dikeluarkan sesuai kategori dan sesuai dengan bon/kwitansi yang tertera** sudah sesuai dengan realisasi.

### Fitur Berdasarkan Hak Akses
=== "User"
    Dapat membuat *Activity* baru dan dapat melihat keseluruhan data yang sudah terisi.

=== "Admin (SAS/FA/HR)"
    - Dapat melihat keseluruhan data pada modul.
    - Dapat melakukan perubahan pada tab *Costs* untuk menyamakan nilai pada yang diinput user dengan bon/kwitansi yang diterima.

=== "Approve Atasan"
    Memiliki tombol untuk meyetujui aktivitas yang sudah diisi per periode bulan berjalan dan mengubah status aktivity yang masuk ke dalam **Approver 1** menjadi **Approver Finance**.

=== "Approve FA Manager"
    Memiliki tombol untuk meyetujui aktivitas yang sudah diisi per periode bulan berjalan dan mengubah status aktivity yang masuk ke dalam **Approver Finance** menjadi **Post Journal**.

=== "Post Jurnal"
    Memiliki tombol untuk mengeksekusi jurnal yang masuk ke dalam akun-akun biaya yang dipilih pada aktivity tersebut yang masuk ke dalam **Post Journal** yang sudah di setujui oleh atasan dan fa manager.        
