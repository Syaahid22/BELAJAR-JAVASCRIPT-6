//Contoh program yang tidak menerapkan prinsip Liskov Substitution Principle (LSP)

//Pada contoh ini, kita akan melihat bagaimana program tidak mengikuti prinsip LSP.
//Kita akan membuat precondicion dalam subclass EmailNotifier yang mana merupakan pelanggaran LSP.

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

class Notifier {
    send(User) {
        throw new Error("Method 'send' harus diimplementasikan oleh subclass");
    }
}

//Ini merupakan pelanggaran LSP karena kita menambahkan precondition pada subclass EmailNotifier.
//Jika email tidak valid, maka akan terjadi error, yang mana ini tidak sesuai dengan superclass Notifier.
//Subclass ini tidak mengikuti prinsip LSP karena subclass membuat batasan yang lebih ketat dari superclassnya.
class EmailNotifier extends Notifier {
    send(User) {
        if(!User.email.includes('@')) {
            throw new Error("Email tidak valid");
        }
        console.log(`Mengirim notif ke ${User.email}`);
    }
}

class SMSNotifier extends Notifier {
    send(User) {
        console.log(`Mengirim notif ke ${User.phone}`);
    }
}

//Main Program
const User1 = new User ("syahrul","syahrul@gmail.com", "08123456789");
const User2 = new User ("Budi", "budi.com", "08345678901"); // Email tidak valid

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
repo.save(User2);
email.sendWelcomeEmail(User2);
userprint.print(User2);
notifiers.forEach(notifier => {
    try {
        notifier.send(User1);
    } catch (error) {
        console.error(error.message);
    }
    try {
        notifier.send(User2);
    } catch (error) {
        console.error(error.message);
    }
});