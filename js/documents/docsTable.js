//Edit 'key' and 'columns' to connect your spreadsheet

//enter google sheets key here
var key =
  "https://docs.google.com/spreadsheets/d/1XKGE3XigQOtDpY6qyPEGQFE7-xEH1OEz5FunVM_dS6Y/pubhtml";

//"data" refers to the column name with no spaces and no capitals
//punctuation or numbers in your column name
//"title" is the column name you want to appear in the published table
var columns = [
{
  "data": "title",
  "title": "Title",
  "fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
    $(nTd).html("<a href='"+oData.filename+"'>"+oData.title+"</a>")
  }
}, {
  "data": "group",
  "title": "Group"
}, {
  "data": "doctype",
  "title": "Document Type"
}, {
  "data": "filetype",
  "title": "File Type"
}, {
  "data": "description",
  "title": "Description"
}];

$(document).ready(function() {

  function initializeTabletopObject() {
    Tabletop.init({
      key: key,
      callback: function(data, tabletop) {
        writeTable(data); //call up datatables function
      },
      simpleSheet: true,
      debug: false
    });
  }

  initializeTabletopObject();

  function writeTable(data) {
    //select main div and put a table there
    //use bootstrap css to customize table style: http://getbootstrap.com/css/#tables
    $('#document-table').html(
      '<table cellpadding="0" cellspacing="0" border="0" class="bordered responisve-table hover" id="mySelection"></table>'
    );

    //initialize the DataTable object and put settings in
    $("#mySelection").DataTable({
      "autoWidth": false,
      "data": data,
      "columns": columns,
      "order": [
        [1, "desc"]
      ], //order on second column
      "pagingType": "simple" //no page numbers
        //uncomment these options to simplify your table
        //"paging": false,
        //"searching": false,
        //"info": false
    });
  }
});
//end of writeTable
