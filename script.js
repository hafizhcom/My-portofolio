const containerProject = document.querySelector(".container-project");

const projects = [
  {
    id: 1,
    title: "Membuat Web Toko Ikan Hias Sederhana",
    image: "project-1.png",
    description: "Saya membuat web toko ikan hias sederhana menggunakan HTML, CSS, dan JavaScript. Web ini memiliki fitur untuk menampilkan produk ikan hias, serta informasi tentang harga dan deskripsi produk.",
    technologies: ["HTML", "CSS", "JavaScript"],
    challenge: "Menghadapi tantangan dalam membuat desain web yang responsif dan mudah digunakan serta memastikan aksesibilitas di berbagai perangkat."
  },
  {
    id: 2,
    title: "Membuat Jaringan Mikrotik",
    image: "project-2.png",
    description: "Saya membuat jaringan Mikrotik untuk menghubungkan beberapa perangkat dalam satu jaringan. Jaringan ini memiliki fitur untuk mengatur akses internet dan membatasi akses ke situs tertentu.",
    technologies: ["Mikrotik OS", "Networking"],
    challenge: "Mengkonfigurasi jaringan agar berfungsi dengan baik dan aman, serta memastikan stabilitas akses untuk semua perangkat."
  },
  {
    id: 3,
    title: "Membuat Desain Poster Sekolah",
    image: "project-3.png",
    description: "Saya membuat desain poster sekolah menggunakan aplikasi Canva. Poster ini memiliki desain yang menarik dan informatif, serta dapat digunakan untuk mempromosikan sekolah.",
    technologies: ["Canva", "Graphic Design"],
    challenge: "Membuat desain yang menarik dan efektif, serta memastikan legibilitas (mudah dibaca) dan ukuran yang sesuai."
  },
  {
    id: 4,
    title: "Membuat Web Music Player",
    image: "projek4.png",
    description: "Saya membuat web music player yang memungkinkan pengguna untuk memutar musik secara online. Web ini memiliki fitur untuk memutar musik, menampilkan daftar lagu, dan mengatur volume.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    challenge: "Memastikan pemutar musik berfungsi di berbagai browser dan perangkat, serta optimasi kecepatan loading musik."
  }
];

projects.forEach((project)=>{
  let technologies = ``

  project.technologies.forEach((tech,index)=>{
    if(index == 0){
        technologies +=  tech 
    }else{
         technologies += ", "+ tech 
    }
  })

const htmlFragment =  `
     <img src="${project.image}" alt="projek4" class="project-image">
      <h2>${project.title}</h2>
      <p><b>Deskripsi : </b>${project.description}</p>
      <p><b>Teknologi yang digunakan : </b>${technologies}</p>
      <p><b>Tantangan : </b>${project.challenge}</p>
    `

        containerProject.innerHTML += htmlFragment
})
