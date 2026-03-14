const n = 5;
let k = 1;

for(let i = 1; i<=n; i++){
    let row =""
    for(let j=1; j<=i; j++){
        // k = k+1;
        row += k++ + " ";
    }
    console.log(row);
}
