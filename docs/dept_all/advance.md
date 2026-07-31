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

## 2. Pengisian Rencana Aktivitas UC

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

Pada state **Approver**, atasan yang akan menyetujui pengajuan UC user tersebut.

1. Atasan wajib memeriksa kegiatan/kunjungan UC yang telah di ajukan oleh team nya. 
2. Setelah sudah sesuai semua maka klik **Approve Atasan**.

---

## 5. Menunggu Approval HR/GA

Pada state **Approver HR/GA**, jika ada biaya yang dikeluarkan dari HR/GA dan butuh persetujuan untuk di  proses.

1. HR/GA memeriksa kegiatan/kunjungan UC yang telah di ajukan oleh user dan kebutuhan biaya apa yang berhubungan dengan HR/GA (seperti pemesanan Hotel/Ticket). 
2. Setelah sudah sesuai semua maka klik **Approve GA**.

![Contoh Pengisian Biaya UC HR/GA](../all_dept/images/advance_hrga.png)
<center><em>Gambar 3 : Tampilan pengisian biaya uc hr/ga.</em></center>

---

## 6. Menunggu Approval Finance Request

Pada state **Approver Finance Request**, FA akan menyetujui permintaan pengajuan biaya yang akan dikeluarkan oleh user.

1. FA memeriksa perkiraan rincian biaya untuk kebutuhan UC yang telah di ajukan oleh user. 
2. Setelah sudah sesuai semua maka klik **Approve Finance**.

---

## 7. Pengisian Realisasi Aktivitas UC

Pada state **Settelment**, setelah membuat rencana aktivitas/kunjungan maka harus mengisi kegiatan yang terjadi sesuai yang dilakukan pada hari tersebut.

1. Pada tab **Request-Realization** pilih line sesuai tanggal kegiatan yang akan diisi realisasi nya dan isi kegiatan yang sudah dilakukan pada hari tersebut pada kolom **Realization**.
2. Pada tab **Costs** pilih line sesuai tanggal biaya yang akan diisi sesuai dengan bon/kwitansi berdasarkan biaya tersebut pada kolom **Realization Date** dan **Realization Amount**.
3. Kemudian klik **Submit Settle**.

---

## 8. Menunggu Approval Settle Atasan

Pada state **Approver Settle**, Atasan akan menyetujui data kegiatan/kunjungan dan biaya yang telah dilakukan oleh user.

1. Atasan wajib memeriksa kegiatan/kunjungan UC yang telah di dilakukan oleh team nya dan juga memeriksa biaya yang telah dikeluarkan oleh user. 
2. Setelah sudah sesuai semua maka klik **Approve Atasan**.

---

## 8. Menunggu Approval Finance Settle

Pada state **Approver Finance Settle**, Team FA akan memerikasa keseluruhan dan kesamaan data kegiatan dan biaya dengan bon/kwitansi yang telah dikirimkan oleh user.

1. Pada tab **Cost** maka team FA terlebih dahulu mengecek kebenaran data nya dengan menyamakan bon/kwitansi yang sudah dikirimkan dengan kegiatan user tersebut. 
2. Isi tanggal kapan bon/kwitansi tersebut di terima oleh FA pada kolom **Date Accept SAS**.
3. Lalu isi juga tanggal ketika sudah selesai memeriksa kesamaan data biaya yang telah dikeluarkan dengan bon/kwitansi pada kolom **Date Done FA**
4. Jika sudah sesuai maka klik **Approve Finance Settle**.
5. Apabila sudah di bayarkan maka akan di Jurnal oleh team accounting dengan mengklik **Post Jurnal**.



## 📝 Referensi Tambahan

### SOP Harian (Checklist)
* <input type="checkbox"> **Memastikan kegiatan/kunjungan per tanggal sudah terisi semua** sudah sesuai dan benar.
* <input type="checkbox"> **Memastikan biaya yang dikeluarkan sesuai kategori dan sesuai dengan bon/kwitansi yang tertera** sudah sesuai dengan realisasi.


### Fitur Berdasarkan Hak Akses
=== "User"
    Dapat membuat *Activity* baru dan dapat melihat keseluruhan data yang sudah terisi.

=== "Admin (SAS/FA/HR)"
    - Dapat melihat keseluruhan data pada modul.
    - Dapat melakukan perubahan pada tab *Costs* untuk menyamakan nilai pada yang diinput user dengan bon/kwitansi yang diterima.

=== "Approve Atasan"
    Memiliki tombol untuk meyetujui kegiatan dan biaya UC yang sudah diisi sesuai tanggal pengajuan dan mengubah status pengajuan **Approver** / **Approver Settle** menjadi **Approver Finance Request** / **Approver Finance Settle**.

=== "Approve Finance"
    Memiliki tombol untuk meyetujui kegiatan dan biaya yang sudah diisi sesuai tanggal pengajuan dan mengubah status pengajuan **Approver Finance Request** / **Approver Finance Settle** menjadi **Settlement** / **Post Journal**.

=== "Approve GA"
    Memiliki tombol untuk meyetujui kegiatan dan biaya yang sudah diisi yang berhubungan dengan HR/GA dan mengubah status pengajuan **Approver HR/GA** menjadi **Settlement**.

=== "Post Jurnal"
    Memiliki tombol untuk mengeksekusi jurnal yang masuk ke dalam akun-akun biaya yang dipilih pada pengajuan tersebut yang masuk ke dalam **Post Journal** yang sudah di setujui oleh atasan dan finance.        
