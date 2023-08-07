import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-providers';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  nama_supir: string = '';
  nohp: string = '';
  alamat: string = '';
  nopol: string = '';
  tahun_mobil: string = '';
  
  constructor(
    private router: Router,
    public toastController: ToastController,
    private postPvdr: PostProvider,
  ) {

  }

  ngOnInit() {   
  }

  async addRegister(){
    if (this.nama_supir == '') {
      const toast = await this.toastController.create({
        message: 'Nama Lengkap harus diisi',
        duration: 2000
      });
      toast.present();
    } else if (this.nohp == '') {
      const toast = await this.toastController.create({
        message: 'No HP/WA harus di isi',
        duration: 2000
      });
      toast.present();
    } else if (this.alamat == '') {
      const toast = await this.toastController.create({
        message: 'Alamat harus di isi',
        duration: 2000
      });  
      toast.present();
    } else if (this.nopol == '') {
      const toast = await this.toastController.create({
        message: 'Nomor Polisi harus di isi',
        duration: 2000
      });
      toast.present();
    } else if (this.tahun_mobil == '') {
      const toast = await this.toastController.create({
        message: 'Tahun Mobil harus di isi',
        duration: 2000
      });
      toast.present();
    } else {
      let body = {
        nama_supir: this.nama_supir,
        nohp: this.nohp,
        alamat: this.alamat,
        nopol: this.nopol,
        tahun_mobil: this.tahun_mobil,
        aksi: 'add_register',
      };
      this.postPvdr.postData(body, 'action.php').subscribe(async data  => {
        var alertpesan = data.msg;
        if (data.success) {
          this.router.navigate(['/tab3']);
          const toast = await this.toastController.create({
            message: 'Selamat ! Registrasi Angkutan SUKSES.',
            duration: 2000
          });
          toast.present();
        } else {
          const toast = await this.toastController.create({
            message: alertpesan,
            duration: 2000
          });
        }
      });
    }
  }
}