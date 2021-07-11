function append(entry) {
    let input=document.getElementById('input')
    if (input.value==='undefined') {
        input.value=""
    }
    input.value=input.value+entry
}
function solve() {

    try {
        
    let input=document.getElementById('input')
    let result=eval(input.value)
    console.log(result);
    input.value=""+result
    } catch (error) {
        window.alert(error)
    }
}
function cut() {
    let input=document.getElementById('input')
    let sliced=input.value.slice(0,input.value.length-1)
    input.value=""+sliced
}
function clear() {
    let input=document.getElementById('input')
    input.value=""
}