{
    document.getElementById('addTitle').addEventListener('click', function(){
        let inputTitle = document.getElementById('inputTitle').value;
        if(inputTitle !==''){

            let li = document.createElement('li');
            li.classList.add('item');
            li.addEventListener('click', function(){
                li.classList.toggle('completed');
            });

            let span = document.createElement('span');
            span.innerHTML = inputTitle;
            li.prepend(span);
            
            let button = document.createElement('button');
            button.classList.add('removeItem');
            button.innerHTML = 'x';
            button.addEventListener('click', function(){
                li.remove();
            });
            li.append(button);

            document.getElementById('listGroup').prepend(li);
            document.getElementById('inputTitle').value = '';
        }
    });
}
{
    document.getElementById('inputTitle').addEventListener('keyup', function(event){
        if(event.keyCode === 13){
            document.getElementById('addTitle').click();
        }
    });
}
{
    function clearList(){
        let li = document.getElementsByClassName('item');
        for(let i = li.length-1; i >= 0; i--){
            li[i].remove();
        }
    }
}
{
    function hideShow(){
        let li = document.getElementsByClassName('item');
        for(let i = 0; i<li.length; i++){
            if(li[i].classList.contains('completed')){
                li[i].classList.toggle('hiden');
            }
        }
    }
}
{
    function deleteCompleted(){
        let li = document.getElementsByClassName('item');
        for(let i = li.length-1; i>=0; i--){
            if(li[i].classList.contains('completed')){
                li[i].remove();
            }
        }
    }
}
