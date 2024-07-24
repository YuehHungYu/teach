function echo(msg){
    console.log(msg)
}

function add(n1,n2){
    console.log(n1+n2);
}
// export default 資料(物件); 
export default {
    echo:echo,
    add:add
}