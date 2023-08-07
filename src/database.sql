/* Create Database and Table */
CREATE DATABASE kama;
 
USE kama;
 
CREATE TABLE `transport` (
  `id` INT(5) auto_increment PRIMARY KEY,
  `nama_supir` VARCHAR(50),
  `nohp` VARCHAR(15),
  `alamat` VARCHAR(100),
  `nopol` VARCHAR(35),
  `tahun_mobil` INT(4)
);