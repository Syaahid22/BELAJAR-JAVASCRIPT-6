//Contoh program yang menerapkan prinsip Single Responsibility Principle (SRP)

//SRP menyatakan bahwa setiap kelas harus memiliki satu tanggung jawab atau alasan untuk berubah

//disini class user hanya memiliki tanggung jawab sebagai format data pengguna 
//dan tanggung jawab lainnya dipisahkan ke kelas yang berbeda

//class user yang berfungsi sebagai format data pengguna
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

//class userRepository yang berfungsi untuk menyimpan data pengguna
class UserRepository {
    save(User) {
        console.log(`Menyimpan ${User.name} ke database`)
    }
}

//class emailService yang berfungsi untuk mengirim email
class EmailService {
    sendWelcomeEmail(User) {
        console.log(`Mengirim email ke ${User.email}`)
    }
}

//class userPrinter yang berfungsi untuk mencetak informasi pengguna
class UserPrinter {
    print(User) {
        console.log(`Nama: ${User.name}, Email: ${User.email}`);
    }
}

//Main Program
const User1 = new User ("syahrul","syahrul@gmail.com");

const repo = new UserRepository();
const email = new EmailService();
const userprint = new UserPrinter();

//Jalankan Program
repo.save(User1);
email.sendWelcomeEmail(User1);
userprint.print(User1);