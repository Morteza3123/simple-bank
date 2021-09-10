async function loadweb3(){
    if(window.ethereum){
        window.web3=new Web3(window.ethereum);
        window.ethereum.enable(); 
    } 
}                
    
async function loadContract(){
    //ABI & address of owner who deployed it on metamask network in RemixIDE
  var ABI = [
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "_amount",
              "type": "uint256"
          }
      ],
      "name": "deposit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "show",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  }
]
  var Address = '0x48a0A3B367171826f1d102F70c6AfbBE1d024c59'
    return await new window.web3.eth.Contract( ABI, Address); 
} 

  
async function load(){
      await loadweb3();
   window.contract = await loadContract();
  }
   

load();  



async function show() {
 let a = await contract.methods.show().call();
 document.getElementById("instructor").innerHTML=a;
}

async function deposit(){

var accounts = await web3.eth.getAccounts();
 var account = accounts[0];
 var name = await document.getElementById("name").value;
 contract.methods.deposit(name).send({
     from : account
    });
}
