let closeList=document.getElementById('down')
let openList=document.getElementById('right')
let arrowRight=document.getElementById('2')
let arrowDown=document.getElementById('3')
let openModernList=document.getElementById('modernlist')
let openModernList2=document.getElementById('modernlist2')
function open(){
    let deletefromelem=closeList.classList
    deletefromelem.remove('hide')
    let addtoelem=openList.classList
    addtoelem.remove('fa-arrow-right')
    let ModernList=openModernList.classList
    ModernList.remove('hide')
    
}
openList.addEventListener('click',open)
    function open_1(){
    let second=arrowRight.classList
    second.remove('fa-arrow-right')
    let secondOpen=arrowDown.classList
    secondOpen.remove('hide')
    let list=openModernList2.classList
    list.remove('hide')
}
arrowRight.addEventListener('click',open_1)
function close(){
    let second=arrowRight.classList
    second.add('fa-arrow-right')
    let secondOpen=arrowDown.classList
    secondOpen.add('hide')
    let list=openModernList2.classList
    list.add('hide')
}
arrowDown.addEventListener('click',close)
function closing(){
    let deletefromelem=closeList.classList
    deletefromelem.add('hide')
    let addtoelem=openList.classList
    addtoelem.add('fa-arrow-right')
    let ModernList=openModernList.classList
    ModernList.add('hide')
}
closeList.addEventListener('click',closing)