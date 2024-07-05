angular.module('myApp', [])
.controller('myCtrl', function () {
    var vm = this;

    vm.tires = [
        {
            brand: "Michelin",
            type: "All-Season",
            size: "225/50R17",
            inventoryItems: 120,
            location: "Warehouse A",
            barcode: "123456789012",
            price: 100,
            unitPrice: 90,
            tax: 10,
            discount: 5,
            stockAlert: 10,
            expense: 50
        },
        {
            brand: "Bridgestone",
            type: "Winter",
            size: "205/55R16",
            inventoryItems: 85,
            location: "Warehouse B",
            barcode: "987654321098",
            price: 150,
            unitPrice: 140,
            tax: 15,
            discount: 10,
            stockAlert: 15,
            expense: 70
        },
        {
            brand: "Goodyear",
            type: "Summer",
            size: "245/45R18",
            inventoryItems: 60,
            location: "Warehouse C",
            barcode: "123456789098",
            price: 200,
            unitPrice: 180,
            tax: 20,
            discount: 15,
            stockAlert: 20,
            expense: 90
        },
        {
            brand: "Pirelli",
            type: "Performance",
            size: "275/40R20",
            inventoryItems: 45,
            location: "Warehouse A",
            barcode: "098765432112",
            price: 250,
            unitPrice: 230,
            tax: 25,
            discount: 20,
            stockAlert: 25,
            expense: 110
        },
        {
            brand: "Continental",
            type: "All-Terrain",
            size: "265/70R17",
            inventoryItems: 75,
            location: "Warehouse B",
            barcode: "567890123456",
            price: 300,
            unitPrice: 280,
            tax: 30,
            discount: 25,
            stockAlert: 30,
            expense: 130
        }
    ];

    vm.brands = ["Michelin", "Bridgestone", "Goodyear", "Pirelli", "Continental"];
    vm.types = ["All-Season", "Winter", "Summer", "Performance", "All-Terrain"];
    vm.sizes = ["225/50R17", "205/55R16", "245/45R18", "275/40R20", "265/70R17"];
    vm.locations = ["Warehouse A", "Warehouse B", "Warehouse C"];

    vm.newTire = {};

    vm.addNewTire = function () {
        vm.tires.push(vm.newTire);
        vm.newTire = {};
        bootstrap.Modal.getInstance(document.getElementById('addTireModal')).hide();
    };

    vm.viewTire = function (tire, $event) {
        vm.selectedTire = tire;
        if ($event) $event.stopPropagation();
        new bootstrap.Modal(document.getElementById('viewTireModal')).show();
    };

    vm.editTire = function (tire, $event) {
        // Add edit functionality here
        if ($event) $event.stopPropagation();
        alert("Edit functionality to be implemented");
    };

    vm.deleteTire = function (tire, $event) {
        // Add delete functionality here
        if ($event) $event.stopPropagation();
        alert("Delete functionality to be implemented");
    };
});