const lakiNames = ["Dimas", "Rizky", "Bayu", "Iqbal", "Juna", "Fajar", "Andre", "Budi", "Adi", "Rama",
  "Tio", "Hendra", "Deni", "Fauzan", "Bima", "Agus", "Ardi", "Kevin", "Teddy", "Anwar",
  "Eko", "Arief", "Nando", "Krisna", "Fikri", "Yoga", "Dion", "Rizal", "Hasan", "Vicky",
  "Sandi", "Zaki", "Ari", "Tommy", "Ivan", "Reza", "Gilang", "Rudi", "Angga", "Nico",
  "Dedi", "Farhan", "Rahmat", "Rendy", "Vina", "Saiful", "Bobby", "Dika", "Iqbal", "Syahrul",
  "Aldi", "Riyan", "Arif", "Fery", "Bahar", "Alfian", "Erik", "Edo", "Haris", "Satria",
  "Oktavian", "Iqbal", "Alif", "Deddy", "Riyan", "Ferry", "Andri", "Kamal", "Fariz", "Ramadhan",
  "Heri", "Danang", "Yusuf", "Asep", "Iman", "Rifqi", "David", "Fahmi", "Ardian", "Iqbal",
  "Fauzi", "Vira", "Dwi", "Yadi", "Zulfi", "Arjuna", "Agung", "Sabar", "Maman", "Cahya",
  "Kunto", "Aldo", "Riky", "Bagus", "Ali", "Dian", "Hendra", "Rico", "Ali", "Pandu",
  "Gilang", "Arman", "Irvan", "Wahyu", "Ade", "Afri", "Rudi", "Dian", "Dimas", "Fahri",
  "Aziz", "Syamsul", "Vendi", "Ridwan", "Syahid", "Tomi", "Lutfi", "Anton", "Zainal",
  "Johan", "Jamal", "Dika", "Alim", "Panjul", "Samsul", "Kamaludin", "Endra", "Cahyo", "Ammar",
  "Zaenal", "Umar", "Gilbert", "Nando", "Fachri", "Zaki", "Nurul", "Syaifuddin", "Idris", "Heri",
  "Wira", "Candra", "Budiarto", "Taufik", "Lukas", "Abdurrahman", "Rahman", "Faiz", "Qomar",
  "Nazar", "Iqbal", "Ali", "Hasan", "Dimas", "Jusuf", "Habib", "Ismail", "Maman", "Tedi",
  "Ihsan", "Aditya", "Afif", "Izzat", "Ardhi", "Riski", "Aldi", "Riki", "Bram", "Abdurrahman",
  "Arfan", "Daryanto", "Baron", "Ihsan", "Abian", "Aras", "Darto", "Tito", "Alfian", "Budi",
  "Syaiful", "Samsudin", "Rizki", "Dedy", "Budianto", "Devan", "Sunan", "Albert", "Ridho", "Farhan",
  "Reza", "Gibran", "Salman", "Naufal", "Harith", "Syawal", "Rufan", "Yayan", "Yusuf", "Zacharias",
  "Umar", "Kamaruddin", "Syarif", "Aziz", "Nurul", "Roni", "Mikhael", "Rian", "Wahyudi", "Fahri",
  "Adhitya", "Rizal", "Fadel", "Syafiq", "Jamil", "Tejo", "Bensu", "Amir", "Aslam", "Reza",
  "Yusuf", "Muhammad", "Amin", "Zakaria", "Rifqi", "Daffa", "Zakir", "Farhan", "Fikri", "Abdullah",
  "Khalid", "Hilman", "Farouk", "Azzam", "Najib", "Arif", "Riyan", "Anwar", "Zaidan", "Zaid",
  "Miko", "Taufiq", "Suryo", "Yusuf", "Haris", "Tito", "Budianto", "Gilang", "Arman", "Rifki"];
const perempuanNames = ["Ayu", "Sari", "Indah", "Dewi", "Putri", "Mira", "Lia", "Rina", "Ika", "Tina",
  "Dina", "Maya", "Nina", "Kiki", "Siti", "Diana", "Fifi", "Bella", "Zara", "Citra",
  "Rani", "Fera", "Eka", "Aulia", "Rika", "Lina", "Sinta", "Rika", "Mellisa", "Ririn",
  "Yuni", "Fina", "Rika", "Dina", "Nadia", "Zahra", "Vina", "Aisha", "Putri", "Gita",
  "Alya", "Nisa", "Vivi", "Tasya", "Nina", "Titi", "Dewi", "Rani", "Anggi", "Sabrina",
  "Cynthia", "Yanti", "Tami", "Evi", "Novi", "Indra", "Imelda", "Wulan", "Ria", "Elisa",
  "Umi", "Zahra", "Kirana", "Ruri", "Sari", "Kiki", "Martha", "Heni", "Kirana", "Anisa",
  "Risma", "Selvi", "Hani", "Diana", "Yulia", "Riana", "Nurul", "Hera", "Ines", "Krisna",
  "Mila", "Nabila", "Lia", "Benedetta", "Putri", "Pipih", "Sinta", "Fitri", "Aulia", "Ratih",
  "Ika", "Betrice", "Elin", "Alisha", "Ira", "Alvia", "Anisa", "Sri", "Tya", "Fita",
  "Zulia", "Silvi", "Amelia", "Yulia", "Sella", "Sinta", "Hawa", "Nana", "Fahira", "Alya",
  "Febby", "Yuliana", "Cintya", "Rosita", "Ria", "Kesia", "Mila", "Cynthia", "Siska", "Vita",
  "Vira", "Riska", "Nadya", "Silviana", "Fira", "Yuliana", "Titi", "Anisa", "Reina",
  "Putri", "Mimi", "Yenni", "Melani", "Sella", "Hani", "Benedicta", "Lily", "Mila", "Asta",
  "Siska", "Indah", "Hilda", "Anggie", "Dinda", "Nisa", "Yuli", "Nika", "Adelia", "Silviana",
  "Gita", "Katrina", "Lina", "Melisa", "Farida", "Iren", "Elsa", "Siti", "Mila", "Dhea",
  "Farah", "Erika", "Wanda", "Shinta", "Sita", "Maya", "Alisa", "Alvita", "Marlina", "Fara",
  "Iffa", "Dina", "Alya", "Anggita", "Chika", "Shafa", "Wina", "Dita", "Putri", "Devi",
  "Sabela", "Revi", "Tasya", "Sulis", "Amira", "Sahira", "Olivia", "Anastasia", "Erin", "Evelin",
  "Putri", "Dewi", "Rani", "Zahra", "Galih", "Karin", "Lulut", "Mila", "Fanny", "Pipih",
  "Milla", "Sania", "Farhan", "Celine", "Ayu", "Rita", "Chintya", "Nabila", "Sri", "Siti",
  "Ninda", "Laila", "Chandra", "Anita", "Candra", "Dian", "Amanda", "Wulan", "Melisa", "Yulia",
  "Fanny", "Novita", "Arina", "Yuliana", "Wanda", "Anggi", "Hilda", "Lani", "Vina", "Nina"];

document.getElementById('jodohForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const tanggal = parseInt(document.getElementById('tanggal').value);
  const bulan = parseInt(document.getElementById('bulan').value);
  const gender = document.getElementById('gender').value;

  const index = (tanggal * bulan) % 0,9;
  let jodoh = (gender === 'L') ? perempuanNames[index] : lakiNames[index];

  document.getElementById('hasil').innerText = `Nama Jodoh Kamu adalah: ${jodoh} 💕`;
});
