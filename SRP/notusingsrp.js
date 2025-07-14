//Contoh program yang tidak menerapkan prinsip Single Responsibility Principle (SRP)

//disini class user memiliki beberapa tanggung jawab sekaligus
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    save() {
        console.log(`Menyimpan ${this.name} ke database`);
    }
    sendWelcomeEmail() {
        console.log(`Mengirim email ke ${this.email}`);
    }
    print() {
        console.log(`Nama: ${this.name}, Email: ${this.email}`);
    }
}
 //Main Program
 const User1 = new User("syahrul", "syahrul@gmail.com");
 User1.save();
 User1.sendWelcomeEmail();
 User1.print();