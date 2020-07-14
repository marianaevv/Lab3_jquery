
$("#btnPost").click(function(){
    event.preventDefault();
    var str = $("#todoText").val();
    $('#todoList').append('<input type="checkbox" id="inputTodo" name="todos" id="todoItems"/>' + str + '<br>');
});
$("#btnClear").on("click", function(){
    event.preventDefault();
   $( "input[name='todos']" ).prop("checked", false);
})
$("#btnMark").on("click", function(){
    event.preventDefault();
    $( "input[name='todos']" ).prop("checked", true);
})
$("#btnDelete").on("click", function(){
    event.preventDefault();
    $("#todoList").html("");
})