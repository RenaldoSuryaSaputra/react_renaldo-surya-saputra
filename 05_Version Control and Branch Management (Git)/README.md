## (05) Version Control and Branch Management (Git)

### 1. Version Control System
Version Control digunakan untuk memperbarui versi suatu file / folder dari source code program. Selain Version Control System (VCS) ada juga Souce Code Manager (SCM) dan Revision Control System (RCS). Perkembangan VCS meliputi:
   - Single User / Local Repository = Manajemen file di dalam local repository
   - Centralized = Manajemen file / folder pada repository yang terpusat dan dapat digunakan secara bersamaan oleh developer untuk 1 project yang dikerjakan banyak developer. Centralized muncul dikarenakan perkembangan internet.
   - Distributed = Gabungan antara Centralized dan Single User. Paling banyak digunakan saat ini seperti Git dan Github.

### 2. GIT
Salah satu VCS yang sekarang ini banyak digunakan oleh developer dalam mengembangkan suatu project secara bersama - sama. Project tersebut akan disimpan di dalam GIT Repository atau Folder Project. Git mempunyai Gitub sebagai perantara untuk hosting service. 

### 3. Macam - macam area kerja dalam Git
   - Working Directory -> Dimana suatu data file masih berada pada local storage di developer.
   - Staging Area -> Dimana file yang sudah dimodifikasi oleh developer dan siap untuk dikirim pada remote repository tetapi file tersebut belum masuk ke dalam remote repository. Untuk memasukan file ke dalam staging area dapat menggunakan perintah git add
   - Repository -> Dimana file sudah masuk ke dalam remote repository menggunakan perintah git commit dilanjutkan dengan git push.

### Code Review Exploration
[Link Repository Project](https://github.com/RenaldoSuryaSaputra/web_navbar.git)

Proyek exploration yang saya buat adalah proyek mengenai pembuatan navbar pada website. Pada proyek ini terdapat 2 programmer yaitu, dev-A dan dev-B yang masing - masing memiliki branch tersendiri pada repo proyek web_navbar. Dev-A memiliki ide untuk penamaan link kategori pada navbar adalah sebagai berikut: 'About', 'Contact', 'Register/Login' dan perubahan nama website. Sedangkan dev-B memiliki perubahan kategori link pada navbar sebagai berikut: 'Contact', 'About', 'Join' dab perubahan pada warna backgroud navbar.
Oleh karena tiap programmer memiliki ide masing - masing dalam pembuatan navbar sehingga menimbulkan konflik saat merge branch.  

[Bukti Screenshots Pelesaian Conflict](https://drive.google.com/drive/folders/1gAlKYA-QuHVqLUG5lhnjXfz0DzQasuq4?usp=share_link)
