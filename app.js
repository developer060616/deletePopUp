var deleteLinks = document.querySelectorAll('.link');
var confirmPopUp = document.querySelector('#confirm');
for( link of deleteLinks )
{
  link.addEventListener('click', (event) = function()
  {
    confirmPopUp.style.position = 'absolute';
    confirmPopUp.style.top = ( event.pageY - 20) + "px";
    confirmPopUp.style.left = ( event.pageX + 50 ) + "px";
    confirmPopUp.style.zIndex = '100';
    confirmPopUp.classList.remove('hidden');
    confirmPopUp.selectedRecord = event.target.parentElement.parentElement.id;
  });
}

var confirmPopUpCancelButton = document.querySelector('#cancel')
                                       .addEventListener('click', function() {
                                         confirmPopUp.classList.add('hidden');
                                       });

var confirmPopUpDeleteButton = document.querySelector('#delete')
                                       .addEventListener('click', () => {
                                         this.deleteRecord( confirmPopUp.selectedRecord );
                                         confirmPopUp.classList.add('hidden');
                                      });

function deleteRecord( selectedRecord )
{
  console.log('HTTP DELETE ' + selectedRecord);
}
