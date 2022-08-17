import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Storage,ref, uploadBytesResumable, getDownloadURL} from '@angular/fire/storage';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-adminaddproduct',
  templateUrl: './adminaddproduct.component.html',
  styleUrls: ['./adminaddproduct.component.css']
})
export class AdminaddproductComponent  {

  file : any ;
  files:any ;
  fileUrl = new Array;
  filesUrl = new Array;


  change(event:any){
    this.file = event.target.files;
    console.log('file set');
  }
  change2(event:any){
    this.files = event.target.files;
    console.log('file set');
  }
  
  constructor(public admin:AdminService,private storage:Storage,private actRoute:ActivatedRoute,private router:Router) { }
  Product:any={
    product_id:'',
    product_name:'',
    product_price:'',
    product_description:'',
    product_category:'',
    available_quantity:'',
    percentage_discount:'',
    upload_date:'',
    imageUrl: this.fileUrl,
    AuxUrl:this.filesUrl
  }
  image:any=''
  handleImage(){
   const formdata=new FormData;
   formdata.append("file",this.image)
   formdata.append("upload_preset","rjrvq9il")
   this.image.withCredentials = false;
   this.admin.ImageAdd(formdata)

  }

  ProductAdd(){
    let operation=localStorage.getItem('operation')
    if(operation=="edit"){
      let product=this.actRoute.snapshot.params['product']
      this.admin.productEDIT({Name:product,Product:this.Product}).subscribe((res:any)=>{
        console.log(res);
        this.router.navigate(["adminhome/manageproduct"])
        
      })

    }
    else{

      this.admin.productADD(this.Product)
    }

  }
  setImage(e:any){
    console.log(e.target.files[0]);
    this.image=e.target.files[0];
    
  }
  async upload(){
    console.log('clicked');

    for(let i=0;i<this.file.length;i++){
      const storageRef = ref(this.storage, this.file[i].name);
      const uploadTask = uploadBytesResumable(storageRef, this.file[i]);


      uploadTask.on('state_changed',
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        async() => {
          // Upload completed successfully, now we can get the download URL
          await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
            this.fileUrl.push(downloadURL);
            alert('uploaded')
          });
        }

      )
    }

  
}
async upload2(){
  console.log('clicked');

    for(let i=0;i<this.files.length;i++){
      const storageRef = ref(this.storage, this.files[i].name);
      const uploadTask = uploadBytesResumable(storageRef, this.files[i]);


      uploadTask.on('state_changed',
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        async() => {
          // Upload completed successfully, now we can get the download URL
          await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
            this.filesUrl.push(downloadURL);
            alert('uploaded')
          });
        }

      )
    }

}
}
