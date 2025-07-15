// Contoh program yang menerapkan prinsip Liskov Substitution Principle (LSP)

// Pada contoh ini, subclass dapat menggantikan superclass tanpa mengubah perilaku program.
// Subclass tidak memperketat aturan yang ada di superclass, maka LSP terpenuhi.
// Kita akan membuat fungsi precondition di luar subclass dan superclass untuk menjaga fleksibilitas.

class User {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}

class UserRepository {
    save(user) {
        console.log(`Menyimpan ${user.name} ke database`);
    }
}

class EmailService {
    sendWelcomeEmail(user) {
        console.log(`Mengirim email ke ${user.email}`);
    }
}

class UserPrinter {
    print(user) {
        console.log(`Nama: ${user.name}, Email: ${user.email}`);
    }
}

class Notifier {
    send(user) {
        throw new Error("Method 'send' harus diimplementasikan oleh subclass");
    }
}

// Subclass mengikuti LSP: tidak mengubah kontrak dan tidak menambah syarat baru
class EmailNotifier extends Notifier {
    send(user) {
        console.log(`Mengirim notif ke email: ${user.email}`);
    }
}

class SMSNotifier extends Notifier {
    send(user) {
        console.log(`Mengirim notif ke SMS: ${user.phone}`);
    }
}

// Validasi email dilakukan di luar subclass
// Dibuat diluar subclass dan superclass untuk menjaga fleksibilitas dan menghindari pelanggaran LSP
function validateEmail(email) {
    return typeof email === 'string' && email.includes('@');
}

// Main Program
const user1 = new User("Syahrul", "syahrul@gmail.com", "08123456789");
const user2 = new User("Budi", "budi.com", "08345678901"); // Email tidak valid

const repo = new UserRepository();
const email = new EmailService();
const userPrinter = new UserPrinter();

const emailNotifier = new EmailNotifier();
const smsNotifier = new SMSNotifier();

// Jalankan Program
repo.save(user1);
email.sendWelcomeEmail(user1);
userPrinter.print(user1);

// Validasi email sebelum mengirim notifikasi
if (validateEmail(user1.email)) {
    emailNotifier.send(user1);
} else {
    console.error("Email tidak valid, tidak dapat mengirim notifikasi.");
}

if (validateEmail(user2.email)) {
    emailNotifier.send(user2);
} else {
    console.error("Email tidak valid, tidak dapat mengirim notifikasi.");
}

// SMS tetap dikirim (tidak butuh validasi email)
smsNotifier.send(user1);
smsNotifier.send(user2);
