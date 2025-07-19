// Contoh penggunaan prinsip Interface Segregation Principle (ISP) dalam JavaScript
// Pada contoh ini, kita akan membuat interface yang terpisah untuk setiap fitur printer.

//Fitur Printer
const Printable = Base => class extends Base {
    print(){
        throw new Error("print() harus diimplementasikan");
    }
}

const Scannable = Base => class extends Base {
    scan(){
        throw new Error("scan() harus diimplementasikan");
    }
}

const Copyable = Base => class extends Base {
    copy(){
        throw new Error("copy() harus diimplementasikan");
    }
}

const Faxable = Base => class extends Base {
    fax(){
        throw new Error("fax() harus diimplementasikan");
    }
}

// Class untuk extend semua fitur printer
class Device {}

//Printer yang hanya memiliki fitur print
class basicPrinter extends Printable(Device) {
    print() {
        console.log("Basic Printer: Printing...");
    }
}

//Printer yang mengimplementasikan semua fitur (All in-One Printer)
class allInOnePrinter extends Printable(Scannable(Copyable(Faxable(Device)))) {
    print() {
        console.log("All in one Printer: Printing...");
    }

    scan() {
        console.log("All in one Printer: Scanning...");
    }

    copy() {
        console.log("All in one Printer: Copying...");
    }

    fax() {
        console.log("All in one Printer: Faxing...");
    }
}

// Main Program
function operatePrinter(printer) {
    printer.print();
}

const basic = new basicPrinter();
const allInOne = new allInOnePrinter();

// Menjalankan fitur print
operatePrinter(basic);
operatePrinter(allInOne);

allInOne.scan();
basic.scan(); // Akan error karena basicPrinter tidak memiliki fitur scan