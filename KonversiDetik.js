let totaldetik = 90900;

let jum = Math.floor(totaldetik / 3600);
let sisadetik = totaldetik % 3600;
let minit = Math.floor(sisadetik / 60);
let ditik = sisadetik % 60;

console.log(jum + " jum", minit + " menit", ditik + "detik");
