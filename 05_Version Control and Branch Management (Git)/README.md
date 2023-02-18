## (05) Version Control and Branch Management (Git)

- ### Version Control System
Version Control digunakan untuk memperbarui versi suatu file / folder dari source code program. Selain Version Control System (VCS) ada juga Souce Code Manager (SCM) dan Revision Control System (RCS). Perkembangan VCS meliputi:
   - Single User / Local Repository = Manajemen file di dalam local repository
   - Centralized = Manajemen file / folder pada repository yang terpusat dan dapat digunakan secara bersamaan oleh developer untuk 1 project yang dikerjakan banyak developer. Centralized muncul dikarenakan perkembangan internet.
   - Distributed = Gabungan antara Centralized dan Single User. Paling banyak digunakan saat ini seperti Git dan Github.

- ### GIT
Salah satu VCS yang sekarang ini banyak digunakan oleh developer dalam mengembangkan suatu project secara bersama - sama. Project tersebut akan disimpan di dalam GIT Repository atau Folder Project. Git mempunyai Gitub sebagai perantara untuk hosting service. 

- ### Macam - macam area kerja dalam Git
   Working Directory -> Dimana suatu data file masih berada pada local storage di developer.
   Staging Area -> Dimana file yang sudah dimodifikasi oleh developer dan siap untuk dikirim pada remote repository tetapi file tersebut belum masuk ke dalam remote repository. Untuk memasukan file ke dalam staging area dapat menggunakan perintah git add
   Repository -> Dimana file sudah masuk ke dalam remote repository menggunakan perintah git commit dilanjutkan dengan git push.
