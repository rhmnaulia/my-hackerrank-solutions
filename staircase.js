function staircase(n) {
    for(let i=0;i<n;i++){
        let row = '';

        for(let j=0;j<n;j++){
            if (i+j > n-2){
                row += '#';
            }else{
                row += ' ';
            }
        }
    console.log(row);
    }

}