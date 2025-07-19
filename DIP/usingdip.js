// ========== INTERFACE ABSTRAKSI ========== //
class IPrintable {
    print() {
        throw new Error("print() harus diimplementasikan");
    }
}
class IScannable {
    scan() {
        throw new Error("scan() harus diimplementasikan");
    }
}
class ICopyable {
    copy() {
        throw new Error("copy() harus diimplementasikan");
    }
}
class IFaxable {
    fax() {
        throw new Error("fax() harus diimplementasikan");
    }
}

// ========== MIXIN FITUR ========== //
const Printable = Base => class extends Base {
    print() {
        throw new Error("print() harus diimplementasikan");
    }
};

const Scannable = Base => class extends Base {
    scan() {
        throw new Error("scan() harus diimplementasikan");
    }
};

const Copyable = Base => class extends Base {
    copy() {
        throw new Error("copy() harus diimplementasikan");
    }
};

const Faxable = Base => class extends Base {
    fax() {
        throw new Error("fax() harus diimplementasikan");
    }
};

// ========== IMPLEMENTASI PRINTER ========== //
class Device {}

class BasicPrinter extends Printable(Device) {
    print() {
        console.log("Basic Printer: Printing...");
    }
}
// Implementasi mengikuti interface
Object.setPrototypeOf(BasicPrinter.prototype, IPrintable.prototype);

class AllInOnePrinter extends Printable(Scannable(Copyable(Faxable(Device)))) {
    print() {
        console.log("All-in-One Printer: Printing...");
    }
    scan() {
        console.log("All-in-One Printer: Scanning...");
    }
    copy() {
        console.log("All-in-One Printer: Copying...");
    }
    fax() {
        console.log("All-in-One Printer: Faxing...");
    }
}
// Implementasi mengikuti interface
    Object.setPrototypeOf(AllInOnePrinter.prototype, IPrintable.prototype);

// ========== HIGH LEVEL MODULE (bergantung pada abstraksi) ========== //
function operatePrinter(printer) {
    if (!(printer instanceof IPrintable)) {
        throw new Error("printer harus implementasi IPrintable");
    }

    printer.print();
}

// ========== PENGGUNAAN ========== //
const basic = new BasicPrinter();
const allInOne = new AllInOnePrinter();

operatePrinter(basic);       // ✅ OK
operatePrinter(allInOne);    // ✅ OK

allInOne.scan();             // ✅ OK
// basic.scan();            // ❌ Akan error: basic tidak punya scan()
