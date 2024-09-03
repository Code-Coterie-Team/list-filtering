function filter_list(l) {
    let ans = [];
    for (let i = 0; i < l.length; i++){
        if (typeof(l[i]) == 'number'){
            ans.push(l[i]);
        }
    }
    return ans;
}


console.log(filter_list([1,2,"a","b"]))