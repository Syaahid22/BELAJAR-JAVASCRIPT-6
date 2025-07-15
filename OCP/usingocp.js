//Contoh program yang menerapkan prinsip Open/Closed Principle (OCP)

//Open /Closed Principle (OCP) menyatakan bahwa kelas harus terbuka untuk ekstensi tetapi tertutup untuk modifikasi.

//Dalam contoh ini, kita akan memisahkan tanggung jawab ke dalam kelas-kelas yang berbeda untuk mengikuti prinsip OCP.
//dengan cara ini, kita dapat menambahkan fungsionalitas baru tanpa mengubah kelas yang sudah ada.

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

//Abstract class untuk Notifier (superclass)
class Notifier {
    send(User) {
        throw new Error("Method 'send' harus diimplementasikan oleh subclass");
    }
}

//Subclasses untuk Notifikasi lewat Email
class EmailNotifier extends Notifier {
    send(User) {
        console.log(`Mengirim notif ke ${User.email}`);
    }
}

//Subclasses untuk Notifikasi lewat SMS
class SMSNotifier extends Notifier {
    send(User) {
        console.log(`Mengirim notif ke ${User.phone}`);
    }
}

//Main Program
const User1 = new User ("syahrul","syahrul@gmail.com", "08123456789");

const repo = new UserRepository();
const email = new EmailService();
const userprint = new UserPrinter();
const notifiers = [
    new EmailNotifier(),
    new SMSNotifier()
];

//Jalankan Program
repo.save(User1);
email.sendWelcomeEmail(User1);
userprint.print(User1);
notifiers.forEach(notifier => notifier.send(User1));