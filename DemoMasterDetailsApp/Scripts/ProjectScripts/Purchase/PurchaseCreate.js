
$("#AddButton").click(function () {

    createRowForPurchase();

});

function createRowForPurchase() {

    var selectedItem = getSelectedItem();

    //Get Existing row number
    var index = $("#PurchaseDetailsTable").children("tr").length;

    //SL. for ui serial number for table
    var sl = index;

    //For MVC collection/list/details Array Index Bind/set
    var indexCell = "<td style='display:none'> <input type='hidden' id='Index" + index + "'  name='PurchaseDetailses.Index' value='" + index + "' /> </td>";

    //for serial number
    var serialCell = "<td> "+ (++sl)+" </td>";


    //binding value from ui to model through jquery
    var itemNameCell = "<td> <input type='hidden' id='ItemName" + index + "' name='PurchaseDetailses[" + index + "].Name' value='" + selectedItem.ItemName + "' /> " + selectedItem.ItemName + " </td>";
    var itemQuantityCell = "<td> <input type='hidden' id='ItemQuantity" + index + "' name='PurchaseDetailses[" + index + "].Quantity' value='" + selectedItem.ItemQuantity + "' /> " + selectedItem.ItemQuantity + " </td>";
    var itemPriceCell = "<td> <input type='hidden' id='ItemPrice" + index + "' name='PurchaseDetailses[" + index + "].Price' value='" + selectedItem.ItemPrice + "' /> " + selectedItem.ItemPrice + " </td>";

    //create row
    var createNewRow = "<tr> " + indexCell + serialCell + itemNameCell + itemQuantityCell + itemPriceCell + " </tr>";

    //for adding new row to the column
    $("#PurchaseDetailsTable").append(createNewRow);

    //for making text box empty
    clearInputFields();
}

function getSelectedItem() {

    //for validation and get value
    var ItemName = $("#ItemName").val();
    var ItemQuantity = $("#ItemQuantity").val();
    var ItemPrice = $("#ItemPrice").val();

    var item = {
        "ItemName": ItemName,
        "ItemQuantity": ItemQuantity,
        "ItemPrice": ItemPrice
    }

    return item;
}

function clearInputFields() {

    $("#ItemName").val("");
    $("#ItemQuantity").val("");
    $("#ItemPrice").val("");

}