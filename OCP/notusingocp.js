//Contoh program yang tidak menerapkan prinsip Open/Closed Principle (OCP)

//Pada contoh ini, kita akan melihat bagaimana program tidak mengikuti prinsip OCP.
//Kita akan membuat class notifier yang mengirim notifikasi melalui email dan SMS,
//tetapi jika kita ingin menambahkan notifikasi baru, kita harus mengubah class yang sudah ada.

class User {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}

class UserRepository {
    save(User) {
        console.log(`Menyimpan ${User.name} ke database`)
    }
}

class EmailService {
    sendWelcomeEmail(User) {
        console.log(`Mengirim email ke ${User.email}`)
    }
}

class UserPrinter {
    print(User) {
        console.log(`Nama: ${User.name}, Email: ${User.email}`);
    }
}

//Disini kita membuat class Notifier yang mengirim notifikasi melalui email dan SMS.
//Ini tidak mengikuti prinsip OCP karena jika kita ingin menambahkan notifikasi baru,
//kita harus mengubah class Notifier ini.
class Notifier {
    send(User) {
        console.log(`Mengirim notifikasi ke ${User.email}`);
        console.log(`Mengirim notifikasi ${User.phone}`)
    }
}

//Main Program
const User1 = new User ("syahrul","syahrul@gmail.com", "08123456789");

const repo = new UserRepository();
const email = new EmailService();
const userprint = new UserPrinter();
const notifier = new Notifier();

//Jalankan Program
repo.save(User1);
email.sendWelcomeEmail(User1);
userprint.print(User1);
notifier.send(User1);