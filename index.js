// array of loans///////////////////////////////////////////////////////////////////////////////////////////////////////////
var loans = [
    {
        id: 0,
        customerName: "John Smith",
        phoneNumber: "123-456-7890",
        address: "123 Main Street",
        loanAmount: 12000,
        interest: .062,
        loanTermYears: 5,
        loanType: "Traditional",
        description: "basic loan",
        calculatedLoanAmount: function(){
            return this.loanAmount + (this.loanAmount * this.interest * this.loanTermYears);
        }
    },
    {
        id: 1,
        customerName: "Jane Doe",
        phoneNumber: "456-789-0123",
        address: "124 Main Street",
        loanAmount: 20000,
        interest: .062,
        loanTermYears: 4,
        loanType: "Traditional",
        description: "basic loan",
        calculatedLoanAmount: function(){
            return this.loanAmount + (this.loanAmount * this.interest * this.loanTermYears);
        }
    },
    {
        id: 2,
        customerName: "MAMZIRP, Inc.",
        phoneNumber: "800-444-5555",
        address: "125 Main Street",
        loanAmount: 100000,
        interest: .05,
        loanTermYears: 10,
        loanType: "Business",
        description: "business loan",
        calculatedLoanAmount: function(){
            return this.loanAmount + (this.loanAmount * this.interest * this.loanTermYears);
        }
    },
    {
        id: 3,
        customerName: "Steve's Electronics",
        phoneNumber: "555-456-7777",
        address: "126 Main Street",
        loanAmount: 30000,
        interest: .07,
        loanTermYears: 3,
        loanType: "Small Business",
        description: "small business loan",
        calculatedLoanAmount: function(){
            return this.loanAmount + (this.loanAmount * this.interest * this.loanTermYears);
        }
    },
    {
        id: 4,
        customerName: "Jean Luc Picard",
        phoneNumber: "123-123-1701",
        address: "1701 NCC Way",
        loanAmount: 1000,
        interest: .034,
        loanTermYears: 1,
        loanType: "Short Term",
        description: "short term basic loan",
        calculatedLoanAmount: function(){
            return this.loanAmount + (this.loanAmount * this.interest * this.loanTermYears);
        }
    },
]

// declarations ////////////////////////////////////////////////////////////////////////////////////////////////////////////
// format to USD using the locale, style, and currency.
let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

// grand total amount of all loans
let grandTotal = 0;

// print loan array ////////////////////////////////////////////////////////////////////////////////////////////////////////
// easy mode:
// for(let i = 0 ; i < loans.length; i++){
//     const totalAmount = loans[i].calculatedLoanAmount();
//     console.log(loans[i])
//     console.log("Total Loan Amount for Loan # " + loans[i].id + " : " + USDollar.format(loans[i].calculatedLoanAmount()));
// pretty mode:
for(let i = 0 ; i < loans.length; i++){
    // accumulate grand total
    grandTotal += Number(loans[i].calculatedLoanAmount());
    // display loan info
    console.log("============================================");
    console.log("Loan #: " + loans[i].id);
    console.log("Customer: " + loans[i].customerName);
    console.log("Phone: " + loans[i].phoneNumber);
    console.log("Address: " + loans[i].address);
    console.log("Type: " + loans[i].loanType);
    console.log("Loan Amount: " + USDollar.format(loans[i].loanAmount));
    console.log("Interest: " + (loans[i].interest * 100).toFixed(2) + " %");
    console.log("Term: " + loans[i].loanTermYears + " years");
    console.log("Total Loan Amount: " + USDollar.format(loans[i].calculatedLoanAmount()));
}
console.log("============================================");
console.log("==> Grand Total: " + USDollar.format(grandTotal));