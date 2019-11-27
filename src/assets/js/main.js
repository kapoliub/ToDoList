function addNewListItem(){
    let randomID = String('itemID-' + Math.random() * 100000).split('.')[0];
    let inputTitle = $('#inputTitle').val();
    if($('#inputTitle').val().trim().length > 0){
        $('#listGroup').append('<li id="' + randomID + '" class="item"><span>'+inputTitle+'</span><button class="removeItem"><i class="fas fa-times"></i></button></li>');
        
        $('#' + randomID + ' .removeItem').on('click', function(){
            removeListItem(randomID);
        });  
        
        $('#' + randomID).on('click', function(){
            makeItemCompleted(randomID);
        });  
        $('#inputTitle').val('')
    }
}

function removeListItem(id){
    $('#' + id).remove();
}

function makeItemCompleted(id){
    $('#' + id).toggleClass('completed');
}

function clearList(){
    let li = $('.item');
    for(let i = li.length-1; i >= 0; i--){
        li[i].remove();
    }
}

function hideShow(){
    $('.item').each(function(){
        if($(this).hasClass('completed')){
            $(this).toggleClass('hiden');
        }
    })
}

function deleteCompleted(){
    $('.item').each(function(){
        if($(this).hasClass('completed')){
            $(this).remove();
        }
    })
}

$('#inputTitle').on('keyup', function(event){
    if(event.keyCode === 13){
        addNewListItem();
    }
});